import React from 'react';
import Project from '../../project';
import { enterpriseProjectData } from '../../../data/projectData';

type Props = {
    focusedIndex: number;
};

export default function EnterpriseProjects({ focusedIndex }: Props) {
    return (
        <div className="m-12 flex flex-1 flex-col justify-center items-center z-10">
            {enterpriseProjectData[focusedIndex] && (
                <Project project={enterpriseProjectData[focusedIndex]} isMobile={false}/>
            )}
        </div>
    );
}
