import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Petar Trajanoski — Full Stack Developer',
        short_name: 'Petar T.',
        description:
            'Full stack developer specializing in React, Next.js, Vue.js, GO and TypeScript.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#0a0a0a',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon'
            }
        ]
    };
}
