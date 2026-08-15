/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');
const { AxePuppeteer } = require('@axe-core/puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        console.log("Navigating to http://localhost:3000/en ...");
        await page.goto('http://localhost:3000/en', { waitUntil: 'networkidle2' });
        
        console.log("Running axe-core...");
        const results = await new AxePuppeteer(page).analyze();
        
        if (results.violations.length > 0) {
            console.log(`Found ${results.violations.length} accessibility violations:`);
            results.violations.forEach((violation, index) => {
                console.log(`\n--- Violation ${index + 1}: ${violation.id} (${violation.impact}) ---`);
                console.log(violation.description);
                console.log(violation.help);
                console.log(violation.helpUrl);
                console.log("Failing nodes:");
                violation.nodes.forEach(node => {
                    console.log(`  - Target: ${node.target.join(', ')}`);
                    console.log(`    HTML: ${node.html}`);
                });
            });
        } else {
            console.log("No accessibility violations found!");
        }
        
        await browser.close();
    } catch (error) {
        console.error("Error running tests:", error);
        process.exit(1);
    }
})();
