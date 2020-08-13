import React from 'react';
import './css/App.css';
import ModalButtonsContainer from './containers/modalButtonsContainer'
import ImageLinksContainer from './containers/imageLinksContainer'
import * as buttonActions from './actions/modals'
import { connect } from 'react-redux'
import ModalBoxContainer from './containers/modalBoxContainer'

class App extends React.Component{

  render(){
    let main = (<div></div>)

    let isButtonSelected = this.props.buttonStates.filter((button) => {
      return button.selected === true
    })

    if(isButtonSelected.length === 0){
      main = (
        <div id="mainBlock">          
          <p className="standardText" id="myName">Maxwell Dunk-Green</p>
          <ImageLinksContainer></ImageLinksContainer>
          <ModalButtonsContainer> </ModalButtonsContainer>
        </div>
      )
    } else {
          main = (
            <ModalBoxContainer></ModalBoxContainer>
          )
    }

  return(
      <div className="App">
            { main }
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
