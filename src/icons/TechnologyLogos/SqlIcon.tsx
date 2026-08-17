import { ISvgComponentProps } from '@/types/svgProps';
import React from 'react';

export const SqlIcon: React.FC<ISvgComponentProps> = ({ svgProps, pathProps }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="100"
            height="100"
            {...svgProps}
        >
            {/* Database cylinder */}
            <ellipse cx="25" cy="11" rx="15" ry="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
            <path
                d="M10 11v28c0 2.8 6.7 5 15 5s15-2.2 15-5V11"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
            />
            <path
                d="M10 22c0 2.8 6.7 5 15 5s15-2.2 15-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                {...pathProps}
            />
            <path
                d="M10 33c0 2.8 6.7 5 15 5s15-2.2 15-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
            />
        </svg>
    );
};
