import React from 'react'

export default class IconSkill extends React.PureComponent{

    render(){
        const { alt, src } = this.props    

        return(
            <li className="iconSkill"><img alt={ alt } src={ src }/></li>
        )
    }
}