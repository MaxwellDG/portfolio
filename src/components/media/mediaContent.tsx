import React from 'react'

interface Props {
    image?: string,
    video?: string
}

export default ({image, video}: Props) => {

    return(
            video ?
                <video style={{height: '100%', width: '100%'}} typeof="video/mp4" controls autoPlay>
                    <source src={ video }/>
                </video>
                :
                <img src={ image } alt="img_project" style={{objectFit: "contain", height: "100%", width: "100%"}}/>
            
    )
}