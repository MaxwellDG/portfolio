import React from 'react'
import MultiMedia from './media/multimedia';
import GithubLink from './media/githubLink';
import Modal from './modal';
import NDAContent from './media/ndaContent'
import MediaContent from "./media/mediaContent"

export default class MediaBlock extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isShowingNDAModal: false,
            isShowingMedialModal: false,
        };
        this.toggleNDAModal = this.toggleNDAModal.bind(this);
        this.toggleMediaModal = this.toggleMediaModal.bind(this);
    }

    toggleNDAModal(){
        this.setState(prev => ({
            isShowingNDAModal: !prev.isShowingNDAModal
        }));
    }

    toggleMediaModal(){
        this.setState(prev => ({
            isShowingMediaModal: !prev.isShowingMediaModal
        }));
    }


    render(){

        const { projectName, projectClass, floatSide, isNDA, link, linkText, description, subText, video, image, language, tech, videoClass } = this.props.project

        return(
            <div style={{position: 'relative'}}>
                <Modal closeModal={this.toggleNDAModal} isShowing={this.state.isShowingNDAModal} contentDims={{width: '30%'}}>
                    <NDAContent linkText={linkText} link={link}/>
                </Modal>
                <Modal closeModal={this.toggleMediaModal} isShowing={this.state.isShowingMediaModal} contentDims={{width: '70%', height: '70%'}}>
                    <MediaContent image={image} video={video} />
                </Modal>
                <div className={ projectClass }>
                    {floatSide === 'left' ? 
                    <MultiMedia side={floatSide} video={video} image={image} videoClass={videoClass} expandMedia={this.toggleMediaModal}/> 
                    : 
                    <GithubLink side={floatSide} isNDA={isNDA} link={link} toggleNDAModal={this.toggleNDAModal}/>
                    }
                    <div className="projectInfoBlock">
                        <div>
                            <h3 className="projectHeader">{ projectName }</h3>
                            <p id="description">{ description }</p>
                            {subText && <p style={{fontStyle: 'italic', fontSize: '10px'}}>{ subText }</p>}
                            {linkText === "TheBardsQuill.com" || projectName === 'The Diabetes App' ?
                                <a href={link} target="_blank" rel="noopener noreferrer" style={{color: 'rgb(236, 120, 18)', cursor: 'pointer'}}>{ linkText }</a>
                                :
                                null
                            }
                        </div>
                        <ul style={{listStyleType: "none", padding: "0px", display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                            <li key={ 0 } >
                                <div id="textLanguage">
                                    <p className="textThing">Language: </p><p id="textLang">{ language }</p>
                                </div>
                            </li>
                            <li key={ 1 } id="textTech">
                                <div>
                                    <p className="textThing">Tech: </p><p>{ tech }</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {floatSide === 'left' ? 
                    <GithubLink side={floatSide} isNDA={isNDA} link={link} toggleNDAModal={this.toggleNDAModal}/>
                    : 
                    <MultiMedia side={floatSide} video={video} image={image} videoClass={videoClass} expandMedia={this.toggleMediaModal}/> 
                    }
                </div>
            </div>
        )
    }
}
                
