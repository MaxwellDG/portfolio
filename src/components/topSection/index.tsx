import React from 'react';
import ReturnButton from './returnButton';
import CVButton from '../buttonsContainer/cvButton';
import { RouteButton } from '../buttonsContainer/routeButton';
import { SCREEN_TYPE } from '../../contexts/screenContext/types';

interface Props {
    routes: SCREEN_TYPE[];
    sectionName: string;
}

export const TopSection = ({ routes, sectionName }: Props) => {
    return (
        <div className="hidden lg:flex w-full flex-row justify-between mb-2">
            <div className="flex w-full justify-between p-0">
                <div className="flex flex-col justify-between">
                    <ReturnButton />
                    <h1 className="text-2xl">{sectionName}</h1>
                </div>
                <div className="flex flex-col w-[163px]">
                    <RouteButton
                        route={routes[0]}
                        isBig={false}
                        shouldNav={false}
                        isMobile={false}
                    />
                    <RouteButton
                        route={routes[1]}
                        isBig={false}
                        shouldNav={false}
                        isMobile={false}
                    />
                    <CVButton isBig={false} />
                </div>
            </div>
        </div>
    );
};
