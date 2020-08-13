import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ImageLink extends PureComponent{

    static propTypes = {
        altText: PropTypes.string,
        image: PropTypes.string,
    }

    render(){
        const { altText, image, link } = this.props

        return(
            <li>
                <a href={ link } target="_blank" rel="noopener noreferrer">
                    <img alt={ altText } src={ image }/>
                </a>
            </li> 
        )
    }
}

export default ImageLink