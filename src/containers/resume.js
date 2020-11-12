import React from 'react'
import { TopSection } from '../components/topsection'

export default class Resume extends React.Component{
    
    render(){

        return(
            <div className="page">
                <TopSection sectionName="Resume" text={ ["About Me", "Mobile Projects", "Desktop Projects"] } url={ ["/about", "/mobile", "/desktop"] } />
                <iframe src="images/MaxMDG.Resume.pdf" title="My Resume" scrolling="no" />
            </div>
        )
    }
}