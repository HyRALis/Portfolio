'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import type { Testimonial } from '@/types/testimonial';

export const TestimonialCarousel = ({ items }: { items: Testimonial[] }) => {
    const t = useTranslations('testimonials');
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [canScrollBack, setCanScrollBack] = useState(false);
    const [canScrollForward, setCanScrollForward] = useState(items.length > 1);

    const updatePosition = useCallback(() => {
        const scroller = scrollerRef.current;
        const firstCard = scroller?.firstElementChild as HTMLElement | null;
        if (!scroller || !firstCard) return;

        const gap = Number.parseFloat(getComputedStyle(scroller).columnGap) || 0;
        const step = firstCard.offsetWidth + gap;
        const nextIndex = Math.round(scroller.scrollLeft / step);
        const maxScroll = scroller.scrollWidth - scroller.clientWidth;

        setActiveIndex(Math.min(items.length - 1, Math.max(0, nextIndex)));
        setCanScrollBack(scroller.scrollLeft > 2);
        setCanScrollForward(scroller.scrollLeft < maxScroll - 2);
    }, [items.length]);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        updatePosition();
        const resizeObserver = new ResizeObserver(updatePosition);
        resizeObserver.observe(scroller);
        scroller.addEventListener('scroll', updatePosition, { passive: true });

        return () => {
            resizeObserver.disconnect();
            scroller.removeEventListener('scroll', updatePosition);
        };
    }, [updatePosition]);

    const move = (direction: -1 | 1) => {
        const scroller = scrollerRef.current;
        const firstCard = scroller?.firstElementChild as HTMLElement | null;
        if (!scroller || !firstCard) return;

        const gap = Number.parseFloat(getComputedStyle(scroller).columnGap) || 0;
        scroller.scrollBy({ left: direction * (firstCard.offsetWidth + gap), behavior: 'smooth' });
    };

    return (
        <div className="space-y-5">
            <ul
                ref={scrollerRef}
                className="flex snap-x snap-mandatory items-start gap-4 overflow-x-auto overscroll-x-contain pb-5 [scrollbar-color:#52525b_transparent]"
                tabIndex={0}
                aria-label={t('carouselLabel')}
                onKeyDown={(event) => {
                    if (event.key === 'ArrowLeft') move(-1);
                    if (event.key === 'ArrowRight') move(1);
                }}
            >
                {items.map((item) => (
                    <TestimonialCard key={item.name} item={item} />
                ))}
            </ul>

            <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-neutral-400" aria-live="polite">
                    {t('position', { current: activeIndex + 1, total: items.length })}
                </p>
                <div className="flex gap-2">
                    <CarouselButton
                        label={t('previous')}
                        disabled={!canScrollBack}
                        onClick={() => move(-1)}
                    >
                        <IconChevronLeft aria-hidden="true" />
                    </CarouselButton>
                    <CarouselButton
                        label={t('next')}
                        disabled={!canScrollForward}
                        onClick={() => move(1)}
                    >
                        <IconChevronRight aria-hidden="true" />
                    </CarouselButton>
                </div>
            </div>
        </div>
    );
};

const CarouselButton = ({
    children,
    label,
    disabled,
    onClick
}: {
    children: React.ReactNode;
    label: string;
    disabled: boolean;
    onClick: () => void;
}) => (
    <button
        type="button"
        aria-label={label}
        disabled={disabled}
        onClick={onClick}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-900 text-neutral-200 transition-colors hover:border-purple-400/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 disabled:cursor-not-allowed disabled:opacity-35"
    >
        {children}
    </button>
);

const TestimonialCard = ({ item }: { item: Testimonial }) => (
    <li className="relative flex w-[calc(100%-1.5rem)] shrink-0 snap-start flex-col self-stretch overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-800 to-neutral-900 px-6 py-7 sm:w-[calc(100%-2rem)] sm:px-8 lg:w-[calc(50%-0.5rem)]">
        <blockquote className="flex h-full flex-col">
            <span className="pointer-events-none absolute left-4 top-1 select-none font-serif text-8xl text-white/5" aria-hidden="true">
                &ldquo;
            </span>
            <p className="relative z-10 whitespace-normal italic leading-relaxed text-neutral-100">{item.quote}</p>
            <footer className="relative z-10 mt-auto flex items-center pt-7">
                <Image
                    src={item.src}
                    alt={item.name}
                    width={48}
                    height={48}
                    sizes="48px"
                    quality={80}
                    draggable={false}
                    className="h-12 w-12 rounded-full object-cover object-center"
                />
                <span className="ml-4 flex min-w-0 flex-col gap-1">
                    <cite className="not-italic text-sm font-bold leading-relaxed text-neutral-100">{item.name}</cite>
                    <span className="text-sm leading-relaxed text-neutral-400">{item.designation}</span>
                </span>
            </footer>
        </blockquote>
    </li>
);
