'use client';

import React from 'react';

interface Props {
    expandMedia: () => void;
    video?: string;
    image?: string;
}

export default ({ video, image, expandMedia }: Props) => {
    return (
        <div className="flex items-center hover:bg-[rgba(174,170,172,0.1)] rounded-sm flex-col justify-center z-50 pointer-events-auto cursor-pointer">
            <button
                onClick={expandMedia}
                className="flex justify-center items-center relative rounded p-2 bg-transparent max-h-[250px] w-[250px]"
            >
                {video ? (
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
                        <video
                            key={video}
                            typeof="video/mp4"
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        >
                            <source src={video} />
                            <source src={image} />
                        </video>
                    </>
                ) : (
                    <img
                        key={image}
                        src={image}
                        alt="img_project"
                        className="max-w-full max-h-full"
                    />
                )}
            </button>
        </div>
    );
};
