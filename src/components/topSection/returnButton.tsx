"use client"

import Link from "next/link"
import { Theme, useThemeContext } from "../themeProvider"
import { COLORS } from "../../theme";

export default function ReturnButton(){

    const theme: Theme = useThemeContext();

    return (
        <Link href="/">
            <button 
                className="bg-transparentContainer text-white py-2 px-8 border"
                style={{ borderColor: COLORS[theme].primary }}
            >
                Return
            </button>
        </Link>
    )
}