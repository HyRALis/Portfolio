import React from 'react';
import { getTranslations } from 'next-intl/server';

import { testimonials } from '@/utils/constants/testimonials';
import { Section } from '../../Section';
import { GradientText } from '../../GradientText';
// import { AnimatedTestimonials } from './AnimatedTestimonials';
import { InfiniteMovingCards } from './InfiniteMovingCards';

export const Testimonials = async () => {
    const t = await getTranslations('testimonials');

    return (
        <Section id="testimonials" className="space-y-10">
            <GradientText text={t('title')} />
            {/* <AnimatedTestimonials testimonials={testimonials} /> */}
            <InfiniteMovingCards items={testimonials} speed="slow" />
        </Section>
    );
};
