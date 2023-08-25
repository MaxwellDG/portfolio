import skillsData, { SkillSet } from '../../../../data/skillsData';
import { Carousel } from '../../../carousel';
import SkillsBottom from '../bottom';
import '../styles.scss';
import Frontend from '../../../../public/icons/frontend.svg';
import Backend from '../../../../public/icons/backend.svg';
import Web3 from '../../../../public/icons/web3.svg';
import Management from '../../../../public/icons/management.svg';
import Graphic from '../../../../public/icons/graphic.svg';
import React from 'react';

type Props = {
    focusedIndex: number;
    setFocusedIndex: (num: number) => void;
};

// ** The array has its order manipulated here in order to get the css transition animation offset correctly ** //

export default function SkillsMobile({ focusedIndex, setFocusedIndex }: Props) {
    const icon = React.useCallback(
        (i: number) => {
            switch (i) {
                case 1:
                    return (
                        <Frontend
                            height={75}
                            width={75}
                            fill={'#536976'}
                        />
                    );
                case 2:
                    return (
                        <Backend
                            height={75}
                            width={75}
                            fill={'#536976'}
                        />
                    );
                case 3:
                    return (
                        <Web3
                            height={75}
                            width={75}
                            fill={'#536976'}
                        />
                    );
                case 4:
                    return (
                        <Management
                            height={75}
                            width={75}
                            stroke={'#536976'}
                        />
                    );
                case 0:
                    return (
                        <Graphic
                            height={75}
                            width={75}
                            fill={'#536976'}
                        />
                    );
            }
        },
        [focusedIndex]
    );

    return (
        <div className="absolute top-0 left-0 bottom-0 right-0 z-50 flex flex-col flex-1 w-full">
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
                            className="flex flex-col cursor-pointer m-4 rounded h-36 w-36 p-4 justify-center items-center bg-transparentContainer"
                            style={{
                                border: '3px outset #9C6A49',
                            }}
                        >
                            <div className="h-2/3">
                                <p className="text-white text-center font-extralight">
                                    {skill.name}
                                </p>
                            </div>
                            {icon(i)}
                        </div>
                    </div>
                ))}
            </Carousel>
            <div
                className="flex h-24"
                style={{
                    border: '2px outset #AEAAAC',
                    background: 'linear-gradient(135deg, #AEAAAC, #8C8681)',
                }}
            >
                {skillsData[focusedIndex] && (
                    <SkillsBottom focusedIndex={focusedIndex} />
                )}
            </div>
        </div>
    );
}
