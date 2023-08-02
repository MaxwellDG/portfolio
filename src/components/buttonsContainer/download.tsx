'use client';

import { Theme, useThemeContext } from '../themeProvider';
import './style.scss';
import Download from '../../../public/icons/download.svg';
import React from 'react';
import { COLORS } from '../../theme';

export default function DownloadIcon() {
    const theme: Theme = useThemeContext();

    const [isHovering, toggleHover] = React.useState(false);

    return (
        <div
            onMouseOver={() => toggleHover(true)}
            onMouseOut={() => toggleHover(false)}
        >
            <a
                className="items-center justify-center flex flex-row"
                href={process.env.PUBLIC_URL + 'images/Maxwell2023.pdf'}
                download
            >
                <Download
                    height={38}
                    width={38}
                    stroke={isHovering ? COLORS[theme].primary : 'white'}
                    strokeWidth={1}
                />
            </a>
        </div>
    );
}
