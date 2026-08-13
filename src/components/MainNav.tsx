'use client';

import React from 'react';
import { FloatingNav } from './ui/FloatingNavbar';
import { floatingNavbarItems } from '@/utils/constants/floatingNavbarItems';

export const MainNav = () => {
    return <FloatingNav navItems={floatingNavbarItems} />;
};
