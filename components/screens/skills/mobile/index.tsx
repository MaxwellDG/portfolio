import skillsData, { SkillSet } from '../../../../data/skillsData';
import { Carousel } from '../../../carousel';
import '../styles.scss';

type Props = {
    focusedIndex: number;
    setFocusedIndex: (num: number) => void;
};

// ** The array has its order manipulated here in order to get the css transition animation offset correctly ** //

export default function SkillsMobile({ focusedIndex, setFocusedIndex }: Props) {
    return (
        <div className="absolute top-0 left-0 z-50 h-full w-full">
            <Carousel
                focusedIndex={focusedIndex}
                setFocusedIndex={setFocusedIndex}
            >
                {[
                    skillsData[skillsData.length - 1],
                    ...skillsData.slice(0, skillsData.length - 1),
                ].map((skill: SkillSet, i: number) => (
                    <div
                        key={skill.name}
                        className="w-full flex justify-center"
                    >
                        <div
                            className="flex cursor-pointer m-4 rounded h-32 w-32 p-4 justify-center items-center bg-transparentContainer"
                            style={{
                                border: '3px outset #9C6A49',
                            }}
                        >
                            <p className="text-white text-center font-extralight">
                                {skill.name}
                            </p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
