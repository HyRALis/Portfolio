import React from 'react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="w-full border-t border-neutral-800 bg-[#0a0a0a] py-8 pb-24 md:pb-8">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
                <div className="text-neutral-400 text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Petar Trajanoski. All rights reserved.
                </div>
                <div className="flex items-center space-x-6 text-sm text-neutral-400">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        GitHub
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        LinkedIn
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Twitter
                    </Link>
                </div>
            </div>
        </footer>
    );
};
