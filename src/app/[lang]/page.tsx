import { FloatingDock } from '@/components/ui/sections/Hero/FloatingDock';
import { HeroSection } from '@/components/ui/sections/Hero/HeroSection';
import { Skills } from '@/components/ui/sections/Skills/Skills';
import { Testimonials } from '@/components/ui/sections/Testimonials/Testimonials';
import { WorkExperience } from '@/components/ui/sections/WorkExperience/WorkExperience';
import { floatingDockItems } from '@/utils/constants/floatingDockItems';
import { getDictionary } from '@/dictionaries';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
    const resolvedParams = await params;
    const dict = await getDictionary(resolvedParams.lang);
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                name: 'Petar Trajanoski',
                url: 'https://petartrajanoski.me'
            },
            {
                '@type': 'Person',
                name: 'Petar Trajanoski',
                url: 'https://petartrajanoski.me',
                jobTitle: 'Full Stack Developer',
                email: 'petar.trajanoski.pt@gmail.com',
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="flex flex-col justify-center space-y-32">
                <HeroSection dict={dict} />
                <Skills dict={dict} />
                <WorkExperience dict={dict} />
                <Testimonials dict={dict} />
                <FloatingDock
                    items={floatingDockItems}
                    desktopClassName="z-30 min-h-max max-h-max max-w-[76px]"
                    mobileClassName="z-30"
                />
            </main>
        </>
    );
}
