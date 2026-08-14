import React from 'react';

import { skills } from '@/utils/constants/skills';
import { Section } from '../../Section';
import { AnimatedTooltip } from '../../AnimatedTooltip';
import { AnimatedCardsHover } from './AnimatedCardsHover';
import { SkillsCard } from './SkillsCard';

export const Skills = () => {
    const skillCards = skills.map(({ title, icon }) => ({
        title: title,
        content: (
            <AnimatedTooltip description={title}>
                <SkillsCard
                    key={title}
                    className={`text-white flex items-center justify-center bg-neutral-100 dark:bg-neutral-800${
                        title === 'ChakraUi' ? ' text-neutral-800 dark:text-neutral-500' : ''
                    }`}
                >
                    {icon}
                </SkillsCard>
            </AnimatedTooltip>
        )
    }));

    return (
        <Section className="space-y-10">
            <AnimatedCardsHover items={skillCards} className="grid-cols-2 md:grid-cols-4  lg:grid-cols-8" />
        </Section>
    );
};
