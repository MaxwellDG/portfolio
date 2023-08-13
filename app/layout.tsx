import React, { useState } from 'react';
import ThemeProvider, { Theme } from '../contexts/themeContext';
import '../globals.css';
import '../theme/app.scss';
import ScreenProvider from '../contexts/screenContext';
import MobileNav from '../components/mobileNav';

export const metadata = {
    title: 'Maxwell Dunk-Green',
    description: 'Portfolio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="h-screen">
            <body className="h-screen flex">
                <ThemeProvider>
                    <ScreenProvider>
                        {children}
                        <MobileNav />
                    </ScreenProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
