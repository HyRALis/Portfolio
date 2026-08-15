'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const t = useTranslations('navbar');
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');

    const navItems = useMemo(() => [
        { name: t('home'), link: '#home' },
        { name: t('skills'), link: '#skills' },
        { name: t('experience'), link: '#experience' },
        { name: t('testimonials'), link: '#testimonials' },
    ], [t]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => item.link.replace('#', ''));
            let current = activeSection;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section's top is past half of the viewport height, it becomes active.
                    // This creates a smooth transition between sections.
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        current = `#${section}`;
                    }
                }
            }

            if (window.scrollY < 100) {
                current = '#home'; // Default to home at very top
            }

            if (current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection, navItems]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Desktop Navbar */}
            <motion.div 
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}
                className="hidden md:flex fixed top-4 left-1/2 z-[60] bg-gray-50/50 dark:bg-neutral-900/50 backdrop-blur-md border border-gray-200 dark:border-neutral-800 rounded-full p-2 items-center justify-center gap-1 shadow-xl"
            >
                {navItems.map((item) => {
                    const isActive = activeSection === item.link;
                    return (
                        <Link
                            key={item.name}
                            href={item.link}
                            onClick={() => setActiveSection(item.link)}
                            className={`relative px-5 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
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
            </motion.div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden fixed top-4 left-4 z-[60]">
                <button
                    onClick={toggleMenu}
                    className="p-2 bg-gray-50/50 dark:bg-neutral-900/50 backdrop-blur-md border border-gray-200 dark:border-neutral-800 rounded-full text-neutral-800 dark:text-white shadow-xl hover:bg-gray-100/50 dark:hover:bg-neutral-800/50 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
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
                                    onClick={() => {
                                        setActiveSection(item.link);
                                        setIsOpen(false);
                                    }}
                                    className={`relative px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                                        isActive ? 'bg-neutral-800 text-white' : 'text-neutral-300 hover:bg-neutral-800/50 hover:text-white'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
