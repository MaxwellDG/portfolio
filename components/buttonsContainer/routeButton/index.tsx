'use client';

import { useRouter } from 'next/navigation';
import { ScreenUpdateContext } from '../../../contexts/screenContext';
// import { Theme, useThemeContext } from '../../../contexts/themeContext';
import { SCREEN_TYPE } from '../../../contexts/screenContext/types';
import { useContext } from 'react';

interface ButtonProps {
    route: SCREEN_TYPE;
    isBig: boolean;
    shouldNav: boolean;
}

interface MobileButtonProps {
    route: SCREEN_TYPE;
    isBig: boolean;
    shouldNav: boolean;
    isActive?: boolean;
}

export function RouteButton({ route, isBig, shouldNav }: ButtonProps) {
    const updateScreen = useContext(ScreenUpdateContext);
    const router = useRouter();

    const handleRoutePress = () => {
        updateScreen(route);
        if (shouldNav) {
            router.push('/main');
        }
    };

    return (
        <div
            className={`flex w-full ${!isBig ? 'mb-[10px]' : 'mb-6'}`}
            onMouseUp={handleRoutePress}
        >
            <div
                className={`flex w-full relative flex-row justify-center items-center text-center ${
                    !isBig ? 'short-button w-full' : 'button'
                }`}
            >
                <p className="text-white font-extralight whitespace-nowrap">
                    {route}
                </p>
            </div>
        </div>
    );
}

export function MobileRouteButton({
    route,
    isBig,
    shouldNav,
    isActive,
}: MobileButtonProps) {
    // const theme: Theme = useThemeContext();
    const updateScreen = useContext(ScreenUpdateContext);
    const router = useRouter();

    const handleRoutePress = () => {
        updateScreen(route);
        if (shouldNav) {
            router.push('/main');
        }
    };

    return (
        <div
            onClick={handleRoutePress}
            className={`flex flex-1 flex-row justify-center items-center text-center ${
                isActive ? 'active-nav-button' : 'nav-button'
            } before:h-2 before:w-3 ${
                isActive && route === SCREEN_TYPE.SKILLS
                    ? 'left-active-nav'
                    : isActive && route === SCREEN_TYPE.HOBBY
                    ? 'mid-active-nav'
                    : isActive && route === SCREEN_TYPE.ENTERPRISE
                    ? 'right-active-nav'
                    : ''
            } ${
                !isActive && route === SCREEN_TYPE.SKILLS
                    ? 'left-nav'
                    : !isActive && route === SCREEN_TYPE.ENTERPRISE
                    ? 'right-nav'
                    : ''
            }`}
        >
            <p className="text-white font-extralight whitespace-nowrap">
                {route.split(' ')[0]}
            </p>
        </div>
    );
}
