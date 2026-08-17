import { ISvgComponentProps } from '@/types/svgProps';
import React from 'react';

export const GoLang: React.FC<ISvgComponentProps> = ({ svgProps, pathProps }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="100"
            height="100"
            {...svgProps}
        >
            {/* Go Gopher - simplified silhouette */}
            <path
                d="M32 4C20 4 12 14 12 26c0 4 1.2 7.8 3.2 11L12 42c-.5.8-.2 1.8.6 2.3.3.2.6.2.9.2.5 0 1.1-.3 1.4-.7l2.8-4.5C21 42.3 26.2 44 32 44s11-1.7 14.3-4.7l2.8 4.5c.3.5.8.7 1.4.7.3 0 .6-.1.9-.2.8-.5 1.1-1.5.6-2.3l-3.2-5c2-3.2 3.2-7 3.2-11C52 14 44 4 32 4zm-8 24c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm16 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
                fill="currentColor"
                {...pathProps}
            />
            <path
                d="M15 16c-2 0-4 2-4 5s2 5 4 5M49 16c2 0 4 2 4 5s-2 5-4 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
            <text
                x="32"
                y="58"
                textAnchor="middle"
                fontSize="10"
                fontWeight="bold"
                fill="currentColor"
                fontFamily="Arial, sans-serif"
            >
                Go
            </text>
        </svg>
    );
};
