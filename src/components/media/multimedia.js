import React from 'react';

export default ({video, image, expandMedia}) => {

    return(
        <div className="mediaButton" style={{maxWidth: '300px', borderRadius: '3px'}}>
            <button onClick={expandMedia} style={{backgroundColor: 'transparent', padding: '8px', borderRadius: '3px', position: 'relative'}}>
                {video ?
                    <>
                        <span style={{height: '30px', width: '30px', backgroundColor: '#000', borderRadius: '50%', display: 'inline-block', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
                        <div style={{position: 'absolute', top: '50%', left: '50%', marginLeft: '1px', transform: 'translate(-50%, -50%)', borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderLeft: '7px solid white'}}></div>
                        <video type="video/mp4" style={{maxWidth: '100%', maxHeight: '100%'}}>
                            <source src={ video }/>
                        </video>
                    </>
                    :
                    <img src={ image } alt="img_project" style={{maxWidth: '100%', maxHeight: '100%'}}/>
                }
            </button> 
        </div>
    )

}