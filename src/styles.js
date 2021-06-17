import styled from "styled-components";

// Syntax of the Styled Components 
// Please note that you can use sass syntax here too!
export const StyledAbout = styled.div `
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

export const StyledDescription = styled.div `
    flex: 1;
    padding-right:5rem;
    h2{
        font-weight: lighter;
    }
`;

export const StyledImage = styled.div `
    flex: 1;
    overflow: hidden; // for the animation of the div img
    img{
        width: 85%;
        height: 70vh;
        object-fit: cover;
        border-radius: 3rem 0.9rem 3rem 0.9rem;
    } 
`;

export const StyledHide = styled.div `
    overflow: hidden;
`;

