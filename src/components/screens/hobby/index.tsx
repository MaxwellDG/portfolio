import React from 'react';
import skillsData, { SkillSet } from '../../../data/skillsData';
import './styles.scss';

type Props = {
    focusedIndex: number;
    setFocusedIndex: (num: number) => void;
}

export default function HobbyProjects({focusedIndex, setFocusedIndex}: Props) {
    return (
        <div className="m-12 flex flex-1 flex-col justify-evenly z-10">
            <div className="flex w-full justify-center">
                {[skillsData[0], skillsData[1], skillsData[2]].map(
                    (skill: SkillSet, i: number) => (
                        <div
                            key={i}
                            onClick={() => setFocusedIndex(i)}
                            className="cursor-pointer m-4 rounded h-32 w-32 p-4 flex flex-row justify-center items-center bg-transparentContainer"
                            style={{
                                border:
                                    focusedIndex === i
                                        ? '3px outset #9C6A49'
                                        : '3px outset rgba(0,0,0,0.3)',
                            }}
                        >
                            <p className="text-white text-center font-extralight">
                                {skill.name}
                            </p>
                        </div>
                    )
                )}
            </div>
            <div className="flex w-full justify-center">
                {[skillsData[3], skillsData[4]].map(
                    (skill: SkillSet, i: number) => (
                        <div
                            key={i + 3}
                            onClick={() => setFocusedIndex(i + 3)}
                            className="cursor-pointer m-4 rounded h-32 w-32 p-4 flex flex-row justify-center items-center bg-transparentContainer"
                            style={{
                                border:
                                    focusedIndex === i + 3
                                        ? '3px outset #9C6A49'
                                        : '3px outset rgba(0,0,0,0.3)',
                            }}
                        >
                            <p className="text-white text-center font-extralight">
                                {skill.name}
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
