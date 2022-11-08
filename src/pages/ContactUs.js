import React from 'react';

// Animation // Framer motion
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';

export default function ContactUs() {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: '#fff' }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <Herf>Send Us A Message</Herf>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <Herf href="www.gmail.com" target="_blank">
              Send an email
            </Herf>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <Herf>Social Media</Herf>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 4rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  /* h2 {
    margin: 2rem;
    font-size: 2.5rem;
  } */
`;

const Herf = styled(motion.a)`
  margin: 2rem;
  font-size: 2.5rem;
  color: #353535;
  text-decoration: none;
`;
