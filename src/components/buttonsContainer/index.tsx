"use client"

import Link from "next/link";
import { Theme, useThemeContext } from "../themeProvider";
import { COLORS } from "../../theme";

export default function ButtonsContainer(){

    const theme: Theme = useThemeContext();

    console.log("Theme is....", theme);


    return(
        <ul className="flex flex-col list-none p-0 justify-between ml-20">
            <Link href="/about"><li><button>About Me</button></li></Link>
            <Link href="/enterprise"><li><button>Enterprise Projects</button></li></Link>
            <Link href="/hobby"><li><button>Hobby Projects</button></li></Link>
            <li id="home-cv-button">
                <div 
                    className="cv-top-div"
                    style={{ backgroundColor: COLORS[theme].primary }}
                >
                    <p>CV</p>
                </div>
                <div className="cv-bot-div">
                    <a href={ process.env.PUBLIC_URL + 'images/Maxwell2023.pdf' } download><button id="download" /></a>
                    <a href={ process.env.PUBLIC_URL + 'images/Maxwell2023.pdf' } target='_blank' rel="noopener noreferrer"><button id="fullscreen" /></a>
                </div>
            </li>
        </ul> 
    )
}
