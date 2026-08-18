import { FloatingDock } from '@/components/ui/sections/Hero/FloatingDock';
import { HeroSection } from '@/components/ui/sections/Hero/HeroSection';
import { Skills } from '@/components/ui/sections/Skills/Skills';
import { Testimonials } from '@/components/ui/sections/Testimonials/Testimonials';
import { WorkExperience } from '@/components/ui/sections/WorkExperience/WorkExperience';
import { floatingDockItems } from '@/utils/constants/floatingDockItems';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    setRequestLocale(resolvedParams.lang);
    
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': 'https://petartrajanoski.me/#website',
                name: 'Petar Trajanoski',
                url: 'https://petartrajanoski.me',
                inLanguage: resolvedParams.lang
            },
            {
                '@type': 'Person',
                '@id': 'https://petartrajanoski.me/#person',
                name: 'Petar Trajanoski',
                url: `https://petartrajanoski.me/${resolvedParams.lang}`,
                image: 'https://petartrajanoski.me/opengraph-image',
                jobTitle: 'Full Stack Developer',
                email: 'mailto:petar.trajanoski.pt@gmail.com',
                knowsAbout: [
                    'React',
                    'Next.js',
                    'Vue.js',
                    'Go',
                    'Golang',
                    'TypeScript',
                    'JavaScript',
                    'Tailwind CSS',
                    'Node.js'
                ],
                sameAs: [
                    'https://www.linkedin.com/in/petar-trajanoski-464aa8b6/',
                    'https://github.com/HyRALis',
                    'https://www.facebook.com/petar.trajanoski',
                    'https://www.instagram.com/p.trajanoski'
                ]
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <main className="flex flex-col justify-center space-y-32 pb-32">
                <HeroSection />
                <Skills />
                <WorkExperience />
                <Testimonials />
                <FloatingDock
                    items={floatingDockItems}
                    desktopClassName="z-[9999] min-h-max max-h-max max-w-[76px]"
                    mobileClassName="z-[9999]"
                />
            </main>
        </>
    );
}
