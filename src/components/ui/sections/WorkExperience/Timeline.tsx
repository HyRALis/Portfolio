'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLOListElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (!ref.current) return;

        const updateHeight = () => setHeight(ref.current?.getBoundingClientRect().height ?? 0);
        updateHeight();
        const observer = new ResizeObserver(updateHeight);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 10%', 'end 50%']
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full font-sans" ref={containerRef}>
            <div className="relative mx-auto max-w-7xl">
                <ol ref={ref} className="relative space-y-10 md:space-y-0">
                {data.map((item) => (
                    <li
                        key={item.title}
                        className="relative grid gap-4 pl-8 md:grid-cols-[minmax(13rem,20rem)_minmax(0,1fr)] md:gap-10 md:py-16 md:pl-12"
                    >
                        <span
                            className="absolute left-0 top-1.5 z-10 h-4 w-4 rounded-full border border-neutral-700 bg-neutral-900 ring-4 ring-black md:top-[4.8rem]"
                            aria-hidden="true"
                        />
                        <div className="md:sticky md:top-32 md:self-start">
                            <h3 className="text-xl font-bold text-neutral-300 md:text-3xl lg:text-4xl">
                                {item.title}
                            </h3>
                        </div>

                        <div className="min-w-0 w-full">
                            {item.content}
                        </div>
                    </li>
                ))}
                </ol>
                <div
                    style={{
                        height: height + 'px'
                    }}
                    className="absolute left-[7px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_4%,black_96%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
