import React from 'react'

export default ({link, linkText}) => {

    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h2 style={{margin: 0, alignSelf: 'start'}}>Info</h2>
            <p>This repository is private due to NDA restrictions. If you'd like more information please refer to:</p>
            <a href={link} target="_blank">{linkText}</a>
        </div>
    )
}