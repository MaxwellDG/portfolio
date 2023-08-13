'use client';

import { Theme, useThemeContext } from '../../contexts/themeContext';
import './styles.scss';
import Fullscreen from '../../public/icons/fullscreen.svg';
import React from 'react';
import { COLORS } from '../../theme';

type Props = {
    size: number;
};

export default function FullscreenIcon({ size }: Props) {
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
                    height={size}
                    width={size}
                    stroke={isHovering ? COLORS[theme].primary : 'white'}
                />
            </a>
        </div>
    );
}
