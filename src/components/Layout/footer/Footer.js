import React from "react"
import styled from "styled-components"
// import GitHubButton from 'react-github-button';s
// import GitHubButton from '../../Shared/GitHubButtons';
import GitHubButton from 'react-github-btn';


const SiteFooter = styled.footer`
  background: var(--color-page-background);
  padding: 1.5em 0 2.5em 0;
  
  @media screen and (min-width: 48em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
    margin: 0 auto;
    padding: 2.5em 0;
    width: 100%;
    grid-column: 1 / -1;
	  grid-row: 8 / 10;
  }
  
  @media screen and (min-width: 64em) {
    display: grid;
    grid-column-gap: 25px;
    grid-template-columns: repeat(16, 1fr);;
    margin: 0 auto;
    grid-column: 1 / -1;
    grid-row: 7 / 8;
  }
  p,
  li {
    font-size: 15px;
  }
`


const FootNotes = styled.div`  
  padding: 2em 0;
  text-align: center;
  @media screen and (min-width: 48em) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    padding: 0;
    padding-left: 2.500em;
    text-align: left;
  }
  @media screen and (min-width: 64em) {
    grid-column: 2 / 7;
    align-self: center;
    padding: 2.5em 0;
  }
  @media screen and (min-width: 75em) {
    grid-column: 3 / 7;
    padding-right:0;
  }
`
const Copyright = styled.div`  
  text-align: center;
  @media screen and (min-width: 48em) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    padding-left: 2.500em;
    text-align: left;
  }
  @media screen and (min-width: 64em) {
    grid-column: 2 / 6;
    /* grid-row: 10 / 11; */
    grid-row: 2 / 3;
    padding-bottom: 2.500em;
    padding-left: 0;
  }
  @media screen and (min-width: 75em) {
    grid-column: 3 / 6;
    grid-row: 2 / 3;
  }
`
const Socials = styled.div`  
  margin:0 0 15px 18px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  width: auto;
  
  @media screen and (min-width: 48em) {
    /* display: block; */
    align-self: center;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    margin: 0;
    padding-left: 2.500em;
    padding-bottom:0;
  }
  @media screen and (min-width: 64em) {
    border-left: 1px solid var(--color-borders);
    border-right: 1px solid var(--color-borders);
    grid-row: 1 / 3;
    grid-column: 7 / 12;
    display:flex;
    justify-content: center;
    padding: 2.500em 0;
  }
  @media screen and (min-width: 75em) {
    grid-column: 7 / 11;
    grid-row: 1 / 3;
    padding-left: 0;
  }
  ul {
    list-style: none;
    text-align: left;
    @media screen and (min-width: 48em) {
      width: 100%;
    }
    @media screen and (min-width: 64em) {
      width: auto;
    }
    li { 
      padding: 0.5em 0;
      @media screen and (min-width: 48em) {
        display: inline-block; 
        margin-right: 8%;
        padding: 0;
      }
      @media screen and (min-width: 64em) {
        display: block;
        margin-right: 0;
        padding: 0.5em 0;
      }
    }
    a:link,
    a:visited,
    a:active {
      border-bottom: 0;
      color: white;
    }
    a:hover { color: var(--color-mint); }
    .fab {
      position: relative;
      font-size: 1.5em;
      left: -15px;
      top: 3px;
      @media screen and (min-width: 48em) and (max-width: 63.938em) {
        left: 0;
        top: 0;
      }
      @media screen and (min-width: 64em) {
        left: -15px;
        top: 3px;
      }
    }
    .text {
      @media screen and (min-width: 48em) {
        display:none;
      }
      @media screen and (min-width: 64em) {
        display: inline-block;
      }
    }
  }
`
const OpenSource = styled.div`
  border-top: 1px solid var(--color-borders);
  border-bottom: 1px solid var(--color-borders);
  padding: 2em 0;
  @media screen and (min-width: 48em) {
    border-top: 0;
    border-bottom: 0;
    align-self: center;
    grid-column: 2 / -1;
    grid-row: 1 / 2;
    padding: 0;
    text-align: center;
  }
  @media screen and (min-width: 64em) {
    grid-column: 12 / 16;
  }
  @media screen and (min-width: 75em) {
    grid-column: 11 / 15;
  }
  ul {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
  }
`
const Updated = styled.div`
  border-bottom: 1px solid var(--color-borders);
  padding: 2em 0;
  text-align: center;
  @media screen and (min-width: 48em) {
    border-bottom: 0;
    grid-column: 2 / -1;
    grid-row: 2 / 3;
    padding: 0;
  }
  @media screen and (min-width: 64em) {
    grid-column: 12 / 16;
    align-self: start;
  }
  @media screen and (min-width: 75em) {
    grid-column: 11 / 15;
  }
`
const Footer = () => (
  <>
    <SiteFooter>
      <Socials>
        <ul>
          <li>
            <a href="https://dvanc.co/tw">
              <span className="fab fa-twitter"></span>
              <span className="text">Follow me on Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://dvanc.co/inst">
              <span className="fab fa-instagram"></span>
              <span className="text">Browse my Instagram pics</span>
            </a>
          </li>
          <li>
            <a href="https://dvanc.co/gh">
              <span className="fab fa-github"></span>
              <span className="text">Star my GitHub projects</span>
            </a>
          </li>
          <li>
            <a href="https://dvanc.co/cp">
            <span className="fab fa-codepen"></span>
            <span className="text">Fave my Pens</span>
            </a>
          </li>
          <li>
            <a href="https://dvanc.co/in">
              <span className="fab fa-linkedin-in"></span>
              <span className="text">Join my LinkedIn network</span>
            </a>
          </li>
        </ul>
      </Socials>
      <OpenSource>
        <ul>
          <li>
            <GitHubButton title="Fork this repo" href="https://github.com/danielvanc/danielvanc.com" data-icon="octicon-star" data-size="large" data-text="Star" aria-label="Star danielvanc/danielvanc.com on GitHub">Star</GitHubButton>
          </li>
          <li>
            <GitHubButton title="Fork this repo" href="https://github.com/danielvanc/danielvanc.com/fork" data-icon="octicon-repo-forked" data-size="large" data-text="Fork" aria-label="Fork danielvanc/danielvanc.com on GitHub">Fork</GitHubButton>
          </li>
          <li>
            <GitHubButton title="Report an Issue" href="https://github.com/danielvanc/danielvanc.com/issues" data-icon="octicon-issue-opened" data-size="large" data-text="Issue" aria-label="Issue danielvanc/danielvanc.com on GitHub">Issue</GitHubButton>
          </li>
        </ul>
      </OpenSource>
      <Updated>
        <p>Site last updated on: 19 / 03 / 2019</p>
      </Updated>
      <FootNotes>
        <p>Designed and built using <a href="https://dvanc.co/skh" title="Sketch">Sketch</a>, <a href="https://dvanc.co/gby" title="Gatsby">Gatsby</a> and <a href="http://dvanc.co/san" title="Sanity">Sanity</a>.</p>
        <p>Open sourced on <a href="https://dvanc.co/dvc">GitHub</a>. Hosting with automatic<br /> deployment on <a href="https://dvanc.co/net">Netlify</a>.</p>
      </FootNotes>
      <Copyright>
        <p>&copy; 2009 - 2050 Daniel V.C.<br /> All rights reserved.</p>
      </Copyright>
    </SiteFooter>
  </>
)

export default Footer;