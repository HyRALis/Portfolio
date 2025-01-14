import React from 'react';

import Image from 'next/image';
import heroImage from '@/app/images/hero_bg.jpg';

import { Section } from '../../Section';

export const HeroSection = () => {
    return (
        <Section className="relative w-screen h-screen space-y-0">
            <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center z-10">
                <Image
                    src={heroImage.src}
                    alt={'Hero Image'}
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="absolute bottom-0 left-0  bg-gradient-to-b from-transparent to-[#0A0A0A] from-[0%] via-[50%] w-screen h-96 z-20"></div>
            <div className="absolute top-0 left-0  bg-gradient-to-b from-[#0A0A0A] to-transparent  from-[0%] via-[50%] w-screen h-96 z-20"></div>
        </Section>
    );
};
