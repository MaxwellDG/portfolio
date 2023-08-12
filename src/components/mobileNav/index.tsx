"use client"

import { useContext } from 'react';
import { SCREEN_TYPE } from '../../contexts/screenContext/types';
import { MobileRouteButton, RouteButton } from '../buttonsContainer/routeButton';
import { ScreenContext, ScreenUpdateContext } from '../../contexts/screenContext';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
    const screen = useContext(ScreenContext);
    const pathname = usePathname();

    return (
        <div className="lg:hidden flex w-full absolute bottom-0 left-0 right-0">
            <div className="flex w-full list-none p-0">
                {[
                    SCREEN_TYPE.SKILLS,
                    SCREEN_TYPE.HOBBY,
                    SCREEN_TYPE.ENTERPRISE,
                ].map((item) => (
                    <MobileRouteButton
                        key={item}
                        route={item}
                        isBig={true}
                        shouldNav
                        isActive={pathname === '/main' && screen === item}
                    />
                ))}
            </div>
        </div>
    );
}
