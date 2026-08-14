import React from 'react';

import { testimonials } from '@/utils/constants/testimonials';
import type { Dictionary } from '@/dictionaries';
import { Section } from '../../Section';
import { GradientText } from '../../GradientText';
import { AnimatedTestimonials } from './AnimatedTestimonials';

export const Testimonials = ({ dict }: { dict: Dictionary }) => {
    return (
        <Section className="space-y-10">
            <GradientText text={dict.testimonials.title} />
            <AnimatedTestimonials testimonials={testimonials} />
        </Section>
    );
};
