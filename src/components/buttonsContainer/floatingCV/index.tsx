'use client';

import React from 'react';
import DownloadIcon from '../download';
import FullscreenIcon from '../fullscreen';

export default function FloatingCV() {
    const [isExpanded, toggleExpanded] = React.useState(false);

    return (
        <button
            type="button"
            onClick={() => toggleExpanded(!isExpanded)}
            className="md:hidden flex absolute top-2 right-2 z-50 cursor-pointer"
        >
            <div
                className="flex justify-center items-center h-10 w-10 shaded-button"
                style={{
                    borderBottom: '3px outset #c98659',
                    borderTop: '3px outset #c98659',
                    borderLeft: '3px outset #c98659',
                    borderRight: isExpanded ? 'none' : '3px outset #c98659' 
                }}
            >
                <p className={`text-white text-lg font-extralight`}>CV</p>
            </div>
            {isExpanded ? (
                <div
                    className="flex h-10 items-center px-1 gap-x-1 flex-row bg-transparentContainer"
                    style={{
                        borderTop: '3px outset rgba(0,0,0,0.3)',
                        borderRight: '3px outset rgba(0,0,0,0.3)',
                        borderBottom: '3px outset rgba(0,0,0,0.3)',
                    }}
                >
                    <DownloadIcon size={25} />
                    <FullscreenIcon size={22} />
                </div>
            ) : null}
        </button>
    );
}
