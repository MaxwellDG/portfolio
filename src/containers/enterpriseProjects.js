import React from "react";
import IconSkill from "../components/iconSkill";
import * as ProjectData from "../data/projectData";
import ModalMediaBlock from "../components/mediaBlock";
import { TopSection } from "../components/topsection";
import { motion } from "framer-motion";
import * as Framer from "../data/animationVariants";

export default class EnterpriseProjects extends React.Component {
  render() {
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
              src="images/HTML5_icon.png"
            ></IconSkill>
          </ul>
        </div>
        {enterpriseProjects}
      </motion.div>
    );
  }
}
