'use client';

import React, { useContext } from 'react';
import ProjectMobile from '../../components/project/mobile';
import ProjectSide from '../../components/project/side';
import Skills from '../../components/screens/skills';
import SkillsMobile from '../../components/screens/skills/mobile';
import SkillsSide from '../../components/screens/skills/side';
import { TopSection } from '../../components/topSection';
import { ScreenContext } from '../../contexts/screenContext';
import { SCREEN_TYPE } from '../../contexts/screenContext/types';
import {
    enterpriseProjectData,
    hobbyProjectData,
    opensourceData,
} from '../../data/projectData';
import skillsData from '../../data/skillsData';
import LeftArrow from '../../public/icons/left-arrow.svg';
import './styles.scss';
import Projects from '../../components/screens/projects';

export const PROJECT_DATASETS = {
    [SCREEN_TYPE.SKILLS]: skillsData,
    [SCREEN_TYPE.HOBBY]: hobbyProjectData,
    [SCREEN_TYPE.ENTERPRISE]: enterpriseProjectData,
    [SCREEN_TYPE.OPENSOURCE]: opensourceData,
};

export default function Page() {
    const screen = useContext(ScreenContext);

    const [focusedIndex, setFocusedIndex] = React.useState(0);

    const maxIndex = React.useMemo(
        () => PROJECT_DATASETS[screen].length - 1,
        [screen]
    );

    const screenRoutes = React.useMemo(
        () =>
            Object.keys(PROJECT_DATASETS).filter(
                (screenType) => screenType !== screen
            ),
        [screen, focusedIndex]
    );

    const getMainComponent = React.useCallback(() => {
        switch (screen) {
            case SCREEN_TYPE.SKILLS:
                return (
                    <Skills
                        focusedIndex={focusedIndex}
                        setFocusedIndex={setFocusedIndex}
                    />
                );
            // enterprise, hobby, or opensource projects
            default:
                return (
                    <Projects
                        focusedIndex={focusedIndex}
                        data={PROJECT_DATASETS[screen]}
                    />
                );
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
            // enterprise, hobby, or opensource projects
            default:
                return (
                    <ProjectMobile
                        focusedIndex={focusedIndex}
                        setFocusedIndex={setFocusedIndex}
                        array={PROJECT_DATASETS[screen]}
                        isOpensourceProjects={screen === SCREEN_TYPE.OPENSOURCE}
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
            // enterprise, hobby, or opensource projects
            default:
                return (
                    PROJECT_DATASETS[screen][focusedIndex] && (
                        <ProjectSide
                            project={PROJECT_DATASETS[screen][focusedIndex]}
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
        <div className="flex flex-1 lg:h-full lg:w-full justify-center">
            <div className="flex flex-1 lg:flex-initial w-full flex-col lg:full lg:max-w-6xl lg:m-auto lg:p-2">
                <TopSection
                    sectionName={screen}
                    routes={screenRoutes as SCREEN_TYPE[]}
                />
                <div
                    className="flex flex-1 lg:flex-auto lg:h-[600px] flex-col lg:flex-row"
                    style={{ boxShadow: '3px 10px 10px rgba(0,0,0,0.3)' }}
                >
                    <div className="flex flex-1 w-full relative overflow-y-auto lg:overflow-y-visible">
                        <div className="hidden lg:flex absolute top-2 lg:top-0 left-0 pb-2 mb-2 lg:pb-0 lg:mb-0 lg:h-full w-full flex-1 z-0 justify-center ">
                            <img
                                src="/images/box-left.jpeg"
                                className="box-side"
                            />
                            <img
                                src="/images/box-center.jpeg"
                                className="box-center"
                            />
                            <img
                                src="/images/box-right.jpeg"
                                className="box-side"
                            />
                        </div>
                        <div className="hidden lg:flex flex-1">
                            {getMainComponent()}
                        </div>
                        <div className="flex flex-1 lg:hidden">
                            {getMainMobileComponent()}
                        </div>
                    </div>
                    <div
                        className="hidden lg:flex flex-col w-[215px]"
                        style={{
                            borderTop: '2px outset #AEAAAC',
                            borderRight: '2px outset #AEAAAC',
                            borderBottom: '2px outset #AEAAAC',
                            background:
                                'linear-gradient(135deg, #AEAAAC, #8C8681)',
                        }}
                    >
                        {getSideComponent()}
                        {screen !== SCREEN_TYPE.OPENSOURCE && (
                            <div className="w-full flex">
                                <div
                                    onClick={() =>
                                        handleArrowPress(-1, maxIndex)
                                    }
                                    className="keyboard-button flex justify-center items-center"
                                >
                                    <div>
                                        <LeftArrow
                                            height={30}
                                            width={30}
                                            fill={'black'}
                                        />
                                    </div>
                                </div>
                                <div
                                    onClick={() =>
                                        handleArrowPress(1, maxIndex)
                                    }
                                    className="keyboard-button flex justify-center items-center"
                                >
                                    <div className="rotate-[180deg]" style={{}}>
                                        <LeftArrow
                                            height={30}
                                            width={30}
                                            fill={'black'}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
