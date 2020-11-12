import React from 'react'
import IconSkill from '../components/iconSkill'
import * as ProjectData from '../data/projectData'
import ModalMediaBlock from '../components/mediaBlock'
import { TopSection } from '../components/topsection'

export default class DesktopProjects extends React.Component{

    render(){

        const otherProjects = ProjectData.otherProjectData.map((project) =>
        <ModalMediaBlock 
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
            <div className="page container">
                <TopSection sectionName="Desktop Projects" text={ ["About Me", "Mobile Projects", "Resume"] } url={ ["/about", "/mobile", "/resume"] } />
                    <div>
                        <ul className="skillsIcons">
                            <IconSkill alt="icon_css" src="images/CSS3_icon.png"></IconSkill>
                            <IconSkill alt="icon_python" src="images/Python_icon.ico"></IconSkill>
                            <IconSkill alt="icon_java_other" src="images/java_icon.png"></IconSkill>
                            <IconSkill alt="react-logo" src="images/react-logo.png"></IconSkill>
                            <IconSkill alt="mongoDB-logo" src="images/mongo-logo.png"></IconSkill>
                            <IconSkill alt="icon_html" src="images/HTML5_icon.png"></IconSkill>
                        </ul>
                    </div>
                    { otherProjects }
            </div>
        )
    }
}