import React from 'react';
import MobileNav from '../components/mobileNav';
import ScreenProvider from '../contexts/screenContext';
import '../theme/globals.css';
import '../theme/app.scss';
import '../theme/app.scss';
import BackgroundAnimation from '../components/backgroundAnimation';
import { Analytics } from '@vercel/analytics/react';

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
            <body className="flex flex-1 relative pb-[43px] lg:pb-0">
                    <BackgroundAnimation />
                    {/* <ThemeProvider> */}
                    <ScreenProvider>
                        {children}
                        <MobileNav />
                    </ScreenProvider>
                    {/* </ThemeProvider> */}
                    <Analytics />
            </body>
        </html>
    );
}
