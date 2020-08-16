import React from 'react'
import Modal from 'react-modal'
import IconSkill from '../components/iconSkill'
import * as ProjectData from '../data/projectData'
import ModalMediaBlock from '../components/modalMediaBlock'

export default class ModalOtherProjects extends React.Component{
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
            <Modal 
                isOpen={ true }
                shouldCloseOnOverlayClick={ true }
                onRequestClose={ this.props.toggleOff }
                className={"modalContentProjects"}
                overlayClassName={"modalOverlayProjects"}>
                <div>
                    <span className="xButtons" onClick={ this.props.toggleOff }><a>&times;</a></span>
                        <div className="modalTopBlock">
                                    <h2 className="modalHeader">Other Projects</h2>
                                <ul className="skillsIcons">
                                    <IconSkill alt="icon_css" src="images/CSS3_icon.png"></IconSkill>
                                    <IconSkill alt="icon_java_other" src="images/java_icon.png"></IconSkill>
                                    <IconSkill alt="icon_python" src="images/Python_icon.ico"></IconSkill>
                                    <IconSkill alt="icon_html" src="images/HTML5_icon.png"></IconSkill>
                                </ul>
                        </div>
                        { otherProjects }
                </div>
            </Modal>
        )
    }
}