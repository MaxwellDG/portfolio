import React from 'react' 
import Link from "next/link";

interface Props {
    url: string[],
    text: string[],
    sectionName: string
}

export const TopSection = ({ url, text, sectionName }: Props) => {


    return(
        <div className="top-section">
            <ul className="nav-bar">
                <Link href="/"><button id="return-button">Return</button></Link>
                <div id="other-buttons">
                    <li><Link href={ url[0] }><button className="buttons-topSection">{ text[0] }</button></Link></li>
                    <li><Link href={ url[1] }><button className="buttons-topSection">{ text[1] }</button></Link></li>
                    <li id="cv-button">
                        <div className="cv-top-div">
                            <p>CV</p>
                        </div>
                    <div className="cv-bot-div">
                        <a href={ process.env.PUBLIC_URL + 'images/Maxwell2023.pdf' } download><button id="download" /></a>
                        <a href={ process.env.PUBLIC_URL + 'images/Maxwell2023.pdf' } target='_blank' rel="noopener noreferrer"><button id="fullscreen" /></a>
                    </div>
                    </li>
                </div>
            </ul>
            <h1>{ sectionName }</h1>
        </div>
    )
}