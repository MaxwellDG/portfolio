import React from 'react'
import IconSkill from '../components/iconSkill'
import * as ProjectData from '../data/projectData'
import ModalMediaBlock from '../components/mediaBlock'
import { TopSection } from '../components/topsection'
import { motion } from 'framer-motion'
import * as Framer from '../data/animationVariants'

export default class DesktopProjects extends React.Component{

    render(){

        const otherProjects = ProjectData.otherProjectData.map((project, index) =>
        <ModalMediaBlock 
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
        </ModalMediaBlock>
) 

        return(
            <motion.div 
                key="/desktop"
                className="page container" 
                initial="initial" 
                animate="animateTo" 
                exit="exit"
                variants={ Framer.standardVariants }
                transition={ Framer.AnimationTransitions } >
                <TopSection sectionName="Desktop Projects" text={ ["About Me", "Mobile Projects"] } url={ ["/about", "/mobile"] } />
                    <div>
                        <ul className="skillsIcons">
                            <IconSkill index={ 0 } alt="icon_css" src="images/CSS3_icon.png"></IconSkill>
                            <IconSkill index={ 1 } alt="icon_python" src="images/Python_icon.ico"></IconSkill>
                            <IconSkill index={ 2 } alt="icon_java_other" src="images/java_icon.png"></IconSkill>
                            <IconSkill index={ 3 } alt="react-logo" src="images/react-logo.png"></IconSkill>
                            <IconSkill index={ 4 } alt="mongoDB-logo" src="images/mongo-logo.png"></IconSkill>
                            <IconSkill index={ 5 } alt="icon_html" src="images/HTML5_icon.png"></IconSkill>
                        </ul>
                    </div>
                    { otherProjects }
            </motion.div>
        )
    }
}