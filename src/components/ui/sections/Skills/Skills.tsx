import React from 'react';

import { getTranslations } from 'next-intl/server';

import { Section } from '../../Section';
import { GradientText } from '../../GradientText';
import { SkillTree } from './SkillTree';

export const Skills = async () => {
    const t = await getTranslations('skills');

    return (
        <Section id="skills" className="space-y-10">
            <GradientText text={t('title')} />
            <SkillTree />
        </Section>
    );
};
