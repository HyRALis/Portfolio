import { Skills } from '@/components/ui/sections/Skills/Skills';
import { Testimonials } from '@/components/ui/sections/Testimonials/Testimonials';
import { WorkExperience } from '@/components/ui/sections/WorkExperience/WorkExperience';

export default function Home() {
    return (
        <main className="flex flex-col space-y-32">
            <h2 className="text-4xl sm:text-5xl font-bold text-center">Hello world</h2>
            <Skills />
            <WorkExperience />
            <Testimonials />
        </main>
    );
}
