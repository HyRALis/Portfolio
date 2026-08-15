'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';

export const LanguageToggle = () => {
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();

    const currentLocale = params.lang as string;

    const toggleLanguage = () => {
        const nextLocale = currentLocale === 'mk' ? 'en' : 'mk';
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={toggleLanguage}
                className="bg-gray-50/50 dark:bg-neutral-900/50 backdrop-blur-md text-neutral-800 dark:text-white font-medium py-2 px-4 rounded-full border border-gray-200 dark:border-neutral-800 shadow-xl hover:bg-gray-100/50 dark:hover:bg-neutral-800/50 transition-colors duration-200 uppercase"
                aria-label="Toggle language"
            >
                {currentLocale === 'mk' ? 'EN' : 'MK'}
            </button>
        </div>
    );
};
