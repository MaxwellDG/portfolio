import React from 'react'

export default class MediaBlock extends React.Component{

    render(){

        const { projectName, projectClass, floatSide, githubLink, description, video, language, tech, videoClass } = this.props

        if(floatSide === "left"){
            return(
                <div className={ projectClass }>
                    <div className="projectVideoBlock">
                        <video className={ videoClass } type="video/mp4" controls>
                            <source src={ video }/>
                        </video>
                    </div> 
                    <div className="projectInfoBlock">
                            <h3 className="projectHeader">{ projectName }</h3>
                            <p id="description">{ description }</p>
                            <ul style={{listStyleType: "none", padding: "0px"}}>
                                <li key={ 0 }><div id="textLanguage"><p className="textThing">Language: </p><p id="textLang">{ language }</p></div></li>
                                <li key={ 1 } id="textTech"><p className="textThing">Tech: </p><p>{ tech }</p></li>
                            </ul>
                    </div>
                    <a href={ githubLink } target="_blank" rel="noopener noreferrer" className="sourceCode">
                        <img alt="github_link" src="images/github_icon_white.png" width="50px" height="50px"/>
                    </a>
                </div>
            )
        } else if (floatSide === "right"){
            return(
            <div className={ projectClass }>
                <a href={ githubLink } target="_blank" rel="noopener noreferrer" className="sourceCode">
                    <img className="githubLink" alt="github_link" src="images/github_icon_white.png" width="50px" height="50px"/>
                </a>
                <div className="projectInfoBlock">
                    <h3 className="projectHeader">{ projectName }</h3>
                    <p id="description">{ description }</p>
                    <ul style={{listStyleType: "none", padding: "0px"}}>
                        <li key={ 0 }><div id="textLanguage"><p className="textThing">Language: </p><p id="textLang">{ language }</p></div></li>
                        <li key={ 1 }id="textTech"><p className="textThing">Tech: </p><p>{ tech }</p></li>
                    </ul>
                </div>
                <div className="projectVideoBlock">
                    <video className={ videoClass } type="video/mp4" controls>
                        <source src={ video }/>
                    </video>
                </div> 
            </div>    
            )}
    }
}
                
