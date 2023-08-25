'use client';

import React, { createContext, useContext, useState } from 'react';

export enum Theme {
    AUTUMN = 'Autumn',
    JUNGLE = 'Jungle',
    MOUNTAINS = 'Mountains',
}

export const ThemeContext = createContext<Theme>(Theme.AUTUMN);

interface ButtonProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    index: number;
    isActive: boolean;
}

const BACKGROUND_IMGS = {
    Autumn: '/images/fallpaper.jpg',
    Jungle: '/images/jungle.jpeg',
    Mountains: '/images/mountains.jpeg',
};

function ButtonTheme({ theme, isActive, setTheme, index }: ButtonProps) {
    function handlePress() {
        setTheme(theme);
    }

    return <button onClick={handlePress} className="h-3 w-3 bg-white"></button>;
}

interface ThemeBackgroundProps {
    children: React.ReactNode;
    currentTheme: Theme;
    setTheme: (theme: Theme) => void;
}

function ThemeBackground({
    children,
    currentTheme,
    setTheme,
}: ThemeBackgroundProps) {
    return (
        <div className="flex flex-1 pb-[43px] lg:mb-0 relative">
            {/* <div
                className="absolute top-0 left-0 h-full w-full"
                style={{
                    backgroundImage: `url('${BACKGROUND_IMGS[currentTheme]}'), url('/images/fallpaper_30.jpeg')`,
                    zIndex: -1,
                }}
            /> */}
            {/* <div className="flex absolute top-2 right-2 flex-row gap-x-2 mt-3 mr-3">
                {[Theme.AUTUMN, Theme.JUNGLE, Theme.MOUNTAINS].map((theme, i) => 
                    <ButtonTheme 
                        key={i}
                        theme={theme} 
                        isActive={theme === currentTheme}
                        setTheme={setTheme}
                        index={i} 
                    />
                )}
            </div> */}
            {children}
        </div>
    );
}

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState(Theme.AUTUMN);

    React.useEffect(() => {
        testApi();
    }, []);

    async function testApi() {
        console.log('Test api...');
        try {
            const res = await fetch('/api');
            console.log('Res???', res.json());
        } catch (e) {
            console.log('error fetching');
        }
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeBackground currentTheme={theme} setTheme={setTheme}>
                {children}
            </ThemeBackground>
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    return useContext(ThemeContext);
}
