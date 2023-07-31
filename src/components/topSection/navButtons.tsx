"use client"

import Link from "next/link";
import { Theme, useThemeContext } from "../themeProvider";
import { COLORS } from "../../theme";

interface Props {
    url: string[],
    text: string[]
}

export default function NavButtons({ url, text }: Props){

    const theme: Theme = useThemeContext();

    return (
        <>
            <li>
                <Link href={ url[0] }> 
                    <button 
                        className="bg-transparentContainer text-white py-2 px-8 border hover:text-black mb-2"
                        style={{ borderColor: COLORS[theme].primary }}
                    >
                        { text[0] }
                    </button>
                </Link>
            </li>
            <li>
                <Link href={ url[1] }> 
                    <button 
                        className="bg-transparentContainer text-white py-2 px-8 border hover:text-black mb-2"
                        style={{ borderColor: COLORS[theme].primary }}
                    >
                        { text[1] }
                    </button>
                </Link>
            </li>
        </>
    )
}