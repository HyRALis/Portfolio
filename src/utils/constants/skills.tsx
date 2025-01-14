import { Bootstrap } from '@/icons/Bootstrap';
import { ChakraUi } from '@/icons/ChakraUi';
import { Css } from '@/icons/Css';
import { Html } from '@/icons/Html';
import { JavaScript } from '@/icons/JavaScript';
import { Next } from '@/icons/Next';
import { Nuxt } from '@/icons/Nuxt';
import { ReactIcon } from '@/icons/ReactIcon';
import { Redux } from '@/icons/Redux';
import { Sass } from '@/icons/Sass';
import { Tailwind } from '@/icons/Tailwind';
import { TypeScript } from '@/icons/TypeScript';
import { VueJs } from '@/icons/VueJs';
import { Vuex } from '@/icons/Vuex';

export const skills: { title: string; icon: React.ReactNode }[] = [
    {
        title: 'HTML',
        icon: <Html svgProps={{ width: '100px', height: '100px' }} />
    },
    {
        title: 'CSS',
        icon: <Css svgProps={{ width: '100px', height: '100px' }} />
    },
    {
        title: 'JavaScript',
        icon: <JavaScript svgProps={{ width: '100px', height: '100px' }} />
    },
    {
        title: 'TypeScript',
        icon: <TypeScript svgProps={{ width: '100px', height: '100px' }} />
    },
    {
        title: 'React',
        icon: <ReactIcon svgProps={{ width: '100px', height: '100px' }} />
    },
    {
        title: 'Next.js',
        icon: <Next svgProps={{ width: '100px', height: '100px' }} />
    },
    {
        title: 'Vue.js',
        icon: <VueJs svgProps={{ width: '100px', height: '100px' }} />
    },
    {
        title: 'Nuxt.js',
        icon: <Nuxt svgProps={{ width: '100px', height: '100px' }} />
    },
    {
        title: 'Redux',
        icon: <Redux svgProps={{ width: '100px', height: '100px' }} />
    },
    {
        title: 'Vuex',
        icon: <Vuex svgProps={{ width: '100px', height: '100px' }} />
    },
    {
        title: 'Tailwind CSS',
        icon: <Tailwind svgProps={{ width: '100px', height: '100px' }} />
    },
    {
        title: 'Sass',
        icon: <Sass svgProps={{ width: '100px', height: '100px' }} />
    },
    {
        title: 'Bootstrap',
        icon: <Bootstrap svgProps={{ width: '100px', height: '100px' }} />
    },
    {
        title: 'ChakraUi',
        icon: <ChakraUi svgProps={{ width: '100px', height: '100px' }} />
    }
];
