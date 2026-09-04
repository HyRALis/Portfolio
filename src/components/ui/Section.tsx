import { cn } from '@/utils/twMerge';
import React, { PropsWithChildren } from 'react';

export interface SectionProps extends PropsWithChildren {
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({ className, id, children }) => {
    return (
        <section id={id} className={cn('container mx-auto scroll-mt-24 px-5 sm:px-6 lg:px-8', className)}>
            {children}
        </section>
    );
};
