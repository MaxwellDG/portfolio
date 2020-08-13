import React from 'react'
import ImageLink from '../components/imageLink'

class ImageLinksContainer extends React.Component{

    render(){
        return(
            <ul id="mainImageLinks">
                <ImageLink altText="Img_GitHub" image="images/iconGithub.png" link="https://www.github.com/MaxwellDG"></ImageLink>
                <ImageLink altText="Img_LinkedIn" image="images/iconLinkedin.jpg" link="https://www.linkedin.com/in/maxwell-dunk-green-bb313a165/"></ImageLink>
            </ul>
        )
    }
}

export default ImageLinksContainer