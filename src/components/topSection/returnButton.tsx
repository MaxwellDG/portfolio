'use client';

import Link from 'next/link';
import { Theme, useThemeContext } from '../../contexts/themeContext';
import { COLORS } from '../../theme';
import '../buttonsContainer/styles.scss';

export default function ReturnButton() {
    const theme: Theme = useThemeContext();

    return (
        <Link
            href="/"
            className={`flex flex-row justify-center items-center self-start text-center short-button before:h-2 before:w-3`}
        >
            <p className="text-white font-extralight whitespace-nowrap">
                Return
            </p>
        </Link>
    );
}
