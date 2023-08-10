import { Project as ProjectType } from '../../../data/projectData';
import Project from '../index';
import { Carousel } from '../../carousel';

export default function ProjectMobile({
    focusedIndex,
    setFocusedIndex,
    array,
}) {
    return (
        <div className="absolute top-0 left-0 z-50 h-full w-full">
            <Carousel
                focusedIndex={focusedIndex}
                setFocusedIndex={setFocusedIndex}
            >
                {array.map((project: ProjectType, i: number) => (
                    <div className="w-full flex justify-center">
                        <Project project={project} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
