import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    font-size: 62.5%;
    // This defines what 1 rem is
    /*with this now 10px = 1rem */
    /* note that we could have used ems instead of rems but that is a whole lot of work, because it is difficult to make, because the ems depend not on the root font size but on the font size of the parent Element and with that you have to do a lot of calculations and it becomes really difficult to mange.  */
}

body {
    box-sizing: border-box;
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    /* font-family: 'Lobster', cursive; */
}

button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background-color:transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}

    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight:bold;
        color: #23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

`;

export default GlobalStyle;