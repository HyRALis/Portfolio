import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Footer } from '@/components/ui/sections/Footer/Footer';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/ui/Navbar/Navbar';
import '../globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const lang = resolvedParams.lang;
    const isMk = lang === 'mk';

    const title = isMk ? 'Петар Трајаноски — Full Stack Програмер' : 'Petar Trajanoski — Full Stack Developer Portfolio';
    const description = isMk
        ? 'Full stack програмер специјализиран за React, Next.js, Vue.js, GO и TypeScript. Истражете ги моите проекти, вештини и професионално искуство во градењето на модерни веб апликации.'
        : 'Full stack developer specializing in React, Next.js, Vue.js, GO and TypeScript. Explore my projects, skills, and professional experience building modern web applications.';

    return {
        metadataBase: new URL('https://petartrajanoski.me'),
        title: {
            default: title,
            template: '%s | Petar Trajanoski'
        },
        description,
        keywords: [
            'Petar Trajanoski',
            'Петар Трајаноски',
            'Full Stack Developer',
            'Frontend Developer',
            'React',
            'Next.js',
            'Vue.js',
            'GO',
            'Golang',
            'TypeScript',
            'JavaScript',
            'Web Developer',
            'Portfolio'
        ],
        authors: [{ name: 'Petar Trajanoski', url: 'https://petartrajanoski.me' }],
        creator: 'Petar Trajanoski',
        openGraph: {
            type: 'website',
            locale: isMk ? 'mk_MK' : 'en_US',
            url: `https://petartrajanoski.me/${lang}`,
            siteName: 'Petar Trajanoski',
            title,
            description
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1
            }
        }
    };
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const resolvedParams = await params;
    
    if (!routing.locales.includes(resolvedParams.lang as 'en' | 'mk')) {
        notFound();
    }
    setRequestLocale(resolvedParams.lang);
    
    const messages = await getMessages();

    return (
        <html lang={resolvedParams.lang} className="scroll-smooth">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark flex flex-col min-h-screen`}>
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    <LanguageToggle />
                    <div className="flex-1">{children}</div>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
