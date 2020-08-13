import React from 'react'
import Modal from 'react-modal'

export default class ModalResume extends React.Component{
    render(){

        return(
            <Modal 
                isOpen={ true }
                shouldCloseOnOverlayClick={ true }
                onRequestClose={ this.props.toggleOff }
                className={"modalContentResume"}
                overlayClassName={"modalOverlay"}>
                            <div className="modalTopBlock">
                            <span className="xButtons" onClick={ this.props.toggleOff }><a>&times;</a></span>
                                <h2 className="modalHeader">Resume</h2>
                            </div>
                            <iframe src="images/MaxMDG.Resume.pdf" title="My Resume" style={{width: "100%", height: "100%", marginTop: "10px"}}></iframe>
            </Modal>
        )
    }
}