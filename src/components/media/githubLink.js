import React from 'react';

export default ({isNDA, link, toggleNDAModal, side}) => {


    var styles = {
        position: 'absolute',
        top: '10px',
        left: side === 'left' ? undefined : '10px',
        right: side === 'right' ? undefined : '10px',
    }
    

    return(
        <div style={styles}>
            {isNDA ?
                <button className="NDA sourceCode" onClick={toggleNDAModal}>
                    <img alt="github_link" src="images/github_icon_white.png" width="50px" height="50px"/>
                </button>
            :
                <a href={ link } target="_blank" rel="noopener noreferrer" className="sourceCode">
                    <img alt="github_link" src="images/github_icon_white.png" width="50px" height="50px"/>
                </a>
            }
        </div>
    )

}