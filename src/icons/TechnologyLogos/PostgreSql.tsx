import { ISvgComponentProps } from '@/types/svgProps';
import React from 'react';

export const PostgreSql: React.FC<ISvgComponentProps> = ({ svgProps, pathProps }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="100"
            height="100"
            {...svgProps}
        >
            {/* Simplified PostgreSQL elephant head */}
            <path
                d="M36.6 7.4C34 5.2 30.4 4 26.5 4c-5.2 0-9.5 2.4-12.2 6.2C12 13.4 11 17.4 11.5 21.5c.4 3.2 1.6 6 3.4 8.2l-1.4 8.8c-.2 1 .5 2 1.5 2.2.1 0 .3 0 .4 0h2.2l1.2-7c1.6.8 3.4 1.2 5.2 1.2.8 0 1.5-.1 2.3-.2l1.5 7h2.4c1 0 1.8-.7 2-1.7l.8-5.5c3.8-2.8 6.2-7.2 6.2-12.2 0-1.5-.2-3-.6-4.4L36.6 7.4zM21 23c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm10 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
                fill="currentColor"
                {...pathProps}
            />
            <path
                d="M38 14c2 1 3.5 3 3.5 5.5s-1 4-2.5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
};
