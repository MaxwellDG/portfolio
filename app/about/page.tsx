import React from "react";
import { TopSection } from "../../src/components/topsection";
import { motion } from "framer-motion";
import * as Framer from "../../src/data/animationVariants";

export default function About() {
  return (
    // <motion.div
    //     key="/about"
    //     id="about-container"
    //     className="page"
    //     initial="initial"
    //     animate="animateTo"
    //     exit="exit"
    //     variants={ Framer.standardVariants }
    //     transition={ Framer.AnimationTransitions } >
    <div>
      <TopSection
        sectionName="About Me"
        text={["Hobby Projects", "Enterprise Projects"]}
        url={["/hobby", "/enterprise"]}
      />
      <div id="content-container">
        <div style={{ width: "50%", borderRadius: "50%", margin: "0 2%" }}>
          <img
            alt="aboutMe_Img"
            src="images/minca.jpg"
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </div>
        <div
          style={{
            background: "rgba(25, 25, 25, 0.8)",
            width: "50%",
            padding: "1% 10% 5% 10%",
            margin: "0 2% 0 2%",
          }}
        >
          <p className="standardText" id="hello">
            Hello!
          </p>
          <p className="standardText">
            My name is Maxwell and I work as a Frontend Software Developer.
            Previously, I worked in the hospitality industry while going through
            school and developed great personal skills in a wide variety of
            environments. While working in events, I spent time programming as a
            hobby. Overtime this hobby grew into a passion, and then a career.
            Now I've meshed the two worlds together and happily code software
            that connects us all through technology.
          </p>
        </div>
      </div>
    </div>
    // </motion.div>
  );
}
