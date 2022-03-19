import React from 'react'

export default ({image, video}) => {

    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}>
            {video ?
                <video style={{height: '100%', width: '100%'}} type="video/mp4" controls autoplay>
                    <source src={ video }/>
                </video>
                :
                <img src={ image } alt="img_project" style={{height: '100%', width: undefined}}/>
            }
        </div>
    )
}