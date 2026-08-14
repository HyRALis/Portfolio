import React from 'react';
import { getTranslations } from 'next-intl/server';

import { Timeline } from './Timeline';
import { WorkExperienceCard } from './WorkExperienceCard';
import { Section } from '../../Section';
import { GradientText } from '../../GradientText';

export const WorkExperience = async () => {
    const t = await getTranslations('workExperience');

    const localizedExperience = [
        {
            title: t('quantox.title'),
            content: (
                <WorkExperienceCard
                    header={t('quantox.date')}
                    items={t.raw('quantox.points')}
                />
            )
        },
        {
            title: t('embedSocial.title'),
            content: (
                <WorkExperienceCard
                    header={t('embedSocial.date')}
                    items={t.raw('embedSocial.points')}
                />
            )
        },
        {
            title: t('codeConnectors.title'),
            content: (
                <WorkExperienceCard
                    header={t('codeConnectors.date')}
                    items={t.raw('codeConnectors.points')}
                />
            )
        }
    ];

    return (
        <Section className="space-y-10">
            <GradientText text={t('title')} />
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
