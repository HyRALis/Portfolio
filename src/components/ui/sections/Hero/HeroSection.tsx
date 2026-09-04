import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import heroImage from '@/app/images/hero_bg.jpg';
import heroWorkingImage from '@/app/images/my_image_generated.png';
import { floatingDockItems } from '@/utils/constants/floatingDockItems';

import { Section } from '../../Section';
import { LayoutTextFlip } from './LayoutTextFlip';
import { MagneticButton } from './MagneticButton';

export const HeroSection = async () => {
    const t = await getTranslations('hero');

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <div className="absolute inset-0 flex min-h-screen w-full items-center justify-center -z-20">
                <Image
                    src={heroImage}
                    alt=""
                    quality={80}
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    placeholder="blur"
                />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A] -z-10" />
            <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent -z-10" />
            <Section id="home" className="flex min-h-screen w-full items-center py-24 md:py-20">
                    <div className="flex w-full flex-col-reverse items-center justify-between gap-10 md:flex-row md:gap-12">
                        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="mb-7 flex w-full flex-col items-center gap-2 text-center md:mb-10 md:items-start md:text-left">
                                <h1 className="sr-only">Petar Trajanoski — Full Stack Developer</h1>
                                <LayoutTextFlip text={t('subtext')} words={t.raw('words')} />
                            </div>
                            <p className="mb-8 max-w-xl text-base leading-relaxed text-neutral-200 sm:text-lg md:mb-10 md:text-xl">{t('description')}</p>
                            <MagneticButton>
                                <Link
                                    href="mailto:petar.trajanoski.pt@gmail.com?subject=Software%20Development%20Work%20Inquiry"
                                    className="inline-flex items-center justify-center rounded-2xl text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                                >
                                    <div className="p-[3px] rounded-2xl relative" role="presentation">
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl" />
                                        <div className="px-10 py-4 text-2xl bg-black rounded-2xl relative group transition duration-200 text-white hover:bg-transparent">
                                            {t('contact')}
                                        </div>
                                    </div>
                                </Link>
                            </MagneticButton>
                            <nav aria-label={t('socialLinks')} className="mt-7 flex flex-wrap justify-center gap-3 md:hidden">
                                {floatingDockItems.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        aria-label={item.title}
                                        target={item.href.startsWith('http') ? '_blank' : undefined}
                                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-900/80 text-neutral-300 transition-colors hover:border-purple-400/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                                    >
                                        <span className="h-5 w-5" aria-hidden="true">{item.icon}</span>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="flex w-full flex-[0.8] justify-center md:justify-end">
                            <div className="relative aspect-[1086/1448] w-full max-w-[14rem] overflow-hidden rounded-2xl sm:max-w-[17rem] md:max-w-[34rem]">
                                <Image
                                    src={heroWorkingImage}
                                    alt="Petar Trajanoski - Full Stack Developer"
                                    fill
                                    priority
                                    quality={85}
                                    sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, (max-width: 1024px) 480px, 592px"
                                    style={{ objectFit: 'contain' }}
                                    placeholder="blur"
                                    className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        </div>
                    </div>
            </Section>
        </div>
    );
};
