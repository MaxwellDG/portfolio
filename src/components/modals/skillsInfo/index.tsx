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

const customStyles = {
    content : {
        width: 'fit-content',
        maxHeight: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center', 
        justifySelf: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0,
        inset: 0,
        margin: 'auto'
    },
    overlay: {
        zIndex: 1000,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  };

export const PopupModal = ({closeModal, isShowing, children, contentDims}: Props) => {
    
    return(
        <Modal
            isOpen={isShowing}
            onRequestClose={closeModal}
            ariaHideApp={false}
            style={customStyles}
        >
            {children}
            <button onClick={closeModal} className="absolute top-2 right-2 p-2 h-6 w-6 flex justify-center items-center rounded-sm border-none bg-[#8C8681]">
                <p className="text-white">X</p>
            </button>
        </Modal>
    )
}