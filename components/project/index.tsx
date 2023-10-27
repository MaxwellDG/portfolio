'use client';

import React from 'react';
import { Project as ProjectData } from '../../data/projectData';
import Multimedia from '../media';
import { PopupModal } from '../modals/skillsInfo';
import MediaContent from '../media/mediaContent';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Twitter from '../../public/icons/twitter.svg';
import Link from '../../public/icons/link.svg';

interface Props {
    project: ProjectData;
    isMobile: boolean;
}

export default function Project({ project, isMobile }: Props) {
    const { width } = useWindowDimensions();
    const [isShowingMediaModal, toggleMediaModal] = React.useState(false);

    const {
        name,
        desc,
        video,
        image,
        mobileImage,
        thumb,
        links,
        linkTexts,
        github,
    } = project;

    return (
        <div className="flex flex-col lg:flex-row max-w-2xl relative overflow-y-auto">
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
                    <span
                        className={`self-center lg:self-auto shaded-button shaded-hover mx-2 px-2 my-1 text-white rounded-sm border-black border`}
                    >
                               <a
                                    key={i}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center flex-start"
                                >
                                    {link.toLowerCase().includes('twitter') ? (
                                        <Twitter height={20} width={20} />
                                    ) : (
                                        <Link height={20} width={20} />
                                    )}
                                    <div className="flex flex-1 justify-center">
                                        <p className="font-extralight text-center mx-2 ">
                                            {linkTexts[i]}
                                        </p>
                                    </div>
                                </a>
                    </span>
                ))}
            </div>
            <div className="mx-2 flex flex-col">
                <h3
                    style={{ border: '2px outset rgba(0,0,0,0.3)' }}
                    className="projectHeader mb-2 p-2 bg-transparentContainer self-center lg:self-start"
                >
                    {name}
                </h3>
                <div
                    className="text-white font-extralight p-2 bg-transparentContainer mx-2 lg:mx-0"
                    style={{ border: '2px outset rgba(0,0,0,0.3)' }}
                >
                    {isMobile && github ? (
                        <div className="h-12 w-12 float-right ml-2">
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sourceCode"
                            >
                                <img
                                    alt="github_link"
                                    src="images/github_icon_white.png"
                                />
                            </a>
                        </div>
                    ) : null}
                    <p id="desc">{desc}</p>
                </div>
            </div>
            <PopupModal
                closeModal={() => toggleMediaModal(!isShowingMediaModal)}
                isShowing={isShowingMediaModal}
                isMobile={isMobile}
            >
                <MediaContent
                    image={width < 1024 && !!mobileImage ? mobileImage : image}
                    video={video}
                />
            </PopupModal>
        </div>
    );
}
