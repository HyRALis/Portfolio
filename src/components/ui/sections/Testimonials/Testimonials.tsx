import React from 'react';
import { getTranslations } from 'next-intl/server';

import { testimonials } from '@/utils/constants/testimonials';
import { Section } from '../../Section';
import { GradientText } from '../../GradientText';
import { AnimatedTestimonials } from './AnimatedTestimonials';

export const Testimonials = async () => {
    const t = await getTranslations('testimonials');

    return (
        <Section className="space-y-10">
            <GradientText text={t('title')} />
            <AnimatedTestimonials testimonials={testimonials} />
        </Section>
    );
};
