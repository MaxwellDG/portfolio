// import React from 'react'
import ButtonsContainer from './components/buttonsContainer'
// import { motion } from 'framer-motion'
// import * as Framer from '../src/data/animationVariants'

export default function Home(){
  
  return(
    <div>
      <p>Home page</p>
      <ButtonsContainer  />
    </div>
    // <motion.div 
    //   key="/"
    //   id="page-home" 
    //   initial="homeInitialXSlide" 
    //   animate="homeStableXSlide" 
    //   exit="homeExitXSlide" 
    //   variants={ Framer.homeVariants }
    //   transition={ Framer.AnimationTransitions } >
    //   <div id="section-name">
    //         <a href="https://www.github.com/MaxwellDG" target="_blank" rel="noopener noreferrer">
    //           <img id="largeGitHub" className="iconSkill" alt="Img_GitHub" src="images/github_icon_white.png"></img>    
    //         </a>
    //         <p className="standardText" id="myName">Maxwell<br></br>Dunk&#8209;Green</p>
    //   </div>
    //   <ButtonsContainer  />
    // </motion.div>
  )
}