'use client'

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export const LayoutTextFlip = ({
    text = 'Build Amazing',
    words = ['Landing Pages', 'Component Blocks', 'Page Sections', '3D Shaders'],
    duration = 3000
}: {
    text: string;
    words: string[];
    duration?: number;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        if (shouldReduceMotion || words.length < 2) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [words.length, duration, shouldReduceMotion]);

    return (
        <div className="flex max-w-full flex-wrap items-center justify-center gap-3 md:justify-start" aria-hidden="true">
            <motion.span layoutId="subtext" className="text-center text-3xl font-bold tracking-tight drop-shadow-lg sm:text-4xl md:text-left lg:text-6xl">
                {text}
            </motion.span>

            <motion.span
                layout
                className="relative flex max-w-full overflow-hidden rounded-md border border-transparent bg-white px-4 py-2 font-sans text-3xl font-bold tracking-tight text-black shadow-sm ring ring-black/10 drop-shadow-lg dark:bg-neutral-900 dark:text-white dark:shadow-white/10 dark:ring-white/10 sm:w-fit sm:text-4xl lg:text-6xl"
            >
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={currentIndex}
                        initial={shouldReduceMotion ? false : { y: -40, filter: 'blur(10px)' }}
                        animate={{
                            y: 0,
                            filter: 'blur(0px)'
                        }}
                        exit={shouldReduceMotion ? undefined : { y: 50, filter: 'blur(10px)' }}
                        transition={{
                            duration: 0.5
                        }}
                        className="inline-block text-center text-white"
                    >
                        {words[currentIndex]}
                    </motion.span>
                </AnimatePresence>
            </motion.span>
        </div>
    );
};
