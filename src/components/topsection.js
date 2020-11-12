import React from 'react' 
import { Link } from 'react-router-dom'

export const TopSection = (props) => {

    const { url, text, sectionName } = props

    return(
        <div className="top-section">
            <ul className="nav-bar">
                <Link to="/"><button id="return-button">Return</button></Link>
                <div id="other-buttons">
                    <li><Link to={ url[0] }><button>{ text[0] }</button></Link></li>
                    <li><Link to={ url[1] }><button>{ text[1] }</button></Link></li>
                    <li><Link to={ url[2] }><button>{ text[2] }</button></Link></li>
                </div>
            </ul>
            <h1>{ sectionName }</h1>
        </div>
    )

}