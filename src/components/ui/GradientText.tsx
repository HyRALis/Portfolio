import { cn } from '@/utils/twMerge';
import React from 'react';

export interface GradientTextProps {
    text: string;
    textClassName?: string;
    renderTag?: (props: React.HTMLAttributes<HTMLElement>) => React.ReactNode;
}

export const GradientText: React.FC<GradientTextProps> = ({ text, textClassName, renderTag }) => {
    const defaultRenderTag = (props: React.HTMLAttributes<HTMLElement>) => <h2 {...props}>{text}</h2>;

    const Tag = renderTag || defaultRenderTag;

    return Tag({
        className: cn(
            'text-7xl bg-gradient-to-r from-purple-500 to-blue-500 from-[0%] via-[10%] inline-block text-transparent bg-clip-text',
            textClassName
        )
    });
};
