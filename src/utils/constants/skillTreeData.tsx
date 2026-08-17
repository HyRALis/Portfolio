import { Bootstrap } from '@/icons/TechnologyLogos/Bootstrap';
import { ChakraUi } from '@/icons/TechnologyLogos/ChakraUi';
import { Css } from '@/icons/TechnologyLogos/Css';
import { Gin } from '@/icons/TechnologyLogos/Gin';
import { GoLang } from '@/icons/TechnologyLogos/GoLang';
import { Html } from '@/icons/TechnologyLogos/Html';
import { JavaScript } from '@/icons/TechnologyLogos/JavaScript';
import { Next } from '@/icons/TechnologyLogos/Next';
import { Nuxt } from '@/icons/TechnologyLogos/Nuxt';
import { NxIcon } from '@/icons/TechnologyLogos/NxIcon';
import { PostgreSql } from '@/icons/TechnologyLogos/PostgreSql';
import { ReactIcon } from '@/icons/TechnologyLogos/ReactIcon';
import { Redux } from '@/icons/TechnologyLogos/Redux';
import { RestApi } from '@/icons/TechnologyLogos/RestApi';
import { Sass } from '@/icons/TechnologyLogos/Sass';
import { SqlIcon } from '@/icons/TechnologyLogos/SqlIcon';
import { Tailwind } from '@/icons/TechnologyLogos/Tailwind';
import { TypeScript } from '@/icons/TechnologyLogos/TypeScript';
import { VueJs } from '@/icons/TechnologyLogos/VueJs';
import { Vuex } from '@/icons/TechnologyLogos/Vuex';

export interface SkillNodeData {
    id: string;
    title: string;
    icon: React.ReactNode;
    years: number;
    maxYears: number;
    color: string;
    children?: SkillNodeData[];
}

export interface SkillTreeSection {
    id: string;
    title: string;
    emoji: string;
    accentColor: string;
    roots: SkillNodeData[];
}

const ICON_SIZE = { width: '36px', height: '36px' };
const MAX_YEARS = 6;

export const skillTreeSections: SkillTreeSection[] = [
    {
        id: 'frontend',
        title: 'Frontend',
        emoji: '⚔️',
        accentColor: '#818cf8',
        roots: [
            {
                id: 'javascript',
                title: 'JavaScript',
                icon: <JavaScript svgProps={ICON_SIZE} />,
                years: 6,
                maxYears: MAX_YEARS,
                color: '#F7DF1E',
                children: [
                    {
                        id: 'typescript',
                        title: 'TypeScript',
                        icon: <TypeScript svgProps={ICON_SIZE} />,
                        years: 5,
                        maxYears: MAX_YEARS,
                        color: '#3178C6',
                        children: [
                            {
                                id: 'react',
                                title: 'React',
                                icon: <ReactIcon svgProps={ICON_SIZE} />,
                                years: 5,
                                maxYears: MAX_YEARS,
                                color: '#61DAFB',
                                children: [
                                    {
                                        id: 'nextjs',
                                        title: 'Next.js',
                                        icon: <Next svgProps={ICON_SIZE} />,
                                        years: 4,
                                        maxYears: MAX_YEARS,
                                        color: '#e2e2e2'
                                    },
                                    {
                                        id: 'redux',
                                        title: 'Redux',
                                        icon: <Redux svgProps={ICON_SIZE} />,
                                        years: 3,
                                        maxYears: MAX_YEARS,
                                        color: '#764ABC'
                                    }
                                ]
                            },
                            {
                                id: 'vuejs',
                                title: 'Vue.js',
                                icon: <VueJs svgProps={ICON_SIZE} />,
                                years: 1,
                                maxYears: MAX_YEARS,
                                color: '#42B883',
                                children: [
                                    {
                                        id: 'nuxtjs',
                                        title: 'Nuxt.js',
                                        icon: <Nuxt svgProps={ICON_SIZE} />,
                                        years: 1,
                                        maxYears: MAX_YEARS,
                                        color: '#00DC82'
                                    },
                                    {
                                        id: 'vuex',
                                        title: 'Vuex',
                                        icon: <Vuex svgProps={ICON_SIZE} />,
                                        years: 1,
                                        maxYears: MAX_YEARS,
                                        color: '#42B883'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 'nx',
                        title: 'NX',
                        icon: <NxIcon svgProps={ICON_SIZE} />,
                        years: 2,
                        maxYears: MAX_YEARS,
                        color: '#0EA5E9'
                    }
                ]
            },
            {
                id: 'css',
                title: 'CSS',
                icon: <Css svgProps={ICON_SIZE} />,
                years: 6,
                maxYears: MAX_YEARS,
                color: '#1572B6',
                children: [
                    {
                        id: 'tailwind',
                        title: 'Tailwind',
                        icon: <Tailwind svgProps={ICON_SIZE} />,
                        years: 3,
                        maxYears: MAX_YEARS,
                        color: '#06B6D4'
                    },
                    {
                        id: 'sass',
                        title: 'Sass',
                        icon: <Sass svgProps={ICON_SIZE} />,
                        years: 2,
                        maxYears: MAX_YEARS,
                        color: '#CC6699'
                    },
                    {
                        id: 'bootstrap',
                        title: 'Bootstrap',
                        icon: <Bootstrap svgProps={ICON_SIZE} />,
                        years: 3,
                        maxYears: MAX_YEARS,
                        color: '#7952B3'
                    },
                    {
                        id: 'chakra-ui',
                        title: 'Chakra UI',
                        icon: <ChakraUi svgProps={ICON_SIZE} />,
                        years: 3,
                        maxYears: MAX_YEARS,
                        color: '#319795'
                    }
                ]
            },
            {
                id: 'html',
                title: 'HTML',
                icon: <Html svgProps={ICON_SIZE} />,
                years: 6,
                maxYears: MAX_YEARS,
                color: '#E34F26'
            }
        ]
    },
    {
        id: 'backend',
        title: 'Backend',
        emoji: '🛡️',
        accentColor: '#34d399',
        roots: [
            {
                id: 'go',
                title: 'Go',
                icon: <GoLang svgProps={ICON_SIZE} />,
                years: 1,
                maxYears: MAX_YEARS,
                color: '#00ADD8',
                children: [
                    {
                        id: 'gin',
                        title: 'Gin',
                        icon: <Gin svgProps={ICON_SIZE} />,
                        years: 1,
                        maxYears: MAX_YEARS,
                        color: '#00ADD8'
                    }
                ]
            },
            {
                id: 'sql',
                title: 'SQL',
                icon: <SqlIcon svgProps={ICON_SIZE} />,
                years: 1,
                maxYears: MAX_YEARS,
                color: '#CC7A00',
                children: [
                    {
                        id: 'postgresql',
                        title: 'PostgreSQL',
                        icon: <PostgreSql svgProps={ICON_SIZE} />,
                        years: 1,
                        maxYears: MAX_YEARS,
                        color: '#336791'
                    }
                ]
            },
            {
                id: 'rest-api',
                title: 'REST API',
                icon: <RestApi svgProps={ICON_SIZE} />,
                years: 1,
                maxYears: MAX_YEARS,
                color: '#FF6C37'
            }
        ]
    }
];
