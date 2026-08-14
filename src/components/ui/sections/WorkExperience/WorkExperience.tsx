import React from 'react';

import type { Dictionary } from '@/dictionaries';
import { Section } from '../../Section';
import { GradientText } from '../../GradientText';
import { Timeline } from './Timeline';
import { WorkExperienceCard } from './WorkExperienceCard';

export const WorkExperience = ({ dict }: { dict: Dictionary }) => {
    const localizedExperience = [
        {
            title: dict.workExperience.quantox.title,
            content: (
                <WorkExperienceCard
                    header={dict.workExperience.quantox.date}
                    items={dict.workExperience.quantox.points}
                />
            )
        },
        {
            title: dict.workExperience.embedSocial.title,
            content: (
                <WorkExperienceCard
                    header={dict.workExperience.embedSocial.date}
                    items={dict.workExperience.embedSocial.points}
                />
            )
        },
        {
            title: dict.workExperience.codeConnectors.title,
            content: (
                <WorkExperienceCard
                    header={dict.workExperience.codeConnectors.date}
                    items={dict.workExperience.codeConnectors.points}
                />
            )
        }
    ];

    return (
        <Section className="space-y-10">
            <GradientText text={dict.workExperience.title} />
            <div className="w-full bg-white dark:bg-neutral-950 flex md:hidden flex-col gap-4 justify-center items-center">
                {localizedExperience.map((item) => (
                    <div key={item.title} className="flex flex-col space-y-4">
                        <h3 className="text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                            {item.title}
                        </h3>
                        {item.content}
                    </div>
                ))}
            </div>
            <Timeline data={localizedExperience} />
        </Section>
    );
};
