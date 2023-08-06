import React from 'react';
import { Project } from '../../data/projectData';
import Multimedia from '../media';

interface Props {
    project: Project;
}

export default function Project({ project }: Props) {
    const [isShowingMediaModal, toggleMediaModal] = React.useState(false);

    const { name, desc, video, image } = project;

    return (
        <div
            className="flex bg-transparentContainer m-12 max-w-2xl p-2"
            style={{ border: '2px outset rgba(0,0,0,0.3)' }}
        >
            <Multimedia
                video={video}
                image={image}
                expandMedia={() => toggleMediaModal(!isShowingMediaModal)}
            />
            <div className="mx-2">
                <h3 className="projectHeader mb-2">{name}</h3>
                <p className="text-white font-extralight" id="desc">
                    {desc}
                </p>
            </div>
        </div>
    );
}
