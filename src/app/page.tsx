import { Skills } from '@/components/ui/sections/Skills/Skills';
import { Testimonials } from '@/components/ui/sections/Testimonials/Testimonials';
import { WorkExperience } from '@/components/ui/sections/WorkExperience/WorkExperience';

export default function Home() {
    return (
        <main className="flex flex-col justify-center space-y-32">
            <Skills />
            <WorkExperience />
            <Testimonials />
        </main>
    );
}
