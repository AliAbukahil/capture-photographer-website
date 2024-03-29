import React from 'react';

import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
// Styles
import { scrollReview } from '../animation';
import styled from 'styled-components';
import { About, Description, Image } from '../styles';
// Custom Hook
import { useScroll } from './useScroll';

export default function ServicesSection() {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReview}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock-icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="clock-icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="clock-icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </Card>
          <Card>
            <div className="card">
              <div className="icon">
                <img src={money} alt="clock-icon" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet. </p>
            </div>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
