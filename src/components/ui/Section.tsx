import React, { PropsWithChildren } from 'react';

export interface SectionProps extends PropsWithChildren {
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ className, children }) => {
    return (
        <section className={`"container mx-auto px-10 md:px-5 sm:px-0 space-y-10 ${className || ''}`}>
            {children}
        </section>
    );
};
