import React from 'react';
import Project from '../../project';
import { hobbyProjectData } from '../../../data/projectData';

type Props = {
    focusedIndex: number;
};

export default function HobbyProjects({ focusedIndex }: Props) {
    return (
        <div className="m-12 flex flex-1 flex-col justify-center items-center z-10">
            {hobbyProjectData[focusedIndex] && (
                <Project project={hobbyProjectData[focusedIndex]} isMobile={false}/>
            )}
        </div>
    );
}
