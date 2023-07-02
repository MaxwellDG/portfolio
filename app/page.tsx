import ButtonsContainer from "../src/components/buttonsContainer";
import ImageLinksContainer from "../src/components/imageLinksContainer";
import { motion } from 'framer-motion'
import * as Framer from '../src/data/animationVariants';
import { Theme, ThemeContext, useThemeContext } from "../src/components/themeProvider";

export default function Home() {

  return (
    // <motion.div
    //   key="/"
    //   id="page-home"
    //   initial="homeInitialXSlide"
    //   animate="homeStableXSlide"
    //   exit="homeExitXSlide"
    //   variants={ Framer.homeVariants }
    //   transition={ Framer.AnimationTransitions } >
    <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center flex-col md:flex-row">
        <div id="section-name">
              <ImageLinksContainer />
              <p className="standardText" id="myName">Maxwell<br></br>Dunk&#8209;Green</p>
        </div>
        <ButtonsContainer  />
    </div>
    // </motion.div>
  );
}
