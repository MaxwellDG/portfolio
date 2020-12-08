import React, { PureComponent } from 'react'

class ImageLink extends PureComponent{

    render(){
        const { altText, image, link, id } = this.props

        return(
            <li>
                <a href={ link } target="_blank" rel="noopener noreferrer">
                    <img id={ id } alt={ altText } src={ image }/>
                </a>
            </li> 
        )
    }
}

export default ImageLink