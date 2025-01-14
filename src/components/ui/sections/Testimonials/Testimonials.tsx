import React from 'react';

import { Section } from '../../Section';
import { GradientText } from '../../GradientText';
import { AnimatedTestimonials } from './AnimatedTestimonials';
import { testimonials } from '@/utils/constants/testimonials';

export const Testimonials = () => {
    return (
        <Section className="space-y-10">
            <GradientText text="Testimonials" />
            <AnimatedTestimonials testimonials={testimonials} />
        </Section>
    );
};
