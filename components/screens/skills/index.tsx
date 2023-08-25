import React from 'react';
import skillsData, { SkillSet } from '../../../data/skillsData';
import './styles.scss';
import Frontend from '../../../public/icons/frontend.svg';
import Backend from '../../../public/icons/backend.svg';
import Web3 from '../../../public/icons/web3.svg';
import Management from '../../../public/icons/management.svg';
import Graphic from '../../../public/icons/graphic.svg';

type Props = {
    focusedIndex: number;
    setFocusedIndex: (num: number) => void;
};

export default function Skills({ focusedIndex, setFocusedIndex }: Props) {
    const topIcon = React.useCallback(
        (i: number) => {
            switch (i) {
                case 0:
                    return (
                        <Frontend
                            height={75}
                            width={75}
                            fill={focusedIndex === i ? '#536976' : '#292e49'}
                        />
                    );
                case 1:
                    return (
                        <Backend
                            height={75}
                            width={75}
                            fill={focusedIndex === i ? '#536976' : '#292e49'}
                        />
                    );
                case 2:
                    return (
                        <Web3
                            height={75}
                            width={75}
                            fill={focusedIndex === i ? '#536976' : '#292e49'}
                        />
                    );
            }
        },
        [focusedIndex]
    );

    const bottomIcon = React.useCallback(
        (i: number) => {
            switch (i) {
                case 0:
                    return (
                        <Management
                            height={75}
                            width={75}
                            stroke={
                                focusedIndex === i + 3 ? '#536976' : '#292e49'
                            }
                        />
                    );
                case 1:
                    return (
                        <Graphic
                            height={75}
                            width={75}
                            fill={
                                focusedIndex === i + 3 ? '#536976' : '#292e49'
                            }
                        />
                    );
            }
        },
        [focusedIndex]
    );

    return (
        <div className="m-12 flex flex-1 flex-col justify-evenly z-10">
            <div className="flex w-full justify-center">
                {[skillsData[0], skillsData[1], skillsData[2]].map(
                    (skill: SkillSet, i: number) => (
                        <div
                            key={i}
                            onClick={() => setFocusedIndex(i)}
                            className="hover:bg-[rgba(0,0,0,0.5)] cursor-pointer m-4 rounded h-36 w-36 p-4 flex flex-col justify-center items-center bg-transparentContainer"
                            style={{
                                border:
                                    focusedIndex === i
                                        ? '3px outset #9C6A49'
                                        : '3px outset rgba(0,0,0,0.3)',
                            }}
                        >
                            <div className="h-2/3">
                                <p className="text-white text-center font-extralight">
                                    {skill.name}
                                </p>
                            </div>
                            {topIcon(i)}
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
                            className="hover:bg-[rgba(0,0,0,0.5)] cursor-pointer m-4 rounded h-36 w-36 p-4 flex flex-col justify-center items-center bg-transparentContainer"
                            style={{
                                border:
                                    focusedIndex === i + 3
                                        ? '3px outset #9C6A49'
                                        : '3px outset rgba(0,0,0,0.3)',
                            }}
                        >
                            <div className="h-2/3">
                                <p className="text-white text-center font-extralight">
                                    {skill.name}
                                </p>
                            </div>
                            {bottomIcon(i)}
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
