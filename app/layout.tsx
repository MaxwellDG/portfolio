import React from 'react';
import MobileNav from '../components/mobileNav';
import ScreenProvider from '../contexts/screenContext';
import ThemeProvider from '../contexts/themeContext';
import '../globals.css';
import '../theme/app.scss';
import '../db/index';

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
        <html lang="en" className="flex h-full">
            <body className="flex flex-1 relative">
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
