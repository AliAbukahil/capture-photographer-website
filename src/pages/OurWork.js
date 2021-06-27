import React from "react";
// Importing Styled Components:
import styled from "styled-components";
// Import Link from Router DOM
import { Link } from "react-router-dom";
// importing Images
import athlete from "../img/athlete-small.png";
import theRacer from "../img/theracer-small.png";
import goodTimes from "../img/goodtimes-small.png";
// Importing Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";

function OurWork() {
  return (
    <StyledWork
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <StyledFrame1 variants={slider}></StyledFrame1>
        <StyledFrame2 variants={slider}></StyledFrame2>
        <StyledFrame3 variants={slider}></StyledFrame3>
        <StyledFrame4 variants={slider}></StyledFrame4>
      </motion.div>
      <StyledMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theRacer} alt="theRacer" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodTimes} alt="goodTimes" />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
}

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

// Frame Animation
const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`;

const StyledFrame3 = styled(StyledFrame1)`
  background: #8ed2ff;
`;

const StyledFrame4 = styled(StyledFrame1)`
  background: #8effa0;
`;

export default OurWork;
