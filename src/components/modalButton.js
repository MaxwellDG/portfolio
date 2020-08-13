import React, { PureComponent } from 'react'

class ModalButton extends PureComponent{

    render(){
        const { text, index, selected, handleButtonEnter, handleButtonLeave, handleButtonOnClick } = this.props

        if(!selected){
            return(
                <button 
                    index={ index } 
                    onMouseEnter={ handleButtonEnter } 
                    onMouseLeave={ handleButtonLeave } 
                    onClick={ handleButtonOnClick } 
                    selected={ selected }>
                    { text }
                </button>
            )} else {
                return(
                <div>
                    <button 
                        index={ index } 
                        onMouseEnter={ handleButtonEnter } 
                        onMouseLeave={ handleButtonLeave } 
                        onClick={ handleButtonOnClick } 
                        selected={ selected }>{ text }
                    </button>
                </div>
        )  
        }

    }
}

export default ModalButton

