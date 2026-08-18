import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import heroImage from '@/app/images/hero_bg.jpg';
import heroWorkingImage from '@/app/images/my_image_generated.png';

import { Section } from '../../Section';
import { LayoutTextFlip } from './LayoutTextFlip';
import { MagneticButton } from './MagneticButton';

export const HeroSection = async () => {
    const t = await getTranslations('hero');

    return (
        <div className="relative w-screen min-h-screen md:h-screen">
            <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center -z-20">
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
            <div className="absolute bottom-0 left-0  bg-gradient-to-b from-transparent to-[#0A0A0A] from-[0%] via-[50%] w-screen h-96 -z-10"></div>
            <div className="absolute top-0 left-0  bg-gradient-to-b from-[#0A0A0A] to-transparent from-[0%] via-[50%] w-screen h-96 -z-10"></div>
            <Section id="home" className="w-full h-full">
                <div className="w-full h-full relative flex items-center justify-center mt-16 md:mt-0">
                    <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10 w-full">
                        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="flex flex-col items-center md:items-start gap-2 w-full mb-10 text-center md:text-left">
                                <h1 className="sr-only">Petar Trajanoski — Full Stack Developer</h1>
                                <LayoutTextFlip text={t('subtext')} words={t.raw('words')} />
                            </div>
                            <p className="text-lg md:text-xl text-neutral-300 max-w-xl mb-10">{t('description')}</p>
                            <MagneticButton>
                                <Link
                                    href="mailto:petar.trajanoski.pt@gmail.com?subject=Software%20Development%20Work%20Inquiry"
                                    className="inline-flex items-center justify-center text-base font-medium"
                                >
                                    <div className="p-[3px] rounded-2xl relative" role="presentation">
                                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl" />
                                        <div className="px-10 py-4 text-2xl bg-black rounded-2xl relative group transition duration-200 text-white hover:bg-transparent">
                                            {t('contact')}
                                        </div>
                                    </div>
                                </Link>
                            </MagneticButton>
                        </div>
                        <div className="flex-[0.8] w-full flex justify-center md:justify-end">
                            <div className="relative w-full max-w-[15rem] md:max-w-[37rem] aspect-[1086/1448] max-h-[50%] rounded-2xl overflow-hidden">
                                <Image
                                    src={heroWorkingImage}
                                    alt="Petar Trajanoski - Full Stack Developer"
                                    fill
                                    priority
                                    quality={85}
                                    sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, (max-width: 1024px) 480px, 592px"
                                    style={{ objectFit: 'fill' }}
                                    placeholder="blur"
                                    className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};
