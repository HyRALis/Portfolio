import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/'
            },
            {
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'Google-Extended',
                    'PerplexityBot',
                    'ClaudeBot',
                    'Applebot-Extended',
                    'Amazonbot',
                    'Meta-ExternalAgent'
                ],
                allow: '/'
            }
        ],
        sitemap: 'https://petartrajanoski.me/sitemap.xml'
    };
}
