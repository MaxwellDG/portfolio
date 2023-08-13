'use client';

import React from 'react';
import Modal from 'react-modal';

interface Props {
    closeModal: () => void;
    isShowing: boolean;
    children: React.ReactNode;
    isMobile: boolean;
}

export const PopupModal = ({
    closeModal,
    isShowing,
    children,
    isMobile,
}: Props) => {
    let customStyles = {
        content: {
            width: !isMobile ? 'fit-content' : 'auto',
            maxHeight: isMobile ? '100%' : '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            justifySelf: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0,
            inset: isMobile ? '16px' : 0,
            margin: 'auto',
        },
        overlay: {
            zIndex: 1000,
            backgroundColor: isMobile ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.6)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    };

    return (
        <Modal
            isOpen={isShowing}
            onRequestClose={closeModal}
            ariaHideApp={false}
            //@ts-ignore
            style={customStyles}
        >
            {isMobile &&
                <button
                    onClick={closeModal}
                    className={`absolute top-0 right-0 p-2 h-6 w-6 flex justify-center items-center rounded-sm border-none bg-[#8C8681]`}
                >
                    <p className="text-white">X</p>
                </button>
            }
            <div className={`w-full ${isMobile ? 'h-[90%]' : 'h-full'}`}>
                {children}
            </div>
        </Modal>
    );
};
