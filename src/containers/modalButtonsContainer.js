import React from 'react'
import ModalButton from '../components/modalButton'
import { connect } from 'react-redux'
import * as buttonActions from '../actions/modals'

class ModalButtonsContainer extends React.Component{

    constructor(props){
        super(props)
        this.handleButtonEnter = this.handleButtonEnter.bind(this)
        this.handleButtonLeave = this.handleButtonLeave.bind(this)
      }
    
      handleButtonEnter(event){
        event.target.style.background = 'grey'
      }
    
      handleButtonLeave(event){
        event.target.style.background = 'none'
      }

    render(){
        const { buttonStates, toggleModalOn } = this.props

        const allTheButtons = buttonStates.map((button) => 
                    <li className="modalButton" key={ button.index }>
                        <ModalButton 
                            text={ button.text } 
                            selected={ button.selected }
                            handleButtonOnClick={ () => toggleModalOn(button) }
                            handleButtonLeave={ this.handleButtonLeave }
                            handleButtonEnter={ this.handleButtonEnter }>
                        </ModalButton>
                    </li>)

        return(
            <ul id='modalButtonsContainer'>
                { allTheButtons }
            </ul> 
        )
    }
}

function mapStateToProps(state){
  return(
    {
      buttonStates: state 
    }
  )
}

function mapDispatchToProps(dispatch){
  return{
    toggleModalOn: (index) => dispatch(buttonActions.toggleModalOn(index)),
    toggleOffModals: () => dispatch(buttonActions.toggleOffModals)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalButtonsContainer); 
