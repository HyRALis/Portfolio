import React from 'react';
import { NoiseBackground } from '../../NoiseBackground';

export const NoiseCTAButton = () => {
    return (
        <div className="flex justify-center">
            <NoiseBackground
                containerClassName="w-fit p-2 rounded-full mx-auto"
                gradientColors={['purple','white', 'blue']}
            >
                <button className="h-full w-full bg-black cursor-pointer rounded-full px-6 py-4 text-white ">
                    Contact Me &rarr;
                </button>
            </NoiseBackground>
        </div>
    );
};
