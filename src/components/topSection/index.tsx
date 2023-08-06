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
        <div className="top-section mb-2">
            <div className="flex justify-between p-0">
                <div className="flex flex-col justify-between">
                    <ReturnButton />
                    <h1 className="text-2xl">{sectionName}</h1>
                </div>
                <div className="flex flex-col w-[163px]">
                    <RouteButton route={routes[0]} isBig={false} shouldNav={false} />
                    <RouteButton route={routes[1]} isBig={false} shouldNav={false} />
                    <CVButton isBig={false} />
                </div>
            </div>
        </div>
    );
};
