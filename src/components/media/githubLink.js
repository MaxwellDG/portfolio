import React from 'react';
import useWindowDimensions from '../../hooks/useDimensions';

export default ({ isNDA, link, toggleNDAModal, side }) => {

    const dimensions = useWindowDimensions();

    // Left and right padding removed entirely on mobile screens
    var styles = {
        top: '10px',
        left: side === 'left' ? undefined : '10px',
        right: side === 'right' ? undefined : '10px',
    }

    var mobileStyle = {
        top: '10px',
        left: '0px',
        right: '0px'
    }
    

    return(
        <div id="gitHubLink" style={dimensions.width <= 700 ? mobileStyle : styles}>
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