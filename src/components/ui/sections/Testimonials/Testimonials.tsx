import React from 'react';
import { getTranslations } from 'next-intl/server';

import { testimonialList } from '@/utils/constants/testimonials';
import { Section } from '../../Section';
import { GradientText } from '../../GradientText';
import { InfiniteMovingCards } from './InfiniteMovingCards';
import { TestimonialCarousel } from './TestimonialCarousel';

export const Testimonials = async () => {
    const t = await getTranslations('testimonials');

    const localizedTestimonials = testimonialList.map((item) => ({
        name: item.name,
        quote: t(`items.${item.key}.quote`),
        designation: t(`items.${item.key}.designation`),
        src: item.src
    }));

    return (
        <Section id="testimonials" className="space-y-10">
            <GradientText text={t('title')} />
            <div className="md:hidden">
                <TestimonialCarousel items={localizedTestimonials} />
            </div>
            <div className="hidden md:block">
                <InfiniteMovingCards items={localizedTestimonials} speed="slow" />
            </div>
        </Section>
    );
};
