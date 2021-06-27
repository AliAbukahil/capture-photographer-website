import React, { useState } from "react";
// Importing Styled Components:
import styled from "styled-components";

import { StyledAbout } from "../styles";

import Toggle from "./Toggle";

const FaqSections = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>{" "}
      </h2>
      <Toggle title="How Do I Start?">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              consequatur provident adipisci eum. Quia blanditiis itaque illum
              ullam! Quos, id.
            </p>
          </div>
        </div>
      </Toggle>
      <Toggle title="Daily Schedule">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ab?
            </p>
          </div>
        </div>
      </Toggle>
      <Toggle title="Different Payment Methods">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ab?
            </p>
          </div>
        </div>
      </Toggle>
      <Toggle title="What Products do you offer. ">
        <div className="question">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, ab?
            </p>
          </div>
        </div>
      </Toggle>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSections;
