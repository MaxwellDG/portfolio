"use client"

import React, { useRef, useState } from "react";
import IconSkill from "../../src/components/iconSkill";
import * as ProjectData from "../../src/data/projectData";
import ModalMediaBlock from "../../src/components/mediaBlock";
import { TopSection } from "../../src/components/topSection";
import { motion } from "framer-motion";
import * as Framer from "../../src/data/animationVariants";
import { CameraControls, OrbitControls } from "@react-three/drei";
import "./styles.scss";
import { Canvas, MeshProps, ThreeElements } from "@react-three/fiber";
import { COLORS } from "../../src/theme";
import { Mesh } from "three";

const enterpriseProjects = ProjectData.enterpriseProjectData.map(
  (project, index) => (
    <ModalMediaBlock
      key={index}
      index={index}
      project={project}
      isEnterprise={true}
    />
  )
);

export default function EnterpriseProjects() {

  const meshRef = useRef<Mesh>()

  const rotate = (indexChange: number) => {
    if(meshRef?.current){
      meshRef.current.rotateY(indexChange);
    }
  }

  return (
    <div className="flex h-3/4 w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col">
      <TopSection
        sectionName="Enterprise Projects"
        text={["Skills", "Hobby Projects"]}
        url={["/skills", "/hobby"]}
      />
      <div className="h-full w-full flex">
        <div className="h-full w-full flex flex-2">
          <Canvas>
            <mesh
              ref={meshRef}
              visible 
              position={[0, 0, 0]} 
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
              // onClick={(event) => setActive(!active)}
            >
              <cylinderGeometry args={[3,3,8,6]} />
              <meshBasicMaterial color={COLORS['Autumn'].secondary} />
              <CameraControls makeDefault/>
            </mesh>
          </Canvas>
        </div>
        {/* <div className="w-1/4 flex h-full flex-col">
          <div onClick={() => rotate(-1)} data-key='65' className='key__button'>^</div>
          <div onClick={() => rotate(1)} data-key='65' className='key__button'>v</div>
        </div> */}
      </div>
    </div>
  );
}
