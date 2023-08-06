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
}

export function RouteButton({ route, isBig, shouldNav }: ButtonProps) {
    const theme: Theme = useThemeContext();
    const updateScreen = useContext(ScreenUpdateContext);
    const router = useRouter();

    const handleRoutePress = () => {
        console.log("Wtf is going on: ", route);
        updateScreen(route);
        if(shouldNav){
            router.push('/main')
        }
    };


    return (
        <div
            onClick={handleRoutePress}
            className={`flex flex-row justify-center items-center text-center ${
                isBig ? 'button' : 'short-button w-full'
            } before:h-2 before:w-3`}
        >
            <p className="text-white font-extralight whitespace-nowrap">
                {route}
            </p>
        </div>
    );
}