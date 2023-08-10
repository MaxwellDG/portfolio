'use client';

import React, { useContext, useState } from 'react';
import useWindowDimensions from '../../src/hooks/useWindowDimensions';
import { Theme, useThemeContext } from '../../src/contexts/themeContext';
import { TopSection } from '../../src/components/topSection';
import skillsData, { SkillSet } from '../../src/data/skillsData';
import { ScreenContext } from '../../src/contexts/screenContext';
import LeftArrow from '../../public/icons/left-arrow.svg';
import Skills from '../../src/components/screens/skills';
import EnterpriseProjects from '../../src/components/screens/enterprise';
import SkillsSide from '../../src/components/screens/skills/side';
import HobbyProjects from '../../src/components/screens/hobby';
import './styles.scss';
import { SCREEN_TYPE } from '../../src/contexts/screenContext/types';
import { PopupModal } from '../../src/components/modals/skillsInfo';
import {
    enterpriseProjectData,
    hobbyProjectData,
} from '../../src/data/projectData';
import ProjectSide from '../../src/components/project/side';
import SkillsBottom from '../../src/components/screens/skills/bottom';
import ProjectBottom from '../../src/components/project/bottom';
import SkillsMobile from '../../src/components/screens/skills/mobile';
import ProjectMobile from '../../src/components/project/mobile';

export default function Main() {
    const screen = useContext(ScreenContext);
    const { width } = useWindowDimensions();

    const [focusedIndex, setFocusedIndex] = React.useState(0);
    // const [isModal, toggleModal] = React.useState(false);

    const maxIndex = React.useMemo(() => {
        switch (screen) {
            case SCREEN_TYPE.SKILLS:
                return skillsData.length - 1;
            case SCREEN_TYPE.HOBBY:
                return hobbyProjectData.length - 1;
            case SCREEN_TYPE.ENTERPRISE:
                return enterpriseProjectData.length - 1;
        }
    }, [screen]);

    const screenRoutes = React.useMemo(() => {
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
        switch (screen) {
            case SCREEN_TYPE.SKILLS:
                return (
                    <Skills
                        focusedIndex={focusedIndex}
                        setFocusedIndex={setFocusedIndex}
                    />
                );
            case SCREEN_TYPE.HOBBY:
                return <HobbyProjects focusedIndex={focusedIndex} />;
            case SCREEN_TYPE.ENTERPRISE:
                return <EnterpriseProjects focusedIndex={focusedIndex} />;
        }
    }, [screen, focusedIndex]);

    const getMainMobileComponent = React.useCallback(() => {
        switch (screen) {
            case SCREEN_TYPE.SKILLS:
                return (
                    <SkillsMobile
                        focusedIndex={focusedIndex}
                        setFocusedIndex={setFocusedIndex}
                    />
                );
            case SCREEN_TYPE.HOBBY:
                return (
                    <ProjectMobile
                        focusedIndex={focusedIndex}
                        setFocusedIndex={setFocusedIndex}
                        array={hobbyProjectData}
                    />
                );
            case SCREEN_TYPE.ENTERPRISE:
                return (
                    <ProjectMobile
                        focusedIndex={focusedIndex}
                        setFocusedIndex={setFocusedIndex}
                        array={enterpriseProjectData}
                    />
                );
        }
    }, [screen, focusedIndex]);

    const getSideComponent = React.useCallback(() => {
        switch (screen) {
            case SCREEN_TYPE.SKILLS:
                return (
                    skillsData[focusedIndex] && (
                        <SkillsSide focusedIndex={focusedIndex} />
                    )
                );
            case SCREEN_TYPE.HOBBY:
                return (
                    hobbyProjectData[focusedIndex] && (
                        <ProjectSide project={hobbyProjectData[focusedIndex]} />
                    )
                );
            case SCREEN_TYPE.ENTERPRISE:
                return (
                    enterpriseProjectData[focusedIndex] && (
                        <ProjectSide
                            project={enterpriseProjectData[focusedIndex]}
                        />
                    )
                );
        }
    }, [screen, focusedIndex]);

    const getBottomComponent = React.useCallback(() => {
        switch (screen) {
            case SCREEN_TYPE.SKILLS:
                return (
                    skillsData[focusedIndex] && (
                        <SkillsBottom focusedIndex={focusedIndex} />
                    )
                );
            case SCREEN_TYPE.HOBBY:
                return (
                    hobbyProjectData[focusedIndex] && (
                        <ProjectBottom
                            project={hobbyProjectData[focusedIndex]}
                        />
                    )
                );
            case SCREEN_TYPE.ENTERPRISE:
                return (
                    enterpriseProjectData[focusedIndex] && (
                        <ProjectBottom
                            project={enterpriseProjectData[focusedIndex]}
                        />
                    )
                );
        }
    }, [screen, focusedIndex]);

    React.useEffect(() => {
        function keyListenEvent(event: KeyboardEvent) {
            if (event.key === 'ArrowLeft') {
                handleArrowPress(-1, maxIndex);
            } else if (event.key === 'ArrowRight') {
                handleArrowPress(1, maxIndex);
            }
        }
        document.addEventListener('keydown', keyListenEvent);

        return () => {
            document.removeEventListener('keydown', keyListenEvent);
        };
    }, [maxIndex, focusedIndex]);

    React.useEffect(() => {
        setFocusedIndex(0);
    }, [screen]);

    const handleArrowPress = (num: number, max: number) => {
        if (focusedIndex === 0 && num === -1) {
            setFocusedIndex(max);
        } else if (focusedIndex === max && num === 1) {
            setFocusedIndex(0);
        } else {
            setFocusedIndex((prev) => prev + num);
        }
    };

    return (
        <div className="flex w-full h-full md:h-5/6 md:w-5/6 flex-col m-2">
            <TopSection sectionName={screen} routes={screenRoutes} />
            <div className="h-full w-full flex flex-col md:flex-row">
                <div className="flex flex-1 w-full relative">
                    <div className="absolute top-0 left-0 h-full w-full flex flex-1 justify-between z-0">
                        <img src="/images/box-left.jpeg" className="box-side" />
                        <div className="flex flex-1 box-center-repeat" />
                        <img
                            src="/images/box-right.jpeg"
                            className="box-side"
                        />
                    </div>
                    {width > 768 ? (
                        getMainComponent()
                    ) : (
                        <div className="flex w-full h-full relative">
                            {getMainMobileComponent()}
                        </div>
                    )}
                </div>

                {width > 768 ? (
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
                                onClick={() => handleArrowPress(-1, maxIndex)}
                                className="keyboard-button flex justify-center items-center"
                            >
                                <div className="rotate-[315deg]" style={{}}>
                                    <LeftArrow height={20} width={30} />
                                </div>
                            </div>
                            <div
                                onClick={() => handleArrowPress(1, maxIndex)}
                                className="keyboard-button flex justify-center items-center"
                            >
                                <div className="rotate-[135deg]" style={{}}>
                                    <LeftArrow height={20} width={30} />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className="flex h-24 mb-[58px] mt-2"
                        style={{
                            borderTop: '2px outset #AEAAAC',
                            borderRight: '2px outset #AEAAAC',
                            borderLeft: '2px outset #AEAAAC',
                            background:
                                'linear-gradient(135deg, #AEAAAC, #8C8681)',
                        }}
                    >
                        {getBottomComponent()}
                    </div>
                )}
            </div>
        </div>
    );
}