import React from 'react'

export default ({image, video}) => {

    return(
            video ?
                <video style={{height: '100%', width: '100%'}} type="video/mp4" controls autoplay>
                    <source src={ video }/>
                </video>
                :
                <img src={ image } alt="img_project" style={{objectFit: "contain", height: "100%", width: "100%"}}/>
            
    )
}