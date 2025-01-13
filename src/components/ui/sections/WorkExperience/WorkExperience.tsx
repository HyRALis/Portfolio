import React from 'react';
import { Timeline } from './Timeline';
import { workExperience } from '@/utils/constants/workEperience';

export const WorkExperience = () => {
    return (
        <section className="">
            <h3>Work Experience</h3>
            <Timeline data={workExperience} />
        </section>
    );
};
