import React from 'react'

export default ({image, video}) => {

    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {video ?
                <video className="modal-video" type="video/mp4" controls>
                    <source src={ video }/>
                </video>
                :
                <img src={ image } alt="img_project" className="modal-image"/>
            }
        </div>
    )
}