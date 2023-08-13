'use client';

import React, { useContext } from 'react';
import ProjectBottom from '../../components/project/bottom';
import ProjectMobile from '../../components/project/mobile';
import ProjectSide from '../../components/project/side';
import EnterpriseProjects from '../../components/screens/enterprise';
import HobbyProjects from '../../components/screens/hobby';
import Skills from '../../components/screens/skills';
import SkillsBottom from '../../components/screens/skills/bottom';
import SkillsMobile from '../../components/screens/skills/mobile';
import SkillsSide from '../../components/screens/skills/side';
import { TopSection } from '../../components/topSection';
import { ScreenContext } from '../../contexts/screenContext';
import { SCREEN_TYPE } from '../../contexts/screenContext/types';
import {
    enterpriseProjectData,
    hobbyProjectData,
} from '../../data/projectData';
import skillsData from '../../data/skillsData';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import LeftArrow from '../../public/icons/left-arrow.svg';
import './styles.scss';

export default function Page() {
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
        <div className="flex flex-1 justify-center items-center">
            <div className="flex w-full h-full lg:h-5/6 lg:w-5/6 flex-col m-2">
                <TopSection sectionName={screen} routes={screenRoutes} />
                <div className="h-full w-full flex flex-col lg:flex-row">
                    <div className="flex flex-1 w-full relative">
                        <div className="absolute top-2 lg:top-0 left-0 pb-2 lg:pb-0 h-full w-full flex flex-1 z-0 justify-center">
                            {width >= 1024 ? (
                                <>
                                    <img
                                        src="/images/box-left.jpeg"
                                        className="box-side"
                                    />
                                    <div className="flex flex-1 box-center-repeat" />
                                    <img
                                        src="/images/box-right.jpeg"
                                        className="box-side"
                                    />
                                </>
                            ) : (
                                <img src="/images/black-box.jpg" />
                            )}
                        </div>
                        {width >= 1024 ? (
                            getMainComponent()
                        ) : (
                            <div className="flex w-full h-full relative">
                                {getMainMobileComponent()}
                            </div>
                        )}
                    </div>

                    {width >= 1024 ? (
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
                            <div className="w-full flex">
                                <div
                                    onClick={() =>
                                        handleArrowPress(-1, maxIndex)
                                    }
                                    className="keyboard-button flex justify-center items-center"
                                >
                                    <div className="rotate-[315deg]" style={{}}>
                                        <LeftArrow height={20} width={30} />
                                    </div>
                                </div>
                                <div
                                    onClick={() =>
                                        handleArrowPress(1, maxIndex)
                                    }
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
                            className="flex h-24 mb-[52px] mt-2"
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
        </div>
    );
}
