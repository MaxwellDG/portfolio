import React from 'react';

export default ({video, image, videoClass, expandMedia}) => {

    return(
        <button onClick={expandMedia} className="projectVideoBlock">
            {video ?
                <video className={ videoClass } type="video/mp4" controls>
                    <source src={ video }/>
                </video>
                :
                <img src={ image } alt="img_project" className="projectImage"/>
            }
        </button> 
    )

}