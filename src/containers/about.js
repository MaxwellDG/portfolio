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
                            My name is Maxwell and I work as a Frontend Software Developer. Previously, I worked in the hospitality industry while going through
                            school and developed great personal skills in a wide variety of environments. While working in events, I spent time
                            programming as a hobby. Overtime this hobby grew into a passion, and then a career. Now I've meshed the two worlds
                            together and happily code software that connects us all through technology.
                        </p>
                    </div>
                </div>
            </motion.div>
        )
    }
}