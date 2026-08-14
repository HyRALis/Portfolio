import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Footer } from '@/components/ui/sections/Footer/Footer';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    metadataBase: new URL('https://petartrajanoski.me'),
    title: {
        default: 'Petar Trajanoski — Full Stack Developer Portfolio',
        template: '%s | Petar Trajanoski'
    },
    description:
        'Full stack developer specializing in React, Next.js, Vue.js, GO and TypeScript. Explore my projects, skills, and professional experience building modern web applications.',
    keywords: [
        'Petar Trajanoski',
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
        locale: 'en_US',
        url: 'https://petartrajanoski.me',
        siteName: 'Petar Trajanoski',
        title: 'Petar Trajanoski — Full Stack Developer Portfolio',
        description:
            'Full stack developer specializing in React, Next.js, Vue.js, and TypeScript. Explore my projects, skills, and professional experience.'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Petar Trajanoski — Full Stack Developer Portfolio',
        description:
            'Full stack developer specializing in React, Next.js, Vue.js, and TypeScript. Explore my projects, skills, and professional experience.'
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

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark flex flex-col min-h-screen`}>
                <div className="flex-1">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
