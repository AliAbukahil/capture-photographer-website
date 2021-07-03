import React from "react";
// Importing Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
// Importing Images
import home2 from "../img/home2.png";
// importing styles of styled components
import { StyledAbout, StyledDescription, StyledImage } from "../styles";
import styled from "styled-components";
// importing a self created Hook
import { useScroll } from "./useScroll.js";
// importing fade Animation
import { scrollReveal } from "../animation";

function ServicesSection() {
  const [element, controls] = useScroll();
  return (
    <StyledServices
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledDescription>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="clock-icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="clock-icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="clock-icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </StyledCard>
          <div className="card">
            <div className="icon">
              <img src={money} alt="clock-icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet. </p>
          </div>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="camera" />
      </StyledImage>
    </StyledServices>
  );
}

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding-bottom: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
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

export default ServicesSection;
