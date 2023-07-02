import React from "react";
import IconSkill from "../../src/components/iconSkill";
import MediaBlock from "../../src/components/mediaBlock";
import * as ProjectData from "../../src/data/projectData";
import { TopSection } from "../../src/components/topsection";
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
    <div id="hobby-container">
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
        text={["About Me", "Enterprise Projects"]}
        url={["/about", "/enterprise"]}
      />
      <ul className="skillsIcons">
        <IconSkill
          index={0}
          alt="java_icon"
          src="images/java_icon.png"
        ></IconSkill>
        <IconSkill
          index={1}
          alt="react-logo"
          src="images/react-logo.png"
        ></IconSkill>
        <IconSkill
          index={2}
          alt="android_icon"
          src="images/android_sdk_icon.png"
        ></IconSkill>
        <IconSkill
          index={3}
          alt="kotlin_icon"
          src="images/kotlin_icon.png"
        ></IconSkill>
        <IconSkill
          index={4}
          alt="sql_icon"
          src="images/sql_icon.png"
        ></IconSkill>
        <IconSkill index={5} alt="git_icon" src="images/nextjs.png"></IconSkill>
      </ul>
      {/* {hobbyProjects} */}
      {/* </motion.div> */}
    </div>
  );
}
