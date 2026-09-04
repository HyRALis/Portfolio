/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const net = require('net');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const getFreePort = () =>
    new Promise((resolve, reject) => {
        const server = net.createServer();
        server.once('error', reject);
        server.listen(0, '127.0.0.1', () => {
            const address = server.address();
            const port = typeof address === 'object' && address ? address.port : null;
            server.close(() => (port ? resolve(port) : reject(new Error('Unable to allocate a browser port'))));
        });
    });

const findBrowser = () => {
    const candidates = [
        process.env.CHROME_PATH,
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
        '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        '/usr/bin/google-chrome',
        '/usr/bin/chromium',
        '/usr/bin/chromium-browser'
    ].filter(Boolean);
    const executable = candidates.find((candidate) => fs.existsSync(candidate));

    if (!executable) throw new Error('Chrome or Edge was not found. Set CHROME_PATH to a Chromium executable.');
    return executable;
};

const connectCdp = async (webSocketUrl) => {
    const socket = new WebSocket(webSocketUrl);
    const pending = new Map();
    let messageId = 0;

    await new Promise((resolve, reject) => {
        socket.addEventListener('open', resolve, { once: true });
        socket.addEventListener('error', reject, { once: true });
    });
    socket.addEventListener('message', (event) => {
        const message = JSON.parse(event.data);
        if (!message.id || !pending.has(message.id)) return;
        const { resolve, reject } = pending.get(message.id);
        pending.delete(message.id);
        if (message.error) reject(new Error(message.error.message));
        else resolve(message.result);
    });

    return {
        send(method, params = {}) {
            return new Promise((resolve, reject) => {
                const id = ++messageId;
                pending.set(id, { resolve, reject });
                socket.send(JSON.stringify({ id, method, params }));
            });
        },
        close() {
            socket.close();
        }
    };
};

(async () => {
    const baseUrl = process.env.A11Y_URL || 'http://localhost:3000';
    const screenshotDirectory = process.env.A11Y_SCREENSHOT_DIR;
    const screenshotTarget = process.env.A11Y_SCREENSHOT_TARGET || 'skills';
    const locales = ['en', 'mk'];
    const viewports = [
        { name: 'desktop', width: 1440, height: 1000, mobile: false },
        { name: 'laptop', width: 1024, height: 900, mobile: false },
        { name: 'tablet', width: 768, height: 1024, mobile: false },
        { name: 'mobile', width: 390, height: 844, mobile: true }
    ];
    const profileDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-a11y-'));
    const port = await getFreePort();
    let browserProcess;
    let cdp;

    try {
        browserProcess = spawn(
            findBrowser(),
            [
                '--headless=new',
                '--disable-gpu',
                '--hide-scrollbars',
                `--remote-debugging-port=${port}`,
                `--user-data-dir=${profileDirectory}`,
                'about:blank'
            ],
            { stdio: ['ignore', 'ignore', 'pipe'], windowsHide: true }
        );

        await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => reject(new Error('Timed out starting the browser')), 15000);
            browserProcess.once('error', reject);
            browserProcess.stderr.on('data', (chunk) => {
                if (chunk.toString().includes('DevTools listening')) {
                    clearTimeout(timeout);
                    resolve();
                }
            });
        });

        const pages = await fetch(`http://127.0.0.1:${port}/json`).then((response) => response.json());
        const page = pages.find(({ type }) => type === 'page');
        if (!page) throw new Error('The accessibility browser page was not created.');

        cdp = await connectCdp(page.webSocketDebuggerUrl);
        await cdp.send('Page.enable');
        const axePath = path.join(path.dirname(require.resolve('axe-core/package.json')), 'axe.min.js');
        const axeSource = fs.readFileSync(axePath, 'utf8');
        const seriousViolations = [];
        const layoutFailures = [];
        let completedAudits = 0;

        for (const locale of locales) {
            for (const viewport of viewports) {
                await cdp.send('Emulation.setDeviceMetricsOverride', {
                    width: viewport.width,
                    height: viewport.height,
                    deviceScaleFactor: 1,
                    mobile: viewport.mobile
                });
                await cdp.send('Page.navigate', { url: `${baseUrl}/${locale}` });
                await delay(3500);
                await cdp.send('Runtime.evaluate', { expression: axeSource });
                const audit = await cdp.send('Runtime.evaluate', {
                    expression: `axe.run(document).then(({ violations }) => violations.map(({ id, impact, help, nodes }) => ({ id, impact, help, targets: nodes.map(({ target }) => target) })))`,
                    awaitPromise: true,
                    returnByValue: true
                });
                const violations = audit.result.value;
                const blocking = violations.filter(({ impact }) => impact === 'serious' || impact === 'critical');
                const layoutAudit = await cdp.send('Runtime.evaluate', {
                    expression: `(() => { const root = document.documentElement; const skills = document.getElementById('skills'); return { pageOverflow: root.scrollWidth - root.clientWidth, skillsOverflow: skills ? skills.scrollWidth - skills.clientWidth : 0, missingSkills: !skills }; })()`,
                    returnByValue: true
                });
                const overflow = layoutAudit.result.value;
                if (overflow?.missingSkills || overflow?.pageOverflow > 1 || overflow?.skillsOverflow > 1) {
                    layoutFailures.push({ locale, viewport: viewport.name, ...overflow });
                }

                if (screenshotDirectory) {
                    fs.mkdirSync(screenshotDirectory, { recursive: true });
                    await cdp.send('Runtime.evaluate', {
                        expression: `document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo(0, document.getElementById(${JSON.stringify(screenshotTarget)}).offsetTop - 80)`
                    });
                    await delay(750);
                    const screenshot = await cdp.send('Page.captureScreenshot', { format: 'png', fromSurface: true });
                    fs.writeFileSync(
                        path.join(screenshotDirectory, `${locale}-${viewport.name}.png`),
                        Buffer.from(screenshot.data, 'base64')
                    );
                }

                console.log(`${locale}/${viewport.name}: ${violations.length} total, ${blocking.length} serious or critical`);
                blocking.forEach((violation) => seriousViolations.push({ locale, viewport: viewport.name, violation }));
                completedAudits += 1;
            }
        }

        if (completedAudits !== locales.length * viewports.length) {
            throw new Error(`Only ${completedAudits} of ${locales.length * viewports.length} audits completed.`);
        }

        if (seriousViolations.length || layoutFailures.length) {
            seriousViolations.forEach(({ locale, viewport, violation }) => {
                console.error(`\n${locale}/${viewport}: ${violation.id} (${violation.impact})`);
                console.error(violation.help);
                violation.targets.forEach((target) => console.error(`  ${target.join(', ')}`));
            });
            layoutFailures.forEach(({ locale, viewport, pageOverflow, skillsOverflow, missingSkills }) => {
                console.error(`\n${locale}/${viewport}: ${missingSkills ? 'skills section missing' : 'horizontal overflow'}`);
                console.error(`  page: ${pageOverflow}px; skills: ${skillsOverflow}px`);
            });
            process.exitCode = 1;
        }
    } catch (error) {
        console.error('Error running accessibility tests:', error);
        process.exitCode = 1;
    } finally {
        cdp?.close();
        browserProcess?.kill();
        await delay(500);
        fs.rmSync(profileDirectory, { recursive: true, force: true });
    }
})();
