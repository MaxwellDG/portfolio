'use client';

import { Theme, useThemeContext } from '../themeProvider';
import './style.scss';
import Fullscreen from '../../../public/icons/fullscreen.svg';
import React from 'react';
import { COLORS } from '../../theme';

export default function FullscreenIcon() {
    const theme: Theme = useThemeContext();

    const [isHovering, toggleHover] = React.useState(false);

    return (
        <div
            onMouseOver={() => toggleHover(true)}
            onMouseOut={() => toggleHover(false)}
        >
            <a
                href={'images/Maxwell2023.pdf'}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Fullscreen
                    height={35}
                    width={35}
                    stroke={isHovering ? COLORS[theme].primary : 'white'}
                />
            </a>
        </div>
    );
}
