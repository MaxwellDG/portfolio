import React from 'react';
import DownloadIcon from '../download';
import FullscreenIcon from '../fullscreen';
import '../styles.scss';
import ReturnButton from '../../topSection/returnButton';

export default function FloatingTop() {
    return (
        <div className="lg:hidden flex absolute top-4 left-0 right-0 w-full justify-between items-center z-50">
            <div className="mx-4">
                <ReturnButton />
            </div>
            <button type="button" className="mx-4 flex h-10 cursor-default">
                <div
                    className="floating-cv flex justify-center items-center h-10 w-10 shaded-button"
                    style={{
                        borderBottom: '3px outset #c98659',
                        borderTop: '3px outset #c98659',
                        borderLeft: '3px outset #c98659',
                        borderRight: 'none',
                    }}
                >
                    <p className={`text-white text-lg font-extralight`}>CV</p>
                </div>
                <div
                    className="flex h-10 items-center px-1 gap-x-1 flex-row bg-transparentContainer"
                    style={{
                        // borderTop: '3px outset rgba(0,0,0,0.3)', optical illusion makes this not used
                        borderRight: '3px outset rgba(0,0,0,0.3)',
                        borderBottom: '3px outset rgba(0,0,0,0.3)',
                    }}
                >
                    <DownloadIcon size={25} />
                    <FullscreenIcon size={22} />
                </div>
            </button>
        </div>
    );
}
