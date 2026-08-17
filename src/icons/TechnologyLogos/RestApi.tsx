import { ISvgComponentProps } from '@/types/svgProps';
import React from 'react';

export const RestApi: React.FC<ISvgComponentProps> = ({ svgProps, pathProps }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="100"
            height="100"
            {...svgProps}
        >
            {/* API / Network connected nodes icon as a single path */}
            <path
                d="M25 5a5 5 0 110 10 5 5 0 010-10zM5 30a5 5 0 110 10 5 5 0 010-10zM35 30a5 5 0 110 10 5 5 0 010-10zM22 39a3 3 0 110 6 3 3 0 010-6z M25 15L12 31 M25 15L38 31 M14 37L22 41 M36 37L28 41"
                fill="currentColor"
                {...pathProps}
            />
            <line x1="25" y1="15" x2="12" y2="31" stroke="currentColor" strokeWidth="2" />
            <line x1="25" y1="15" x2="38" y2="31" stroke="currentColor" strokeWidth="2" />
            <line x1="14" y1="37" x2="22" y2="41" stroke="currentColor" strokeWidth="2" />
            <line x1="36" y1="37" x2="28" y2="41" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
};
