'use client';

import React from 'react';
import { Project } from '../../data/projectData';
import Multimedia from '../media';
import { PopupModal } from '../modals/skillsInfo';
import MediaContent from '../media/mediaContent';

interface Props {
    project: Project;
    isMobile: boolean;
}

export default function Project({ project, isMobile }: Props) {
    const [isShowingMediaModal, toggleMediaModal] = React.useState(false);

    const { name, desc, video, image, thumb, links, linkTexts } = project;

    return (
        <div
            className="flex flex-col lg:flex-row bg-transparentContainer m-12 max-w-2xl xs:p-2 relative overflow-y-auto"
            style={{ border: '2px outset rgba(0,0,0,0.3)' }}
        >
            <Multimedia
                hasVideo={!!video}
                thumb={thumb}
                expandMedia={() => toggleMediaModal(!isShowingMediaModal)}
            />
            <div className="lg:hidden flex flex-col justify-center">
                {links.map((link: string, i: number) => (
                    <div
                        className={`shaded-button shaded-hover mx-2 my-1 text-white rounded-sm border-black border`}
                    >
                        <a
                            key={i}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="font-extralight text-center">
                                {linkTexts[i]}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
            <div className="mx-2">
                <h3 className="projectHeader mb-2">{name}</h3>
                <p className="text-white font-extralight" id="desc">
                    {desc}
                </p>
            </div>
            <PopupModal
                closeModal={() => toggleMediaModal(!isShowingMediaModal)}
                isShowing={isShowingMediaModal}
                isMobile={isMobile}
            >
                <MediaContent image={image} video={video} />
            </PopupModal>
        </div>
    );
}
