'use client';

import './styles.scss';
import Fullscreen from '../../public/icons/fullscreen.svg';
import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../theme';

type Props = {
    size: number;
};

export default function FullscreenIcon({ size }: Props) {

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
                    href={'images/Maxwell_2023.pdf'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Fullscreen
                        height={size}
                        width={size}
                        stroke={isHovering ? COLORS.Autumn.primary : 'white'}
                    />
                </a>
            </div>
        </motion.div>
    );
}
