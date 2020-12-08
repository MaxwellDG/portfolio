import React from 'react'

export default class IconSkill extends React.PureComponent{

    render(){
        const { alt, src, index } = this.props    

        return(
            <li key={ index } className="iconSkill"><img alt={ alt } src={ src }/></li>
        )
    }
}