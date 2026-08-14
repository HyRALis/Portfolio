import React from 'react';
import Link from 'next/link';
import type { Dictionary } from '@/dictionaries';

export const Footer = ({ dict }: { dict: Dictionary }) => {
    return (
        <footer className="w-full border-t border-neutral-800 bg-[#0a0a0a] py-8 pb-24 md:pb-8">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
                <div className="text-neutral-400 text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} {dict?.footer?.copyright || 'Petar Trajanoski. All rights reserved.'}
                </div>
                <nav aria-label="Social media links" className="flex items-center space-x-6 text-sm text-neutral-400">
                    <Link href="https://www.linkedin.com/in/petar-trajanoski-464aa8b6/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        LinkedIn
                    </Link>
                    <Link href="https://github.com/HyRALis" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        GitHub
                    </Link>
                    <Link href="https://www.facebook.com/petar.trajanoski" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Facebook
                    </Link>
                    <Link href="https://www.instagram.com/p.trajanoski" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Instagram
                    </Link>
                </nav>
            </div>
        </footer>
    );
};
