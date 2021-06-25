import React from "react";
// Importing Images
import home1 from "../img/home1.png";

// Framer Motion
import { motion } from "framer-motion";

import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

function AboutSection() {
  //   const titleAnim = {
  //     hidden: { opacity: 0 },
  //     show: { opacity: 1, transition: { duration: 2 } },
  //   };

  //   const container = {
  //     hidden: { x: 100 },
  //     show: {
  //       x: 0,
  //       transition: {
  //         duration: 0.75,
  //         ease: "easeOut",
  //         staggerChildren: 1,
  //       },
  //     },
  //   };

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2>I work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>
              your <span>ideas</span> come to
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>life.</motion.h2>
          </StyledHide>
        </motion.div>
        <p>
          Full Stack Web Developer. Contact me for any photography or
          videography ideas that you have.
        </p>
        <button>Contact Me</button>
      </StyledDescription>
      <StyledImage className="image">
        <img src={home1} alt="man with a a camera" />
      </StyledImage>
    </StyledAbout>
  );
}

export default AboutSection;
