import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '1px solid rgb(196, 122, 25)',
      backgroundColor: '#b0adaf',
    },
    overlay: {
        background: 'transparent',
    }
  };

export default ({closeModal, isShowing, children}) => {


    return(
        <Modal
            isOpen={isShowing}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {children}
        </Modal>
    )

}