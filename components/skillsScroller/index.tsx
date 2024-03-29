import React, { DetailedHTMLProps, HTMLAttributes, LegacyRef } from 'react';
import iconsHashmap from '../../data/iconsHashmap';
import skillsData from '../../data/skillsData';

type Props = {
    skills: string[];
};

export default function SkillsScroller({ skills }: Props) {
    const animationRef: React.RefObject<HTMLElement> = React.useRef();
    const sliderRef: React.RefObject<HTMLElement> = React.useRef();
    const [isDown, toggleDown] = React.useState(false);
    const [startX, setStartX] = React.useState(0);
    const [scrollLeft, setScrollLeft] = React.useState(0);

    function sliderMouseDown(e) {
        if (sliderRef.current) {
            if (animationRef.current) {
                animationRef.current.style.animationPlayState = 'paused';
            }
            toggleDown(true);
            sliderRef.current.classList.add('active-slider');
            setStartX(e.pageX - sliderRef.current.offsetLeft);
            setScrollLeft(sliderRef.current.scrollLeft);
        }
    }

    function sliderMouseLeave() {
        if (sliderRef.current) {
            if (animationRef.current) {
                animationRef.current.style.animationPlayState = 'running';
            }
            toggleDown(false);
            sliderRef.current.classList.remove('active-slider');
        }
    }

    function sliderMouseUp() {
        if (sliderRef.current) {
            if (animationRef.current) {
                animationRef.current.style.animationPlayState = 'running';
            }
            toggleDown(false);
            sliderRef.current.classList.remove('active-slider');
        }
    }

    function sliderMouseMove(e) {
        if (!isDown) return;
        if (sliderRef.current) {
            e.preventDefault();
            const x = e.pageX - sliderRef.current.offsetLeft;
            const walk = (x - startX) * 1; //scroll-fast
            sliderRef.current.scrollLeft = scrollLeft - walk;
        }
    }

    return (
        <div className="flex flex-1 overflow-hidden bg-[rgba(0,0,0,0.2)] border-t border-b border-t-[#8C8681] border-b-[#8C8681] justify-center">
            <div
                ref={sliderRef as LegacyRef<HTMLDivElement>}
                onMouseDown={sliderMouseDown}
                onMouseLeave={sliderMouseLeave}
                onMouseUp={sliderMouseUp}
                onMouseMove={sliderMouseMove}
                className={`${
                    isDown ? 'cursor-grabbing' : 'cursor-pointer'
                } overflow-x-auto skills-scroll py-2 mx-2`}
            >
                <div
                    // ref={animationRef as LegacyRef<HTMLDivElement>}
                    // className={`flex flex-nowrap flex-1 p-2 skills-marquee pl-[100%]`}
                    className={`flex flex-nowrap flex-1`}
                >
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="flex items-center my-1 mr-3 inline-block "
                        >
                            <div className="h-6 w-6 flex justify-center items-center">
                                <img
                                    src={`/images/${
                                        iconsHashmap[skill.replace(' ', '')]
                                    }`}
                                />
                            </div>
                            <p className="font-extralight text-lg text-white whitespace-nowrap ml-1">
                                {skill}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
