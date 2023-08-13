'use client';

import React, { createContext, useState } from 'react';
import { SCREEN_TYPE } from './types';

export const ScreenContext = createContext(SCREEN_TYPE.SKILLS);

export const ScreenUpdateContext = createContext((type: SCREEN_TYPE) => {});

export default function ScreenProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [screen, setScreen] = useState(SCREEN_TYPE.SKILLS);

    return (
        <ScreenContext.Provider value={screen}>
            <ScreenUpdateContext.Provider value={setScreen}>
                {children}
            </ScreenUpdateContext.Provider>
        </ScreenContext.Provider>
    );
}
