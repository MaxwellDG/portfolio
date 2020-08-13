import React from 'react'
import Modal from 'react-modal'

export default class ModalAboutMe extends React.Component{
    render(){
        return(          
            <Modal 
                isOpen={ true }
                shouldCloseOnOverlayClick={ true }
                onRequestClose={ this.props.toggleOff }
                className={"modalContentAbout"}
                overlayClassName={"modalOverlay"}>
                    <div id="aboutModal" class="modal1">
                        <div class="modal-content1">
                            <span className="xButtons" onClick={ this.props.toggleOff }><a>&times;</a></span>
                            <div>
                            <div className="modalTopBlock">
                                <h2 className="modalHeader">About Me</h2>
                            </div>
                                <img alt="aboutMe_Img" src="images/Selfie1.jpg" id="photoAboutMe"/>
                                <p className="standardText" id="hello">Hello!</p>
                                <p className="standardText">
                                    My name is Maxwell and I work as a freelance software developer. I specialize in Android and React(Native), 
                                    while also dabbling in Python/Java desktop software. Up until recently, I was going through University and working
                                    in the events industry. This allowed for me to develop great interpersonal skills in a wide variety of environments.
                                    While working in events, I spent time programming as a hobby. Overtime this hobby grew into a passion, and then a career pursuit.
                                    As my number of tech-skills grew, my interest followed suit, and I am now heavily focused on Mobile / Web App Development.
                                    My current aspiration is to find employment in a developer role that allows me to mesh these two worlds together. 
                                </p>
                            </div>
                        </div>
                     </div>
            </Modal>
        )
    }
}