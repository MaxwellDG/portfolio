'use client';

import { COLORS } from '../../theme';
import { Theme, useThemeContext } from '../themeProvider';

export default function CVButton() {
    const theme: Theme = useThemeContext()

    return (
        <li className="flex flex-row items-center bg-transparentContainer">
            <div
                className="flex justify-center items-center p-4"
                style={{ backgroundColor: COLORS[theme].primary }}
            >
                <p className="text-black">CV</p>
            </div>
            <div className="cv-bot-div">
                <a
                    className="items-center flex"
                    href={process.env.PUBLIC_URL + 'images/Maxwell2023.pdf'}
                    download
                >
                    <button id="download" />
                </a>
                <a
                    className="items-center flex"
                    href={process.env.PUBLIC_URL + 'images/Maxwell2023.pdf'}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button id="fullscreen" />
                </a>
            </div>
        </li>
    );
}
