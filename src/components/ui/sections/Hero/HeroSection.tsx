import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import heroImage from '@/app/images/hero_bg.jpg';
import heroWorkingImage from '@/app/images/hero_working.jpg';

import { Section } from '../../Section';
import { NoiseCTAButton } from './NoiseCTAButton';

export const HeroSection = () => {
    return (
        <Section className="w-screen h-screen">
            <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center -z-20">
                <Image
                    src={heroImage.src}
                    alt={'Hero Image'}
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="absolute bottom-0 left-0  bg-gradient-to-b from-transparent to-[#0A0A0A] from-[0%] via-[50%] w-screen h-96 -z-10"></div>
            <div className="absolute top-0 left-0  bg-gradient-to-b from-[#0A0A0A] to-transparent  from-[0%] via-[50%] w-screen h-96 -z-10"></div>
            <div className="w-full h-full relative flex items-center justify-center">
                <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10 w-full">
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left ">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-10">
                            Building digital experiences that <span className="text-blue-500">spark joy</span>.
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-300 max-w-xl mb-6">
                            Hey, I&apos;m a developer who loves crafting beautiful, modern, and high-performance
                            applications. When I&apos;m not tweaking animations or pushing pixels, you&apos;ll find me
                            exploring new tech stacks. Let&apos;s build something awesome together!
                        </p>
                        <Link
                            href="mailto:contact@example.com?subject=Development%20Work%20Inquiry"
                            className="inline-flex items-center justify-center text-base font-medium"
                        >
                            <NoiseCTAButton />
                        </Link>
                    </div>
                    <div className="flex-1 w-full flex justify-center md:justify-end">
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 bg-[#0a0a0a]">
                            <Image
                                src={heroWorkingImage.src}
                                alt="Me working"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
