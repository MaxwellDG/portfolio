import React from 'react'
import IconSkill from "../components/iconSkill"
import MediaBlock from '../components/mediaBlock'
import * as ProjectData from '../data/projectData'
import { TopSection } from '../components/topsection'
import { motion } from 'framer-motion'
import * as Framer from '../data/animationVariants'

export default class MobileProjects extends React.Component{

    render(){

        const mobileProjects = ProjectData.mobileProjectData.map((project, index) =>
                <MediaBlock 
                    key={ index }
                    projectName={ project.projectName }
                    floatSide={ project.floatSide }
                    githubLink={ project.githubLink }
                    description={ project.description }
                    video={ project.video }
                    language={ project.language }
                    tech={ project.tech }
                    videoClass={ project.videoClass }
                    projectClass={ project.projectClass }>
                </MediaBlock>
        ) 

        return(
            <div id="mobile-container">
                <motion.div 
                    key="/mobile"
                    className="page" 
                    initial="initial" 
                    animate="animateTo" 
                    exit="exit" 
                    variants={ Framer.standardVariants }
                    transition={ Framer.AnimationTransitions } >
                    <TopSection sectionName="Mobile Projects" text={ ["About Me", "Desktop Projects"] } url={ ["/about", "/desktop"] } />
                        <ul className="skillsIcons">
                            <IconSkill index={ 0 } alt="java_icon" src="images/java_icon.png"></IconSkill>
                            <IconSkill index={ 1 } alt="react-logo" src="images/react-logo.png"></IconSkill>
                            <IconSkill index={ 2 } alt="android_icon" src="images/android_sdk_icon.png"></IconSkill>
                            <IconSkill index={ 3 } alt="kotlin_icon" src="images/kotlin_icon.png"></IconSkill>
                            <IconSkill index={ 4 } alt="sql_icon" src="images/sql_icon.png"></IconSkill>
                            <IconSkill index={ 5 } alt="git_icon" src="images/gitbash_icon.png"></IconSkill>
                        </ul>
                        { mobileProjects }
                </motion.div>
            </div>
        )
    }
}