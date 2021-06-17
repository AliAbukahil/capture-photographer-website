import React from 'react';
// Importing Images
import home1 from "../img/home1.png";

// Importing style components
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles"

function AboutSection() {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>I work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>ideas</span> come to</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>life.</h2>
                    </StyledHide>
                </div>
                <p>Full Stack Web Developer. Contact me for any photography or videography ideas that you have.</p>
                <button>Contact Me</button>
            </StyledDescription>
            <StyledImage className="image">
                <img src={home1} alt="man with a a camera" />
            </StyledImage>
        </StyledAbout>
    )
}

export default AboutSection;
