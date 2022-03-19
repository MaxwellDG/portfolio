import React from 'react';
import Modal from 'react-modal';


export default ({closeModal, isShowing, children, contentDims}) => {
    
    const customStyles = {
        content: {
          ...contentDims,
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          borderRight: '1px solid #494949',
          borderBottom: '1px solid #494949',
          background: 'rgba(29,27,29,255)',
        },
        overlay: {
            backgroundColor: 'rgba(111,110,105, 0.1)',
        }
      };

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