import React from 'react'
import { connect } from 'react-redux'
import * as buttonActions from '../actions/modals'
import ModalAboutMe from '../containers/modalAboutMe'
import ModalMobileProjects from '../containers/modalMobileProjects'
import ModalOtherProjects from '../containers/modalOtherProjects'
import ModalResume from '../containers/modalResume'

class ModalBoxContainer extends React.Component{

    render(){  
      /* Note that the below section could probably be done in a more "React" way by incorporating "this.props.children". Read up more about that */

      const selectedButton = this.props.buttonStates.filter((button) => {
        if(button.selected === true){
          return button
        } return null
      })

      let activeModalContent = (<div></div>)
      switch(selectedButton[0].index){
        case 0:
          activeModalContent = <ModalAboutMe toggleOff={ this.props.toggleOffModals }></ModalAboutMe>
          break
        case 1:
          activeModalContent = <ModalMobileProjects toggleOff={ this.props.toggleOffModals }></ModalMobileProjects>
          break
        case 2:
          activeModalContent = <ModalOtherProjects toggleOff={ this.props.toggleOffModals }></ModalOtherProjects> 
          break
        default:
          activeModalContent = <ModalResume toggleOff={ this.props.toggleOffModals }></ModalResume>
          break        
      }

        return(
        <div>
          { activeModalContent }
        </div>
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
      toggleOffModals: () => dispatch(buttonActions.toggleOffModals())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ModalBoxContainer)