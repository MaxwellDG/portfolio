import React from 'react'
import { TopSection } from '../components/topsection'
import { motion } from 'framer-motion'
import * as Framer from '../data/animationVariants'


export default class ModalAboutMe extends React.Component{

    render(){

        return(          
            <motion.div 
                key="/about"
                id="about-container"
                className="page" 
                initial="initial" 
                animate="animateTo" 
                exit="exit"
                variants={ Framer.standardVariants }
                transition={ Framer.AnimationTransitions } >
                <TopSection sectionName="About Me" text={ ["Mobile Projects", "Desktop Projects"] } url={ ["/mobile", "/desktop"] } />
                <div id="content-container">
                    <div id="photo-container">
                        <img alt="aboutMe_Img" src="images/Selfie1.jpg" id="photoAboutMe"/>
                    </div>
                    <div id="text-container">
                        <p className="standardText" id="hello">Hello!</p>
                        <p className="standardText">
                            My name is Maxwell and I work as a freelance software developer. I specialize in React.js/Native and Android, 
                            while also dabbling in Python/Java desktop software. Up until recently, I was going through University and working
                            in the events industry. This allowed for me to develop great interpersonal skills in a wide variety of environments.
                            While working in events, I spent time programming as a hobby. Overtime this hobby grew into a passion, and then a career pursuit.
                            As my number of tech-skills grew, my interest followed suit, and I am now heavily focused on Mobile / Web App Development.
                            My current aspiration is to find employment in a developer role that allows me to mesh these two worlds together. 
                        </p>
                    </div>
                </div>
            </motion.div>
        )
    }
}