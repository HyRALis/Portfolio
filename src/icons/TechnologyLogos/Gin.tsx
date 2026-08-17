import { ISvgComponentProps } from '@/types/svgProps';
import React from 'react';

export const Gin: React.FC<ISvgComponentProps> = ({ svgProps, pathProps }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="100"
            height="100"
            {...svgProps}
        >
            {/* Martini glass / Gin flask shape */}
            <path
                d="M12 8h26l-11 18v12h6v3H17v-3h6V26L12 8zm4.5 3l7.5 12 7.5-12H16.5z"
                fill="currentColor"
                {...pathProps}
            />
        </svg>
    );
};
