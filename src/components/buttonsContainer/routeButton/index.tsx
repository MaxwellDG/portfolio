"use client"

import { useRouter } from "next/navigation";
import { ScreenContext, ScreenUpdateContext } from "../../../contexts/screenContext";
import { Theme, useThemeContext } from "../../../contexts/themeContext";
import { SCREEN_TYPE } from "../../../contexts/screenContext/types";
import { useContext } from "react";

interface ButtonProps {
    route: SCREEN_TYPE;
    isBig: boolean;
    shouldNav: boolean;
    isMobile: boolean
}

interface MobileButtonProps {
    route: SCREEN_TYPE;
    isBig: boolean;
    shouldNav: boolean;
    icon: React.ReactNode
}

export function RouteButton({ route, isBig, shouldNav, isMobile }: ButtonProps) {
    const theme: Theme = useThemeContext();
    const updateScreen = useContext(ScreenUpdateContext);
    const router = useRouter();

    const handleRoutePress = () => {
        updateScreen(route);
        if(shouldNav){
            router.push('/main')
        }
    };


    return (
        <div
            onClick={handleRoutePress}
            className={`flex ${isMobile ? 'flex-1' : 'mb-6'} flex-row justify-center items-center text-center ${
                isBig ? 'button' : 'short-button w-full'
            } before:h-2 before:w-3`}
        >
            <p className="text-white font-extralight whitespace-nowrap">
                {isMobile ? route.split(" ")[0] : route}
            </p>
        </div>
    );
}


export function MobileRouteButton({ route, isBig, shouldNav, icon }: MobileButtonProps) {
    const theme: Theme = useThemeContext();
    const updateScreen = useContext(ScreenUpdateContext);
    const router = useRouter();

    const handleRoutePress = () => {
        updateScreen(route);
        if(shouldNav){
            router.push('/main')
        }
    };


    return (
        <div
            onClick={handleRoutePress}
            className={`flex flex-col justify-center items-center text-center ${
                isBig ? 'button' : 'short-button w-full'
            } before:h-2 before:w-3`}
        >
            {icon}
            <p className="text-white font-extralight whitespace-nowrap">
                {route}
            </p>
        </div>
    );
}

