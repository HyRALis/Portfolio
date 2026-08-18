import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://petartrajanoski.me';
    const locales = ['en', 'mk'];

    return locales.map((locale) => ({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: locale === 'en' ? 1.0 : 0.8,
        alternates: {
            languages: {
                en: `${baseUrl}/en`,
                mk: `${baseUrl}/mk`
            }
        }
    }));
}
