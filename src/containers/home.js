import React from 'react'
import ButtonsContainer from '../containers/buttonsContainer'

export default class Home extends React.Component{

    render(){

        return(
          <div id="page-home" className="page">
            <div id="section-name">
                  <a href="https://www.github.com/MaxwellDG" target="_blank" rel="noopener noreferrer">
                    <img id="largeGitHub" className="iconSkill" alt="Img_GitHub" src="images/github_icon_white.png"></img>    
                  </a>
                  <p className="standardText" id="myName">Maxwell<br></br>Dunk&#8209;Green</p>
            </div>
            <ButtonsContainer inProp={ this.props.activateInProp }/>
          </div>
        )
    }
}