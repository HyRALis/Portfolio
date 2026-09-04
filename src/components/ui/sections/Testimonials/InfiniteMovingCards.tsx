'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { cn } from '@/utils/twMerge';
import type { Testimonial } from '@/types/testimonial';

export const InfiniteMovingCards = ({
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className
}: {
    items: Testimonial[];
    direction?: 'left' | 'right';
    speed?: 'fast' | 'normal' | 'slow';
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const scroller = scrollerRef.current;
        if (!container || !scroller) return;

        const originalItems = Array.from(scroller.children).filter(
            (item) => !item.hasAttribute('data-testimonial-clone')
        );

        originalItems.forEach((item) => {
            const duplicate = item.cloneNode(true) as HTMLElement;
            duplicate.setAttribute('data-testimonial-clone', 'true');
            duplicate.setAttribute('aria-hidden', 'true');
            scroller.appendChild(duplicate);
        });

        container.style.setProperty(
            '--animation-direction',
            direction === 'left' ? 'forwards' : 'reverse'
        );
        container.style.setProperty(
            '--animation-duration',
            speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s'
        );
        setStart(true);

        return () => {
            scroller.querySelectorAll('[data-testimonial-clone]').forEach((item) => item.remove());
        };
    }, [direction, speed]);

    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
                    start && 'animate-scroll motion-reduce:animate-none',
                    pauseOnHover && 'hover:[animation-play-state:paused]'
                )}
            >
                {items.map((item) => (
                    <TestimonialCard key={item.name} {...item} />
                ))}
            </ul>
        </div>
    );
};

export const TestimonialCard = (item: Testimonial) => {
    return (
        <li className="relative flex w-[350px] max-w-full shrink-0 flex-col rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]">
            <blockquote className="flex flex-1 flex-col justify-between">
                <div
                    aria-hidden="true"
                    className="user-select-none pointer-events-none absolute -left-0.5 -top-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                />
                <div className="relative z-20 pt-2">
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-2 -top-4 z-0 select-none font-serif text-8xl text-black/5 dark:text-white/5"
                    >
                        &ldquo;
                    </span>
                    <span className="relative z-20 text-md font-normal italic leading-[1.6] text-neutral-800 dark:text-gray-100">
                        {item.quote}
                    </span>
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom right-4 z-0 select-none font-serif text-8xl text-black/5 dark:text-white/5"
                    >
                        &rdquo;
                    </span>
                </div>
                <div className="relative z-20 mt-auto flex flex-row items-center pt-6">
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
                    <span className="ml-4 flex flex-col gap-1">
                        <span className="text-sm font-bold leading-[1.6] text-neutral-500 dark:text-gray-100">
                            {item.name}
                        </span>
                        <span className="text-sm font-normal leading-[1.6] text-neutral-500 dark:text-gray-400">
                            {item.designation}
                        </span>
                    </span>
                </div>
            </blockquote>
        </li>
    );
};
