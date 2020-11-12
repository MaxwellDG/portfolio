import React from 'react'
import IconSkill from "../components/iconSkill"
import MediaBlock from '../components/mediaBlock'
import * as ProjectData from '../data/projectData'
import { TopSection } from '../components/topsection'

export default class MobileProjects extends React.Component{

    render(){

        const mobileProjects = ProjectData.mobileProjectData.map((project) =>
                <MediaBlock 
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
            <div className="page">
                <TopSection sectionName="Mobile Projects" text={ ["About Me", "Desktop Projects", "Resume"] } url={ ["/about", "/desktop", "/resume"] } />
                    <ul className="skillsIcons">
                        <IconSkill alt="java_icon" src="images/java_icon.png"></IconSkill>
                        <IconSkill alt="react-logo" src="images/react-logo.png"></IconSkill>
                        <IconSkill alt="android_icon" src="images/android_sdk_icon.png"></IconSkill>
                        <IconSkill alt="kotlin_icon" src="images/kotlin_icon.png"></IconSkill>
                        <IconSkill alt="sql_icon" src="images/sql_icon.png"></IconSkill>
                        <IconSkill alt="git_icon" src="images/gitbash_icon.png"></IconSkill>
                    </ul>
                    { mobileProjects }
            </div>
        )
    }
}