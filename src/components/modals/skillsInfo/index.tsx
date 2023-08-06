"use client"

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

interface Props {
    closeModal: () => void,
    isShowing: boolean,
    children: React.ReactNode
    contentDims?: any,
}

export const PopupModal = ({closeModal, isShowing, children, contentDims}: Props) => {
    
    // const customStyles = {
    //     content: {
    //       ...contentDims,
    //       top: '50%',
    //       left: '50%',
    //       right: 'auto',
    //       bottom: 'auto',
    //       transform: 'translate(-50%, -50%)',
    //       borderRight: '1px solid #494949',
    //       borderBottom: '1px solid #494949',
    //       background: 'rgba(29,27,29,255)',
    //     },
    //     overlay: {
    //         backgroundColor: 'rgba(111,110,105, 0.1)',
    //     }
    //   };

    return(
        <Modal
            isOpen={isShowing}
            onRequestClose={closeModal}
            ariaHideApp={false}
            // style={customStyles}
        >
            {children}
        </Modal>
    )
}