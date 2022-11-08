import React from 'react';
// Styled
import styled from 'styled-components';
// Link React Tag
import { Link } from 'react-router-dom';
// Images
import athlete from '../img/athlete-small.png';
import theRacer from '../img/theracer-small.png';
import goodTimes from '../img/goodtimes-small.png';
// Animation // Framer motion
import { motion } from 'framer-motion';
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from '../animation';
import { useScroll } from '../components/useScroll';

import ScrollTop from '../components/ScrollTop';

export default function OurWork() {
  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();
  return (
    <Work
      style={{ background: '#fff' }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img
              variants={photoAnim}
              src={athlete}
              alt="athlete_image"
            />
          </Hide>
        </Link>
      </Movie>

      <Movie variants={fade} ref={element} animate={controls} initial="hidden">
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theRacer} alt="the_Racer_image" />
        </Link>
      </Movie>

      <Movie
        variants={fade}
        ref={element1}
        animate={controls1}
        initial="hidden"
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodTimes} alt="good_Times_image" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 1rem 2rem;
    h2 {
      font-size: 2.5rem;
    }
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
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

const Hide = styled.div`
  overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
