import React from 'react'

export default ({link, linkText}) => {

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Roboto Slab, serif', color: 'white'}}>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2 style={{margin: 0, alignSelf: 'start'}}>Info</h2>
                <img alt="github_link" src="images/github_icon_white.png" width="50px" height="50px"/>
            </div>
            <p>This repository is private due to NDA restrictions. On request I can supply code snippets if necessary. If you'd like more information on the project please refer to:</p>
            <a href={link} target="_blank" rel="noopener noreferrer" style={{color: 'rgb(236, 120, 18)'}}>{linkText}</a>
            <div></div>
        </div>
    )
}