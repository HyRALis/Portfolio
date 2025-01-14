import React, { PropsWithChildren } from 'react';

export const Section: React.FC<PropsWithChildren> = ({ children }) => {
    return <section className="container mx-auto px-10 md:px-5 sm:px-0 space-y-10">{children}</section>;
};
