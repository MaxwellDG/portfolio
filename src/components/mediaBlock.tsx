import React from 'react'
import MultiMedia from './media/multimedia';
import GithubLink from './media/githubLink';
import Modal from './modal';
import MediaContent from "./media/mediaContent"
import { Project } from '../data/projectData';

interface Props {
    project: Project,
    isEnterprise: boolean
}

export default function MediaBlock({project, isEnterprise}: Props){

    const [isShowingMediaModal, toggleMediaModal] = React.useState(false);

    const { 
        name, 
        github,
        links, 
        linkTexts, 
        desc, 
        video, 
        image, 
        languages, 
        tech, 
    } = project;
    const floatsLeft = this.props.index % 2 === 0;

        return(
            <div style={{position: 'relative'}}>
                <Modal 
                    closeModal={() => toggleMediaModal(!isShowingMediaModal)} 
                    isShowing={isShowingMediaModal} 
                    contentDims={{width: '70%', height: '70%'}}
                >
                    <MediaContent image={image} video={video} />
                </Modal>
                <div className={ isEnterprise ? "enterpriseProjectSection" : "hobbyProjectSection" }>
                    {floatsLeft ? 
                        <MultiMedia 
                            video={video} 
                            image={image} 
                            expandMedia={() => toggleMediaModal(!isShowingMediaModal)}
                        /> 
                    : 
                        <GithubLink 
                            isLeftSide={floatsLeft} 
                            isEnterprise={isEnterprise} 
                            link={github} 
                        />
                    }
                    <div className="projectInfoBlock">
                        <div>
                            <h3 className="projectHeader">{ name }</h3>
                            <p id="desc">{ desc }</p>
                            {!!linkTexts.length 
                                ? <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                    {links.map((link, i) => {
                                        return (
                                            <p>
                                                <a 
                                                    href={link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    style={{color: 'rgb(236, 120, 18)', cursor: 'pointer'}}
                                                >
                                                    { `${linkTexts[i]}` }
                                                </a>
                                                &nbsp;
                                            </p>
                                            )
                                    })}
                                    </div>
                                : null
                            }
                        </div>
                        <ul style={{listStyleType: "none", padding: "0px", display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                            <li key={ 0 } >
                                <div id="textLanguage">
                                    <p className="textThing">Languages: </p><p id="textLang">{ languages.join(", ") }</p>
                                </div>
                            </li>
                            <li key={ 1 } id="textTech">
                                <div>
                                    <p className="textThing">Tech stack: </p><p>{ tech }</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {floatsLeft ? 
                        <GithubLink 
                            isLeftSide={floatsLeft} 
                            isEnterprise={isEnterprise} 
                            link={github} 
                        />
                    : 
                        <MultiMedia 
                            video={video} 
                            image={image} 
                            expandMedia={() => toggleMediaModal(!isShowingMediaModal)}
                        /> 
                    }
                </div>
            </div>
        )
}
                
