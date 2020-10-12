import React from "react";
import styled from "styled-components";
// import BaseBlockContent from '@sanity/block-content-to-react';
import HTMLContent from "../../Shared/Content";

const MastMainBody = styled.main`
  grid-column: 1 / 6;
  grid-row: 2 / 3;
  margin-bottom: 3em;
  @media screen and (min-width: 48em) {
    padding: 0;
  }
  img {
    /* display: none; */
    /* max-width: 100px;
        margin: 10px 20px 20px 0;
        shape-outside: circle(47.96% at 54px 53px); */
    float: left;
    max-width: 125px;
    shape-outside: circle(47.96% at 10px 60px);
    transform: translateX(-55%);
    @media screen and (min-width: 22.5em) {
      max-width: 250px;
      margin: 0 20px 25px 0;
      shape-outside: circle(47.96% at 0px 120px);
    }
    @media screen and (min-width: 48em) {
      display: block;
      max-width: 200px;
      /* margin: -20px 20px 20px 0px; */
      /* shape-outside: circle(43.76% at 31px 81px); */
      margin: -12px 20px 30px 0px;
      shape-outside: circle(44.5% at 30px 92px);
      /* shape-outside: circle(45.70% at 31px 81px); */
      transform: translateX(-96px);
    }
  }
  p {
    font-size: 0.789em;
    @media screen and (min-width: 23.438em) {
      font-size: 1.05rem;
    }
    @media screen and (min-width: 64em) {
      /* font-size: 1.125rem; */
    }
    @media screen and (min-width: 48em) {
      /* font-size: 1.188rem; */
    }
    @media screen and (min-width: 90em) {
      font-size: 1.313rem;
    }
  }
`;

const HomeMainContent = (props) => (
  <MastMainBody>
    <HTMLContent content={props.pageDescription} />
    <p>
      Connect:{" "}
      <a href="https://twitter.com/danielvanc" title="Twitter" rel="me">
        Twitter
      </a>
      ,{" "}
      <a
        href="https://www.linkedin.com/in/danielvanc"
        title="LinkedIn"
        rel="me"
      >
        LinkedIn
      </a>{" "}
      and{" "}
      <a href="https://www.github.com/danielvanc" title="GitHub" rel="me"  gs>
        GitHub
      </a>
      .
    </p>
  </MastMainBody>
);

export default HomeMainContent;
