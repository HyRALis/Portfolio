import React from 'react';

import { Section } from '../../Section';
import { AnimatedCardsHover } from './AnimatedCardsHover';
import { skills } from '@/utils/constants/skills';
import { SkillsCard } from './SkillsCard';
import { AnimatedTooltip } from '../../AnimatedTooltip';

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
        <Section>
            <AnimatedCardsHover items={skillCards} className="grid-cols-2 md:grid-cols-4  lg:grid-cols-8" />
        </Section>
    );
};
