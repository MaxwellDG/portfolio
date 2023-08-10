import React from 'react';
import skillsData, { SkillSet } from '../../../../data/skillsData';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import LeftArrow from '../../../../../public/icons/left-arrow.svg';
import '../styles.scss';
import { useSwipeable } from 'react-swipeable';
import { Carousel } from '../../../carousel';

type Props = {
    focusedIndex: number;
    setFocusedIndex: (num: number) => void;
};

// todo maybe have absolute div at bottom for quick click? With hover showing name of project

export default function SkillsMobile({ focusedIndex, setFocusedIndex }: Props) {
    return (
        <div className="absolute top-0 left-0 z-50 h-full w-full">
            <Carousel
                focusedIndex={focusedIndex}
                setFocusedIndex={setFocusedIndex}
            >
                {skillsData.map((skill: SkillSet, i: number) => (
                    <div className="w-full flex justify-center">
                        <div
                            key={skill.name}
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
