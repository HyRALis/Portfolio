import 'server-only';
import type enDict from './dictionaries/en.json';

export type Dictionary = typeof enDict;

const dictionaries = {
    en: () => import('./dictionaries/en.json').then((module) => module.default),
    mk: () => import('./dictionaries/mk.json').then((module) => module.default)
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale => {
    return locale in dictionaries;
};

export const getDictionary = async (locale: string) => {
    if (!hasLocale(locale)) {
        return dictionaries['en']();
    }
    return dictionaries[locale]();
};
