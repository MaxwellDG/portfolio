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