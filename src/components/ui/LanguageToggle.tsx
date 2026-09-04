'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export const LanguageToggle = () => {
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();
    const t = useTranslations('language');

    const currentLocale = params.lang as string;

    const toggleLanguage = () => {
        const nextLocale = currentLocale === 'mk' ? 'en' : 'mk';
        const hash = window.location.hash;
        router.replace(`${pathname}${hash}`, { locale: nextLocale });
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            <button
                onClick={toggleLanguage}
                className="bg-gray-50/50 dark:bg-neutral-900/50 backdrop-blur-md text-neutral-800 dark:text-white font-medium py-2 px-4 rounded-full border border-gray-200 dark:border-neutral-800 shadow-xl hover:bg-gray-100/50 dark:hover:bg-neutral-800/50 transition-colors duration-200 uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                aria-label={currentLocale === 'mk' ? t('switchToEnglish') : t('switchToMacedonian')}
            >
                {currentLocale === 'mk' ? 'EN' : 'MK'}
            </button>
        </div>
    );
};
