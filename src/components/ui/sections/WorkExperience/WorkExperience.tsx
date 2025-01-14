import React from 'react';
import { Timeline } from './Timeline';
import { workExperience } from '@/utils/constants/workEperience';
import { Section } from '../../Section';
import { GradientText } from '../../GradientText';

export const WorkExperience = () => {
    return (
        <Section className="space-y-10">
            <GradientText text="Work Experience" />
            <Timeline data={workExperience} />
        </Section>
    );
};
