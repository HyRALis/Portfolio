import { ISvgComponentProps } from '@/types/svgProps';
import React from 'react';

export const NxIcon: React.FC<ISvgComponentProps> = ({ svgProps, pathProps }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="100"
            height="100"
            {...svgProps}
        >
            {/* NX monorepo logo - diamond shape with Nx text */}
            <path
                d="M25 3L45 25L25 47L5 25L25 3z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinejoin="round"
                {...pathProps}
            />
            <text
                x="25"
                y="29"
                textAnchor="middle"
                fontSize="14"
                fontWeight="bold"
                fill="currentColor"
                fontFamily="Arial, sans-serif"
            >
                Nx
            </text>
        </svg>
    );
};
