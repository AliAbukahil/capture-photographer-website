import React from "react";
// Importing Images
import home1 from "../img/home1.png";

// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

function AboutSection() {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>I work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>ideas</span> come to
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>life.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Full Stack Web Developer. Contact me for any photography or
          videography ideas that you have.
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </StyledDescription>
      <StyledImage className="image">
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="man with a a camera"
        />
      </StyledImage>
    </StyledAbout>
  );
}

export default AboutSection;
