'use client';

import { Theme, useThemeContext } from '../../contexts/themeContext';
import './styles.scss';
import Download from '../../public/icons/download.svg';
import { motion } from 'framer-motion';
import React from 'react';
import { COLORS } from '../../theme';

type Props = {
    size: number;
};

export default function DownloadIcon({ size }: Props) {
    const theme: Theme = useThemeContext();

    const [isHovering, toggleHover] = React.useState(false);

    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
        >
            <div
                onMouseOver={() => toggleHover(true)}
                onMouseOut={() => toggleHover(false)}
            >
                <a
                    className="items-center justify-center flex flex-row"
                    href={'/images/Maxwell_2023.pdf'}
                    download
                >
                    <Download
                        height={size}
                        width={size}
                        stroke={isHovering ? COLORS[theme].primary : 'white'}
                        strokeWidth={1}
                    />
                </a>
            </div>
        </motion.div>
    );
}
