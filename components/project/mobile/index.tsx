import { IProject, IProject as ProjectType } from '../../../data/projectData';
import Project from '../index';
import { Carousel } from '../../carousel';
import SkillsScroller from '../../skillsScroller';

// ** The array has its order manipulated here in order to get the css transition animation offset correctly ** //

type Props = {
    focusedIndex: number;
    setFocusedIndex: (number: number) => void;
    array: IProject[];
    isOpensourceProjects: boolean;
};

export default function ProjectMobile({
    focusedIndex,
    setFocusedIndex,
    array,
    isOpensourceProjects,
}: Props) {
    return (
        <div className="absolute top-16 left-0 bottom-0 right-0 z-50 flex flex-col w-full">
            {isOpensourceProjects ? (
                <div className="m-auto max-w-xl flex justify-center">
                    <Project project={array[0]} isMobile />
                </div>
            ) : (
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
            )}
            <div key={focusedIndex} className="flex pb-[0.1rem] my-2">
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
