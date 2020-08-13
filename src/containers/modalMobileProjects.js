import React from 'react'
import Modal from 'react-modal'
import IconSkill from "../components/iconSkill"
import ModalMediaBlock from '../components/modalMediaBlock'
import * as ProjectData from '../data/projectData'

export default class ModalMobileProjects extends React.Component{

    render(){

        const mobileProjects = ProjectData.mobileProjectData.map((project) =>
                <ModalMediaBlock 
                    projectName={ project.projectName }
                    floatSide={ project.floatSide }
                    githubLink={ project.githubLink }
                    description={ project.description }
                    video={ project.video }
                    language={ project.language }
                    tech={ project.tech }
                    videoClass={ project.videoClass }>
                </ModalMediaBlock>
        ) 

        return(
            <Modal 
                isOpen={ true }
                shouldCloseOnOverlayClick={ true }
                onRequestClose={ this.props.toggleOff }
                className={"modalContentProjects"}
                overlayClassName={"modalOverlayProjects"}>
                <div>
                    <span className="xButtons" onClick={ this.props.toggleOff }><a>&times;</a></span>
                        <div className="modalTopBlock">
                            <div>
                                <h2 className="modalHeader">Mobile Projects</h2>
                            </div>
                            <ul className="skillsIcons">
                                <IconSkill alt="java_icon" src="images/java_icon.png"></IconSkill>
                                <IconSkill alt="firebase_icon"  src="images/firebase_icon.png"></IconSkill>
                                <IconSkill alt="android_icon" src="images/android_sdk_icon.png"></IconSkill>
                                <IconSkill alt="kotlin_icon" src="images/kotlin_icon.png"></IconSkill>
                                <IconSkill alt="sql_icon" src="images/sql_icon.png"></IconSkill>
                                <IconSkill alt="git_icon" src="images/gitbash_icon.png"></IconSkill>
                            </ul>
                        </div>
                    { mobileProjects }
                </div>
            </Modal>
        )
    }
}