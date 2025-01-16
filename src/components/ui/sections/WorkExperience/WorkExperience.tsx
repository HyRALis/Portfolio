import React from 'react';
import { Timeline } from './Timeline';
import { workExperience } from '@/utils/constants/workEperience';
import { Section } from '../../Section';
import { GradientText } from '../../GradientText';

export const WorkExperience = () => {
    return (
        <Section className="space-y-10">
            <GradientText text="Work Experience" />
            <div className="w-full bg-white dark:bg-neutral-950 flex md:hidden flex-col gap-4 justify-center items-center">
                {workExperience.map((item) => (
                    <div key={item.title} className="flex flex-col space-y-4">
                        <h3 className="text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                            {item.title}
                        </h3>
                        {item.content}
                    </div>
                ))}
            </div>
            <Timeline data={workExperience} />
        </Section>
    );
};
