import { WorkExperienceCard } from '@/components/ui/WorkExperienceCard';

export const workExperience = [
    {
        title: 'Quantox technologies',
        content: (
            <WorkExperienceCard
                header="May 2022 - Present"
                items={[
                    'Building enterprise level projects from social media sites to complex nation wide healthcare systems',
                    'Utilize atomic design principles.',
                    'Work with React.js ecosystem including Next.js.',
                    'Collaborated closely with the back-end developers to integrate API calls into the front-end codebase.',
                    'Created UI components with reusable code for a better user experience.',
                    'Learned new front-end programming languages and methodologies to perform tasks.'
                ]}
            />
        )
    },
    {
        title: 'Embed Social',
        content: (
            <WorkExperienceCard
                header="March 2021 - May 2022"
                items={[
                    'Implemented a link in bio page builder with Vue.js as a solo front-end developer in 3 months, including but not limited to component and frontend architecture design and implementation,mentorship of other developers, and some team leading responsibilities',
                    'Implementation of widget editor for form builder',
                    'Wrote company wide guidelines for unit testing and component testing for Jest + VueTestUtils unit testing.'
                ]}
            />
        )
    },
    {
        title: 'The code connectors',
        content: (
            <WorkExperienceCard
                header="March 2021 - May 2022"
                items={[
                    'Built and designed multiple projects from scratch. From website for small businesses to complex web applications.',
                    'Designed the frontend architecture and implemented components for a better user experience.',
                    'Worked with React, Vue.js, and Livewire to build websites and web applications depending on the client needs and requirements.'
                ]}
            />
        )
    }
];
