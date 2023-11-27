import React from 'react';
import Project from '../../project';
import { IProject } from '../../../data/projectData';

type Props = {
    focusedIndex: number;
    data: IProject[];
};

export default function Projects({ data, focusedIndex }: Props) {
    return (
        <div className="m-12 flex flex-1 flex-col justify-center items-center z-10">
            {data[focusedIndex] && (
                <Project project={data[focusedIndex]} isMobile={false}/>
            )}
        </div>
    );
}
