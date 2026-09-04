'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const t = useTranslations('navbar');
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const mobileMenuRef = useRef<HTMLElement>(null);

    const navItems = useMemo(
        () => [
            { name: t('home'), link: '#home' },
            { name: t('skills'), link: '#skills' },
            { name: t('experience'), link: '#experience' },
            { name: t('testimonials'), link: '#testimonials' }
        ],
        [t]
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleEntry?.target.id) setActiveSection(`#${visibleEntry.target.id}`);
            },
            { rootMargin: '-42% 0px -42% 0px', threshold: [0, 0.01, 0.1] }
        );

        navItems.forEach(({ link }) => {
            const section = document.getElementById(link.slice(1));
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [navItems]);

    useEffect(() => {
        if (!isOpen) return;

        mobileMenuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <>
            {/* Desktop Navbar */}
            <motion.nav
                aria-label={t('mainLabel')}
                initial={false}
                className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-[60] bg-gray-50/50 dark:bg-neutral-900/50 backdrop-blur-md border border-gray-200 dark:border-neutral-800 rounded-full p-2 items-center justify-center gap-1 shadow-xl"
            >
                {navItems.map((item) => {
                    const isActive = activeSection === item.link;
                    return (
                        <Link
                            key={item.name}
                            href={item.link}
                            onClick={() => setActiveSection(item.link)}
                            aria-current={isActive ? 'location' : undefined}
                            className={`relative rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                                isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                            }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="navbar-thumb"
                                    className="absolute inset-0 bg-neutral-700/50 rounded-full -z-10"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item.name}</span>
                        </Link>
                    );
                })}
            </motion.nav>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden fixed top-4 left-4 z-[60]">
                <button
                    ref={menuButtonRef}
                    onClick={() => setIsOpen((open) => !open)}
                    className="p-2 bg-gray-50/50 dark:bg-neutral-900/50 backdrop-blur-md border border-gray-200 dark:border-neutral-800 rounded-full text-neutral-800 dark:text-white shadow-xl hover:bg-gray-100/50 dark:hover:bg-neutral-800/50 transition-colors"
                    aria-label={isOpen ? t('closeMenu') : t('openMenu')}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                >
                    {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.nav
                        ref={mobileMenuRef}
                        id="mobile-navigation"
                        aria-label={t('mobileLabel')}
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed top-20 left-4 z-50 bg-gray-50/90 dark:bg-neutral-900/90 backdrop-blur-lg border border-gray-200 dark:border-neutral-800 rounded-2xl p-4 min-w-[200px] flex flex-col gap-2 shadow-2xl"
                    >
                        {navItems.map((item) => {
                            const isActive = activeSection === item.link;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.link}
                                    aria-current={isActive ? 'location' : undefined}
                                    onClick={() => {
                                        setActiveSection(item.link);
                                        setIsOpen(false);
                                    }}
                                    className={`relative px-4 py-2 text-base font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                                        isActive
                                            ? 'bg-neutral-800 text-white'
                                            : 'text-neutral-300 hover:bg-neutral-800/50 hover:text-white'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};
