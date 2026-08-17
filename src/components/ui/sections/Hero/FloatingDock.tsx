'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@/utils/twMerge';

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    return (
        <div
            className={cn(
                'fixed bottom-6 left-1/2 -translate-x-1/2 flex md:hidden flex-row gap-4 rounded-full bg-gray-50/50 dark:bg-neutral-900/50 backdrop-blur-md border border-gray-200 dark:border-neutral-800 shadow-xl px-4 py-3',
                className
            )}
        >
            {items.map((item) => (
                <Link href={item.href} key={item.title} aria-label={item.title}>
                    <div className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative w-10 h-10">
                        <div className="flex items-center justify-center w-5 h-5 text-neutral-500 dark:text-neutral-300">
                            {item.icon}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

const FloatingDockDesktop = ({
    items,
    className
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    return (
        <div
            className={cn(
                'fixed z-[9999] bottom-10 left-10 h-max hidden md:flex md:flex-col gap-4 rounded-full bg-gray-50/50 dark:bg-neutral-900/50 backdrop-blur-md border border-gray-200 dark:border-neutral-800 shadow-xl px-3 py-4',
                className
            )}
        >
            {items.map((item) => (
                <IconContainer key={item.title} {...item} />
            ))}
        </div>
    );
};

function IconContainer({
    title,
    icon,
    href
}: {
    title: string;
    icon: React.ReactNode;
    href: string;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <Link href={href} aria-label={title}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="w-10 h-10 aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative transition-colors hover:bg-gray-300 dark:hover:bg-neutral-700"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, x: 10, y: '-50%' }}
                            animate={{ opacity: 1, x: 0, y: '-50%' }}
                            exit={{ opacity: 0, x: 2, y: '-50%' }}
                            className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-14 top-1/2 -translate-y-1/2 w-fit text-xs pointer-events-none"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="w-5 h-5 flex items-center justify-center text-neutral-500 dark:text-neutral-300">
                    {icon}
                </div>
            </div>
        </Link>
    );
}
