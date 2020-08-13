import React from 'react'

export default class ModalTopBlock extends React.PureComponent{

    render(){
        const { text } = this.props

        /* if you decide to do this: have an optional part for this.props.children when theres iconSkills too. Map them. */

        return(
            <div className="modalTopBlock">
                <h2 class="modalHeader">{ text }</h2>
            </div>
        )
    }
}