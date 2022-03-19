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

        const { projectName, projectClass, floatSide, isNDA, link, linkText, description, video, image, language, tech, videoClass } = this.props.project

        return(
            <div>
                <Modal closeModal={this.toggleNDAModal} isShowing={this.state.isShowingNDAModal}>
                    <NDAContent linkText={linkText} link={link}/>
                </Modal>
                <Modal closeModal={this.toggleMediaModal} isShowing={this.state.isShowingMediaModal}>
                    <MediaContent image={image} video={video} />
                </Modal>
                <div className={ projectClass }>
                    {floatSide === 'left' ? 
                    <MultiMedia video={video} image={image} videoClass={videoClass} expandMedia={this.toggleMediaModal}/> 
                    : 
                    <GithubLink isNDA={isNDA} link={link} toggleNDAModal={this.toggleNDAModal}/>
                    }
                    <div className="projectInfoBlock">
                            <h3 className="projectHeader">{ projectName }</h3>
                            <p id="description">{ description }</p>
                            <ul style={{listStyleType: "none", padding: "0px", display: 'flex', justifyContent: 'space-evenly'}}>
                                <li key={ 0 }><div id="textLanguage"><p className="textThing">Language: </p><p id="textLang">{ language }</p></div></li>
                                <li key={ 1 } id="textTech"><p className="textThing">Tech: </p><p>{ tech }</p></li>
                            </ul>
                    </div>
                    {floatSide === 'left' ? 
                    <GithubLink isNDA={isNDA} link={link} toggleNDAModal={this.toggleNDAModal}/>
                    : 
                    <MultiMedia video={video} image={image} videoClass={videoClass} expandMedia={this.toggleMediaModal}/> 
                    }
                </div>
            </div>
        )
    }
}
                
