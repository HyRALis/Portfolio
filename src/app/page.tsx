import { FloatingDock } from '@/components/ui/sections/Hero/FloatingDock';
import { HeroSection } from '@/components/ui/sections/Hero/HeroSection';
import { Skills } from '@/components/ui/sections/Skills/Skills';
import { Testimonials } from '@/components/ui/sections/Testimonials/Testimonials';
import { WorkExperience } from '@/components/ui/sections/WorkExperience/WorkExperience';
import { floatingDockItems } from '@/utils/constants/floatingDockItems';

export default function Home() {
    return (
        <main className="flex flex-col justify-center space-y-32">
            <HeroSection />
            <Skills />
            <WorkExperience />
            <Testimonials />
            <FloatingDock
                items={floatingDockItems}
                desktopClassName="z-30 min-h-max max-h-max max-w-[76px]"
                mobileClassName="z-30"
            />
        </main>
    );
}
