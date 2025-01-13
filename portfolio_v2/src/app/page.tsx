import { Timeline } from '@/components/ui/Timeline';
import { workExperience } from '@/utils/constants/workEperience';

export default function Home() {
    return (
        <>
            <h2 className="text-4xl sm:text-5xl font-bold text-center">Hello world</h2>
            <Timeline data={workExperience} />
        </>
    );
}
