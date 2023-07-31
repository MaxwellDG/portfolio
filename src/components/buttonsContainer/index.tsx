"use client"

import Link from "next/link";
import { Theme, useThemeContext } from "../themeProvider";
import { COLORS } from "../../theme";
import "./style.scss";
  
interface ButtonProps {
    route: string,
    text: string,
    theme: Theme
}

function RouteButton({route, text, theme}: ButtonProps){

    return (
        <Link href={`/${route}`} className="text-center button before:h-2 before:w-3 before:bg-red-600">
            <p className="text-white">{text}</p>
        </Link>
    )
}

export default function ButtonsContainer(){

    const theme: Theme = useThemeContext();


    return(
        <div className="flex">
            <ul className="flex flex-col list-none p-0 justify-center ml-2 gap-y-1">
                {["Skills", "Enterprise Projects", "Hobby Projects"].map(item => 
                    <RouteButton text={item} route={item.split(" ")[0].toLowerCase()} theme={theme}/>
                )}
                <li className="flex flex-row bg-transparentContainer">
                    <div 
                        className="flex justify-center items-center p-4"
                        style={{ backgroundColor: COLORS[theme].primary }}
                    >
                        <p className="">CV</p>
                    </div>
                    <div className="cv-bot-div flex flex-row items-center">
                        <a className="items-center justify-center flex flex-row" href={ process.env.PUBLIC_URL + 'images/Maxwell2023.pdf' } download>
                            <button id="download" />
                        </a>
                        <a className="items-center justify-center flex flex-row" href={ process.env.PUBLIC_URL + 'images/Maxwell2023.pdf' } target='_blank' rel="noopener noreferrer">
                            <button id="fullscreen" />
                        </a>
                    </div>
                </li>
            </ul> 
        </div>
    )
}
