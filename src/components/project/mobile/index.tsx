import { Project as ProjectType } from '../../../data/projectData';
import Project from '../index';
import { Carousel } from '../../carousel';

// ** The array has its order manipulated here in order to get the css transition animation offset correctly ** //

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
                {[
                    array[array.length - 1],
                    ...array.slice(0, array.length - 1),
                ].map((project: ProjectType, i: number) => (
                    <div key={i} className="w-full flex justify-center">
                        <Project project={project} isMobile/>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
