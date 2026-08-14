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
                className="bg-neutral-800/50 backdrop-blur-md text-white font-medium py-2 px-4 rounded-full border border-neutral-700 hover:bg-neutral-700/50 transition-colors duration-200 uppercase"
                aria-label="Toggle language"
            >
                {currentLocale === 'mk' ? 'EN' : 'MK'}
            </button>
        </div>
    );
};
