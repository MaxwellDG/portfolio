import { Project as ProjectType } from '../../../data/projectData';
import Project from '../index';
import { Carousel } from '../../carousel';
import ProjectBottom from '../bottom';
import SkillsScroller from '../../skillsScroller';

// ** The array has its order manipulated here in order to get the css transition animation offset correctly ** //

export default function ProjectMobile({
    focusedIndex,
    setFocusedIndex,
    array,
}) {
    return (
        <div className="absolute top-0 left-0 bottom-0 right-0 z-50 flex flex-col w-full">
            <Carousel
                focusedIndex={focusedIndex}
                setFocusedIndex={setFocusedIndex}
            >
                {[
                    array[array.length - 1],
                    ...array.slice(0, array.length - 1),
                ].map((project: ProjectType, i: number) => (
                    <div
                        key={i}
                        className="m-auto max-w-xl flex justify-center"
                    >
                        <Project project={project} isMobile />
                    </div>
                ))}
            </Carousel>
            <div
                key={focusedIndex}
                className="flex pb-[0.1rem] mb-2"
            >
                {array[focusedIndex] && (
                    <SkillsScroller
                        skills={[
                            ...array[focusedIndex].languages,
                            ...array[focusedIndex].tech,
                        ]}
                    />
                )}
            </div>
        </div>
    );
}
