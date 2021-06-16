import React from 'react';
// Importing Images
import home1 from "../img/home1.png";

// Importing style components
import styled from 'styled-components';

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

// Syntax of the Styled Components 
// Please note that you can use sass syntax here too!
const StyledAbout = styled.div `
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const StyledDescription = styled.div `
    flex: 1;
    padding-right:5rem;
    h2{
        font-weight: lighter;
    }
`;

const StyledImage = styled.div `
    flex: 1;
    overflow: hidden; // for the animation of the div img
    img{
        width: 85%;
        height: 70vh;
        object-fit: cover;
        border-radius: 3rem 0.9rem 3rem 0.9rem;
    } 
`;

const StyledHide = styled.div `
    overflow: hidden;
`;

export default AboutSection;
