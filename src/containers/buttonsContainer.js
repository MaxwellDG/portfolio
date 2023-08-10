import React from 'react'
import { Link } from 'react-router-dom'

export default class ButtonsContainer extends React.Component{

    render(){

        return(
            <ul className='container-buttons'>
                <Link to="/about"><li><button>About Me</button></li></Link>
                <Link to="/enterprise"><li><button>Enterprise Projects</button></li></Link>
                <Link to="/hobby"><li><button>Hobby Projects</button></li></Link>
                <li id="home-cv-button">
                    <div className="cv-top-div">
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
}