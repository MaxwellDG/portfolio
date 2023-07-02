"use client"

import React, { createContext, useContext, useState } from "react";

export enum Theme {
    AUTUMN = "Autumn",
    JUNGLE = "Jungle",
    MOUNTAIN = "Mountains"
}

export const ThemeContext = createContext<Theme>(Theme.AUTUMN);

interface ButtonProps {
    theme: Theme,
    setTheme: (theme: Theme) => void,
    index: number,
    isActive: boolean
}

const BACKGROUND_IMGS = [
    '/images/fallpaper.jpg',
    '/images/jungle.jpeg',
    '/images/mountains.jpeg',
]

function ButtonTheme({theme, isActive, setTheme, index}: ButtonProps){

    function handlePress(){
        console.log("PRessing! ", theme);
        setTheme(theme)
    }

    return (
        <button 
            onClick={handlePress}
            className={`py-2 h-10 flex flex-row justify-center flex-1 border-none`}
            style={{ backgroundImage: `url('${BACKGROUND_IMGS[index]}')` }}
        >
        </button>
    )
}

interface ThemeBackgroundProps {
    children: React.ReactNode,
    currentTheme: Theme,
    setTheme: (theme: Theme) => void
}


function ThemeBackground({children, currentTheme, setTheme}: ThemeBackgroundProps){
    
    return (
        <div 
            className="absolute top-0 left-0 h-full w-full"
            // style={{ backgroundImage: `url('${BACKGROUND_IMGS[index]}')` }}
        >
            <div className="w-full flex flex-row">
                {[Theme.AUTUMN, Theme.JUNGLE, Theme.MOUNTAIN].map((theme, i) => 
                    <ButtonTheme 
                        theme={theme} 
                        isActive={theme === currentTheme}
                        setTheme={setTheme}
                        index={i} 
                    />
                )}
            </div>
            {children}
        </div>
    )
}

export default function ThemeProvider({children}: {children: React.ReactNode}){

    const [theme, setTheme] = useState(Theme.AUTUMN);

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeBackground currentTheme={theme} setTheme={setTheme}>
                {children}
            </ThemeBackground>
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    return useContext(ThemeContext);
}