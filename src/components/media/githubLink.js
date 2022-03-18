import React from 'react';

export default ({isNDA, link, toggleNDAModal}) => {


    return(
        <div>
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