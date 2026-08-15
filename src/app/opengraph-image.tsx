import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Petar Trajanoski — Full Stack Developer Portfolio';
export const size = {
    width: 1200,
    height: 630
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column' as const,
                    alignItems: 'center' as const,
                    justifyContent: 'center' as const,
                    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)',
                    fontFamily: 'sans-serif'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column' as const,
                        alignItems: 'center' as const,
                        justifyContent: 'center' as const,
                        gap: '20px'
                    }}
                >
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 800,
                            background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            lineHeight: 1.2
                        }}
                    >
                        Petar Trajanoski
                    </div>
                    <div
                        style={{
                            fontSize: 36,
                            color: '#d4d4d4',
                            fontWeight: 400
                        }}
                    >
                        Full Stack Developer
                    </div>
                    <div
                        style={{
                            fontSize: 22,
                            color: '#737373',
                            marginTop: '10px'
                        }}
                    >
                        React · Next.js · Vue.js · TypeScript
                    </div>
                </div>
            </div>
        ),
        {
            ...size
        }
    );
}
