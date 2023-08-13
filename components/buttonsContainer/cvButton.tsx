// 'use client';

import DownloadIcon from './download';
import FullscreenIcon from './fullscreen';

type Props = {
    isBig: boolean;
};

export default function CVButton({ isBig }: Props) {

    return (
        <div
            className={`flex ${
                isBig ? 'h-15' : 'h-12'
            }  flex-row bg-transparentContainer`}
        >
            <div
                className="flex justify-center items-center p-4 shaded-button"
                style={{
                    borderBottom: '3px outset #c98659',
                    borderTop: '3px outset #c98659',
                    borderLeft: '3px outset #c98659',
                }}
            >
                <p
                    className={`text-white ${
                        isBig ? 'text-3xl' : 'text-xl'
                    } font-extralight`}
                >
                    CV
                </p>
            </div>
            <div
                className="cv-bot-div flex flex-row items-center"
                style={{
                    borderTop: '3px outset rgba(0,0,0,0.3)',
                    borderRight: '3px outset rgba(0,0,0,0.3)',
                    borderBottom: '3px outset rgba(0,0,0,0.3)',
                }}
            >
                <DownloadIcon size={isBig ? 38 : 25} />
                <FullscreenIcon size={isBig ? 35 : 22} />
            </div>
        </div>
    );
}
