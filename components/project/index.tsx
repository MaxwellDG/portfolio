'use client';

import React from 'react';
import { Project as ProjectData } from '../../data/projectData';
import Multimedia from '../media';
import { PopupModal } from '../modals/skillsInfo';
import MediaContent from '../media/mediaContent';

interface Props {
    project: ProjectData;
    isMobile: boolean;
}

export default function Project({ project, isMobile }: Props) {
    const [isShowingMediaModal, toggleMediaModal] = React.useState(false);

    const { name, desc, video, image, thumb, links, linkTexts } = project;

    return (
        <div className="flex flex-col lg:flex-row m-12 max-w-2xl relative overflow-y-auto">
            <Multimedia
                hasVideo={!!video}
                thumb={thumb}
                expandMedia={() => toggleMediaModal(!isShowingMediaModal)}
            />
            <div
                className="lg:hidden flex flex-col justify-center"
                style={{ marginBottom: links.length ? '4px' : 0 }}
            >
                {links.map((link: string, i: number) => (
                    <div
                        className={`shaded-button shaded-hover mx-2 px-1 my-1 text-white rounded-sm border-black border`}
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
            <div className="mx-2 flex flex-col">
                <h3
                    style={{ border: '2px outset rgba(0,0,0,0.3)' }}
                    className="projectHeader mb-2 p-2 bg-transparentContainer self-center lg:self-start"
                >
                    {name}
                </h3>
                <p
                    style={{ border: '2px outset rgba(0,0,0,0.3)' }}
                    className="text-white font-extralight p-2 bg-transparentContainer"
                    id="desc"
                >
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
