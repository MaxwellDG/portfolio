"use client"

import React, { Suspense } from "react";
import { extend } from '@react-three/fiber'
import { TopSection } from "../../src/components/topSection";
import { motion } from "framer-motion";
import * as Framer from "../../src/data/animationVariants";
import { Theme, useThemeContext } from "../../src/components/themeProvider";
import { COLORS } from "../../src/theme";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import SkillsCube from "../../src/components/skillsCube";
import SkillsData from "../../src/data/skillsData";
import useWindowDimensions from "../../src/hooks/useWindowDimensions";
import { PopupModal } from "../../src/components/popupModal";
import SkillsetBall from "../../src/components/three/skillsetBall";
import CanvasLoader from "../../src/components/three/loader";


export default function Skills() {

  const theme: Theme = useThemeContext();
  const { width, height } = useWindowDimensions();

  const [focusedSkill, setFocusedSkill] = React.useState(SkillsData[0]);
  const [isModal, toggleModal] = React.useState(false);


  return (
    // <motion.div
    //     key="/about"
    //     id="about-container"
    //     className="page"
    //     initial="initial"
    //     animate="animateTo"
    //     exit="exit"
    //     variants={ Framer.standardVariants }
    //     transition={ Framer.AnimationTransitions } >
    <div className="flex h-3/4 w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col">
      <TopSection
        sectionName="Skills"
        text={["Hobby Projects", "Enterprise Projects"]}
        url={["/hobby", "/enterprise"]}
      />
      <div 
        className="h-full w-full flex"
      >
        <Canvas frameloop="demand" gl={{preserveDrawingBuffer: true}}>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <SkillsetBall skillset={focusedSkill}/>
          </Suspense>
          <Preload all/>
        </Canvas>

        {/* todo make the platform raised up a little bit. Hard edges */}

        {width > 700 &&
          <div className="h-full p-2 flex flex-col">
            <h1>{focusedSkill.name}</h1>
            {focusedSkill.skills.map(skill => 
              <div className="flex items-center gap-x-3">
                <img src={skill.icon} className="h-4 w-4"/>
                <p>&nbsp;-&nbsp;{skill.name}</p>  
              </div>
            )}
          </div>
        }
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
            {focusedSkill.skills.map(skill => 
              <div className="flex items-center gap-x-3">
                <img src={skill.icon} className="h-4 w-4"/>
                <p>&nbsp;-&nbsp;{skill.name}</p>  
              </div>
            )}
          </div>
        </div>
      </PopupModal>
    </div>
    // </motion.div>
  );
}
