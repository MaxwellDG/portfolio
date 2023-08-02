'use client';

import Link from 'next/link';
import { Theme, useThemeContext } from '../themeProvider';
import { COLORS } from '../../theme';
import './style.scss';
import DownloadIcon from './download';
import FullscreenIcon from './fullscreen';

interface ButtonProps {
    route: string;
    text: string;
    theme: Theme;
}

function RouteButton({ route, text, theme }: ButtonProps) {
    return (
        <Link
            href={`/${route}`}
            className="flex flex-row justify-center items-center text-center button before:h-2 before:w-3 before:bg-red-600"
        >
            <p className="text-white font-extralight whitespace-nowrap">
                {text}
            </p>
        </Link>
    );
}

export default function ButtonsContainer() {
    const theme: Theme = useThemeContext();

    return (
        <div className="flex">
            <ul className="flex flex-col list-none p-0 justify-between ml-2 gap-y-1">
                <div>
                    {['Skills', 'Enterprise Projects', 'Hobby Projects'].map(
                        (item) => (
                            <RouteButton
                                text={item}
                                route={item.split(' ')[0].toLowerCase()}
                                theme={theme}
                            />
                        )
                    )}
                </div>
                <li className="flex h-15 flex-row bg-transparentContainer">
                    <div
                        className="flex justify-center items-center p-4 shaded-button"
                        style={{
                            borderBottom: '3px outset #c98659',
                            borderTop: '3px outset #c98659',
                            borderLeft: '3px outset #c98659',
                        }}
                    >
                        <p className="text-white text-3xl font-extralight">
                            CV
                        </p>
                    </div>
                    <div
                        className="cv-bot-div flex flex-row items-center"
                        style={{
                            borderTop: '3px outset rgba(0,0,0,0.3)',
                            borderRight: '3px outset rgba(0,0,0,0.3)',
                            borderBottom: '3px outset rgba(0,0,0,0.3)',
                        }}
                    >
                        <DownloadIcon />
                        <FullscreenIcon />
                    </div>
                </li>
            </ul>
        </div>
    );
}
