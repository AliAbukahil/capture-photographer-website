import React from "react";
// Importing style components
import styled from "styled-components";
// Importing links
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="Links" to="/">
            1. About Me
          </Link>
        </li>
        <li>
          <Link className="Links" to="/work">
            2. My Work
          </Link>
        </li>
        <li>
          <Link className="Links" to="/contact">
            3. Contact Me
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;

    .Links {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

export default Nav;
