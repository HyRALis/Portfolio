import React from 'react';

export interface GradientTextProps {
    text: string;
    textClassName?: string;
    renderTag?: (props: React.HTMLAttributes<HTMLElement>) => React.ReactNode;
}

export const GradientText: React.FC<GradientTextProps> = ({ text, textClassName, renderTag }) => {
    const defaultRenderTag = (props: React.HTMLAttributes<HTMLElement>) => <h3 {...props}>{text}</h3>;

    const Tag = renderTag || defaultRenderTag;

    return Tag({
        className: `text-7xl bg-gradient-to-r from-purple-500 to-blue-500 from-[0%] via-[10%] rounded-full inline-block text-transparent bg-clip-text ${
            textClassName ?? ''
        }`
    });
};
