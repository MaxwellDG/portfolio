import React from "react";
import IconSkill from "../../src/components/iconSkill";
import * as ProjectData from "../../src/data/projectData";
import ModalMediaBlock from "../../src/components/mediaBlock";
import { TopSection } from "../../src/components/topsection";
import { motion } from "framer-motion";
import * as Framer from "../../src/data/animationVariants";

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
  return (
    <motion.div
      key="/enterprise"
      className="page container"
      initial="initial"
      animate="animateTo"
      exit="exit"
      variants={Framer.standardVariants}
      transition={Framer.AnimationTransitions}
    >
      <TopSection
        sectionName="Enterprise Projects"
        text={["About Me", "Hobby Projects"]}
        url={["/about", "/hobby"]}
      />
      <div>
        <ul className="skillsIcons">
          <IconSkill
            index={0}
            alt="icon_css"
            src="images/CSS3_icon.png"
          ></IconSkill>
          <IconSkill
            index={1}
            alt="icon_python"
            src="images/Python_icon.ico"
          ></IconSkill>
          <IconSkill
            index={3}
            alt="react-logo"
            src="images/react-logo.png"
          ></IconSkill>
          <IconSkill
            index={4}
            alt="vue-logo"
            src="images/vue-logo.png"
          ></IconSkill>
          <IconSkill
            index={2}
            alt="icon_java_other"
            src="images/java_icon.png"
          ></IconSkill>
          <IconSkill
            index={5}
            alt="icon_html"
            src="images/nestjs.png"
          ></IconSkill>
        </ul>
      </div>
      {enterpriseProjects}
    </motion.div>
  );
}
