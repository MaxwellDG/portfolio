import React from "react";
import IconSkill from "../../src/components/iconSkill";
import MediaBlock from "../../src/components/mediaBlock";
import * as ProjectData from "../../src/data/projectData";
import { TopSection } from "../../src/components/topSection";
// import { motion } from "framer-motion";
// import * as Framer from "../../src/data/animationVariants";

const hobbyProjects = ProjectData.hobbyProjectData.map((project, index) => (
  <MediaBlock
    key={index}
    index={index}
    project={project}
    isEnterprise={false}
  />
));

export default function HobbyProjects() {
  return (
    <div className="flex h-3/4 w-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col">
      {/* <motion.div
          key="/hobby"
          className="page"
          initial="initial"
          animate="animateTo"
          exit="exit"
          variants={Framer.standardVariants}
          transition={Framer.AnimationTransitions}
        > */}
      <TopSection
        sectionName="Hobby Projects"
        text={["Skills", "Enterprise Projects"]}
        url={["/skills", "/enterprise"]}
      />
      {hobbyProjects}
      {/* </motion.div> */}
    </div>
  );
}
