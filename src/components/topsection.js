import React from 'react' 
import { Link } from 'react-router-dom'

export const TopSection = (props) => {

    const { url, text, sectionName } = props

    return(
        <div className="top-section">
            <ul className="nav-bar">
                <Link to="/"><button id="return-button">Return</button></Link>
                <div id="other-buttons">
                    <li><Link to={ url[0] }><button className="buttons-topSection">{ text[0] }</button></Link></li>
                    <li><Link to={ url[1] }><button className="buttons-topSection">{ text[1] }</button></Link></li>
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