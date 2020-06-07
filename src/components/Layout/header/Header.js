import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../../../images/dvanc_logo.png";
import MenuButton from "../../Shared/MenuButton";

const MainHeader = styled.header`
  height: 70px;
  /* width: 84%; */
  padding-left: 1.5em;
  padding-right: 1.5em;
  margin-bottom: 10px;
  display: flex;
  max-width: 1150px;
  position: relative;

  @media screen and (min-width: 37em) {
    margin: 0 auto;
    padding: 1em 1.5em;
  }

  @media screen and (min-width: 48em) {
    max-width: 430px;
  }
  .home & {
    @media screen and (min-width: 48em) {
      padding-left: 1.5em;
      max-width: 1150px;
    }
  }

  .center-squared &,
  .sub &,
  .notes & {
    @media screen and (min-width: 48em) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      /* width: 100%; */
      nav {
        grid-column: 1 / 5;
        align-self: center;
      }
    }
    grid-template-rows: 60px;
    @media screen and (min-width: 90em) {
      grid-template-rows: 100px;
    }
  }

  &.center-nav {
    @media screen and (min-width: 48em) {
      grid-column: 1 / -1;
      margin: 0 auto;
      width: 50%;
    }
  }

  button {
    margin: 10px 0 0 0;
    position: absolute;
    right: 1.5em;
    z-index: 2;

    @media screen and (min-width: 48em) {
      display: none;
    }
  }

  nav {
    display: flex;
    width: 100%;
    .home & {
      width: auto;
    }
  }
  nav.mobileMenu {
    background: #333;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
  }

  .logo {
    border-bottom: 0;
    float: left;
    margin-top: 8px;
    /* @media screen and (min-width: 46.865em) { */
    @media screen and (min-width: 48em) {
      margin: 8px auto 0 auto;
    }
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    &:hover,
    &:focus,
    &:active {
      @media (hover: hover) {
        -webkit-animation-name: pg;
        animation-name: pg;
        -webkit-animation-duration: 0.6s;
        animation-duration: 0.6s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-direction: alternate;
        animation-direction: alternate;
      }
    }
    &:before {
      background: transparent;
    }
    .home & {
      @media screen and (min-width: 48em) {
        margin-top: 13px;
      }
    }
  }

  .mobileMenu .logo {
    display: none;
  }
`;

const SiteNav = styled.ul`
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-evenly;
  align-self: center;
  display: none;

  @media screen and (min-width: 48em) {
    display: flex;
    margin: 0 auto;
    max-width: 500px;
    padding: 0;
  }
  .home & {
    @media screen and (min-width: 37.5em) {
      margin: 0 auto;
    }
  }
  .mobileMenu & {
    display: block;
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }
  li {
    font-family: var(--font-family-subheadings);
    display: inline-flex;
    margin-top: 7px;
    padding-left: 0.3em;
    @media screen and (min-width: 375px) {
      padding-left: 1.45em;
    }
    @media screen and (min-width: 25em) {
      padding-left: 1.9em;
    }
    @media screen and (min-width: 37.5em) {
      margin-top: 0;
    }
    font-size: 1rem;

    &:first-of-type {
      display: block;
      @media screen and (min-width: 48em) {
        display: none;
      }
    }

    .mobileMenu & {
      display: block;
      font-size: 1.5rem;
      @media screen and (min-width: 375px) {
        padding-left: 0;
      }
      @media screen and (min-width: 25em) {
        padding-left: 0;
      }
    }
    @media screen and (min-width: 37.5em) {
      float: none;
      padding-left: auto;
    }
    @media screen and (min-width: 75em) {
      font-size: var(--font-size-nav-large);
    }
  }
  a:link,
  a:visited {
    border-bottom: 0 !important;
    color: var(--color-white);
  }

  a {
    color: var(--color-white);
    margin: 0.313em 0.5em;
    padding-bottom: 0.3em;

    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;

    .mobileMenu & {
      display: block;
    }

    &.active span {
      .mobileMenu & {
        border-bottom: 4px solid #6dd5ed;
        padding-bottom: 2px;
      }
    }

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 51%;
      right: 51%;
      bottom: 0;
      background: #6dd5ed;
      height: 4px;
      -webkit-transition-property: left, right;
      transition-property: left, right;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
      .mobileMenu & {
        background: transparent;
      }
    }

    &:hover {
      border-bottom: 0 !important;
      color: var(--color-mint);
    }
    &.active {
      color: var(--color-mint);
      font-weight: 800;

      &:hover {
        outline: none;
      }
    }
    &.active:before,
    &:hover:before,
    &:focus:before,
    &:active:before {
      left: 0;
      right: 0;
    }
  }
  a:hover {
    color: var(--color-mint);
  }

  @-webkit-keyframes pg {
    to {
      -webkit-transform: scale(1.6);
      transform: scale(1.6);
    }
  }
  @keyframes pg {
    to {
      -webkit-transform: scale(1.6);
      transform: scale(1.6);
    }
  }
`;

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: "active" } : null;

const isCurrent = ({ isCurrent }) =>
  isCurrent ? { className: "active" } : null;

const Header = (props) => {
  const menuOpen = (nav) => {
    nav.classList.add("mobileMenu");
    document.querySelector("body").classList.add("body-fixed");
    document.querySelector("header button").classList.add("menu-open");
  };

  const menuClose = (nav) => {
    nav.classList.remove("mobileMenu");
    document.querySelector("header button").classList.remove("menu-open");
    document.querySelector("body").classList.remove("body-fixed");
  };

  const handleClick = (e) => {
    e.preventDefault();
    const navElement = document.querySelector("nav");
    e.currentTarget.innerHTML =
      e.currentTarget.innerHTML === "Menu" ? "Close" : "Menu";
    navElement.classList.contains("mobileMenu")
      ? menuClose(navElement)
      : menuOpen(navElement);
  };

  return (
    <MainHeader>
      <MenuButton handleClick={handleClick} />
      <nav>
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="Logo of danielvanc.com"
            height="40"
            width="40"
            title="Go to homepage"
          />
        </Link>
        <SiteNav>
          <li>
            <Link
              to="/"
              getProps={isCurrent}
              {...props}
              title="More information about Daniel"
            >
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/now/"
              getProps={isPartiallyActive}
              {...props}
              title="What I'm up-to now for the current month"
            >
              <span>Now</span>
            </Link>
          </li>
          <li>
            <Link
              to="/notes/"
              getProps={isPartiallyActive}
              {...props}
              title="Find out what I've written lately"
            >
              <span>Notes</span>
            </Link>
          </li>
          <li>
            <a href="https://github.com/danielvanc">
              <span>Projects</span>
            </a>
          </li>
        </SiteNav>
      </nav>
    </MainHeader>
  );
};

isPartiallyActive.PropTypes = {
  isPartiallyActive: PropTypes.bool,
};
isCurrent.PropTypes = {
  isCurrent: PropTypes.bool,
};

export default Header;
