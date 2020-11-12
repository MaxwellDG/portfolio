import React from 'react'
import { Link } from 'react-router-dom'

export default class ButtonsContainer extends React.Component{

    render(){

        return(
            <ul id='container-buttons'>
                <li><Link to="/about"><button onClick={ () => this.props.inProp(true)}>About Me</button></Link></li>
                <li><Link to="/mobile"><button onClick={ () => this.props.inProp(true)}>Mobile Projects</button></Link></li>
                <li><Link to="/desktop"><button onClick={ () => this.props.inProp(true)}>Desktop Projects</button></Link></li>
                <li><Link to="/resume"><button onClick={ () => this.props.inProp(true)}>Resume</button></Link></li>
            </ul> 
        )
    }
}
