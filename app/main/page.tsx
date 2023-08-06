"use client"

import React, { useContext, useState } from 'react';
import useWindowDimensions from '../../src/hooks/useWindowDimensions';
import { Theme, useThemeContext } from '../../src/contexts/themeContext';
import { TopSection } from '../../src/components/topSection';
import skillsData, { SkillSet } from '../../src/data/skillsData';
import { PopupModal } from '../../src/components/popupModal';
import {
    ScreenContext,
} from '../../src/contexts/screenContext';
import LeftArrow from '../../public/icons/left-arrow.svg';
import Skills from '../../src/components/screens/skills';
import EnterpriseProjects from '../../src/components/screens/enterprise';
import SkillsSide from '../../src/components/screens/skills/side';
import EnterpriseSide from '../../src/components/screens/enterprise/side';
import HobbySide from '../../src/components/screens/hobby/side';
import HobbyProjects from '../../src/components/screens/hobby';
import './styles.scss';
import { SCREEN_TYPE } from '../../src/contexts/screenContext/types';

export default function Main() {
    const screen = useContext(ScreenContext);
    const { width, height } = useWindowDimensions();

    const [focusedIndex, setFocusedIndex] = React.useState(0);
    const [isModal, toggleModal] = React.useState(false);

    React.useEffect(() => {
        function keyListenEvent(event: KeyboardEvent) {
            if (event.key === 'ArrowLeft') {
                handleArrowPress(-1);
            } else if (event.key === 'ArrowRight') {
                handleArrowPress(1);
            }
        }
        document.addEventListener('keydown', keyListenEvent);

        return () => {
            document.removeEventListener('keydown', keyListenEvent);
        };
    }, [focusedIndex]);

    React.useEffect(() => {
        setFocusedIndex(0);
    }, [screen]);

    const handleArrowPress = (num: number) => {
        if (focusedIndex === 0 && num === -1) {
            setFocusedIndex(4);
        } else if (focusedIndex === 4 && num === 1) {
            setFocusedIndex(0);
        } else {
            setFocusedIndex((prev) => prev + num);
        }
    };

    const getScreenRoutes = React.useMemo(() => {
        switch (screen) {
            case SCREEN_TYPE.SKILLS:
                return [SCREEN_TYPE.HOBBY, SCREEN_TYPE.ENTERPRISE];
            case SCREEN_TYPE.HOBBY:
                return [SCREEN_TYPE.SKILLS, SCREEN_TYPE.ENTERPRISE];
            case SCREEN_TYPE.ENTERPRISE:
                return [SCREEN_TYPE.SKILLS, SCREEN_TYPE.HOBBY];
        }
    }, [screen, focusedIndex]);

    const getMainComponent = React.useCallback(() => {
        console.log("Screesn changed to : ", screen);
        switch (screen) {
            case SCREEN_TYPE.SKILLS:
                return <Skills focusedIndex={focusedIndex} setFocusedIndex={setFocusedIndex}/>
            case SCREEN_TYPE.HOBBY:
                return <HobbyProjects focusedIndex={focusedIndex} setFocusedIndex={setFocusedIndex} />
            case SCREEN_TYPE.ENTERPRISE:
                return <EnterpriseProjects focusedIndex={focusedIndex} setFocusedIndex={setFocusedIndex}/>
        }
    }, [screen, focusedIndex])

    const getSideComponent = React.useCallback(() => {
        switch (screen) {
            case SCREEN_TYPE.SKILLS:
                return <SkillsSide focusedIndex={focusedIndex} />
            case SCREEN_TYPE.HOBBY:
                return <HobbySide focusedIndex={focusedIndex} />
            case SCREEN_TYPE.ENTERPRISE:
                return <EnterpriseSide focusedIndex={focusedIndex} />
        }
    }, [screen, focusedIndex])

    return (
        <div className="flex h-5/6 w-5/6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col">
            <TopSection sectionName={screen} routes={getScreenRoutes} />
            <div className="h-full w-full flex">
                <div className="flex flex-1 w-full relative">
                    <div className="absolute top-0 left-0 h-full w-full flex flex-1 justify-between z-0">
                        <img src="/images/box-left.jpeg" className="box-side" />
                        <div className="flex flex-1 box-center-repeat" />
                        <img
                            src="/images/box-right.jpeg"
                            className="box-side"
                        />
                    </div>
                    {getMainComponent()}
                </div>
                    
                {width > 700 && (
                    <div
                        className="h-full flex flex-col w-[200px]"
                        style={{
                            border: '2px outset #AEAAAC',
                            // borderTop: '2px outset #AEAAAC',
                            // borderRight: '2px outset #AEAAAC',
                            // borderBottom: '2px outset #AEAAAC',
                            background:
                                'linear-gradient(135deg, #AEAAAC, #8C8681)',
                        }}
                    >
                        {getSideComponent()}
                        <div className="w-full flex ">
                            <div
                                onClick={() => handleArrowPress(-1)}
                                className="keyboard-button flex justify-center items-center"
                            >
                                <div className="rotate-[315deg]" style={{}}>
                                    <LeftArrow height={20} width={30} />
                                </div>
                            </div>
                            <div
                                onClick={() => handleArrowPress(1)}
                                className="keyboard-button flex justify-center items-center"
                            >
                                <div className="rotate-[135deg]" style={{}}>
                                    <LeftArrow height={20} width={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <PopupModal
                isShowing={isModal}
                closeModal={() => toggleModal(false)}
            >
                <div className="h-full w-full flex flex-col">
                    <div className="flex justify-end">
                        <div onClick={() => toggleModal(false)}>
                            <p>X</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {skillsData[focusedIndex].skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex items-center gap-x-3"
                            >
                                <img src={skill.icon} className="h-4 w-4" />
                                <p>&nbsp;-&nbsp;{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </PopupModal>
        </div>
    );
}
