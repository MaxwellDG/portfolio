'use client';

import React from 'react';

interface Props {
    expandMedia: () => void;
    thumb: string;
    hasVideo: boolean;
    hasExtraContent: boolean;
}

export default ({ thumb, hasVideo, expandMedia, hasExtraContent }: Props) => {
    return (
        <div
            style={{ border: '2px outset rgba(0,0,0,0.3)' }}
            className={`flex items-center self-center lg:self-auto p-2 bg-transparentContainer ${
                hasExtraContent
                    ? 'cursor-pointer hover:bg-[rgba(174,170,172,0.1)]'
                    : ''
            } mb-1 lg:mb-0 rounded-sm flex-col justify-center z-50 pointer-events-auto`}
        >
            <button
                onClick={hasExtraContent ? expandMedia : undefined}
                className={`flex justify-center items-center relative rounded lg:p-2 my-1 bg-transparent max-h-[200px] w-[200px] xxs:max-h-[250px] xxs:max-w-[250px] lg:w-[400px] ${
                    !hasExtraContent ? 'cursor-default' : ''
                }`}
            >
                {hasVideo && (
                    <>
                        <span
                            style={{
                                height: '30px',
                                width: '30px',
                                backgroundColor: '#000',
                                borderRadius: '50%',
                                display: 'inline-block',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginLeft: '1px',
                                transform: 'translate(-50%, -50%)',
                                borderTop: '7px solid transparent',
                                borderBottom: '7px solid transparent',
                                borderLeft: '7px solid white',
                            }}
                        ></div>
                        {/* <video
                            key={video}
                            typeof="video/mp4"
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        >
                            <source src={video} />
                            <source src={image} />
                        </video> */}
                    </>
                )}
                <img
                    key={thumb}
                    src={thumb}
                    alt="img_project"
                    className="max-w-full max-h-full"
                />
            </button>
        </div>
    );
};
