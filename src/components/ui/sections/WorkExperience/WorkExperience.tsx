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
            title: t('softwareYard.title'),
            content: (
                <WorkExperienceCard
                    header={t('softwareYard.date')}
                    items={t.raw('softwareYard.points')}
                />
            )
        },
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
        <Section id="experience" className="space-y-10">
            <GradientText text={t('title')} />
            <Timeline data={localizedExperience} />
        </Section>
    );
};
