import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import styled from 'styled-components';
import logo from '../../../images/dvanc_logo.png';

const MainHeader = styled.header`
    height: 70px;
    /* width: 84%; */
    padding-left: 1.5em;
    padding-right: 1.5em;
    margin-bottom: 10px;
    display: flex;
    max-width: 1150px;

    @media screen and (min-width: 37em) {
        margin: 0 auto;
        padding: 1em 1.5em;
    }

    .home & {
        @media screen and (min-width: 48em) {
            padding-left: 1.5em;
        }
    }

    .center-squared &,
    .sub &,
    .notes & {
        @media screen and (min-width: 48em) {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            width: 100%;
            nav {
                grid-column: 2 / 4;
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

    nav {
        display: flex;
        width: 100%;
        .home & {
            width: auto;
        }
    }
`;
const SiteNav = styled.ul`
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: space-evenly;
    align-self: center;
    display: inline;

    @media screen and (min-width: 37.5em) {
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
    li {
        font-family: var(--font-family-subheadings);
        display: inline-flex;
        font-size: 1rem;
        margin-top: 7px;
        padding-left: 0.6em;
        @media screen and (min-width: 375px) {
            padding-left: 1.9em;
        }
        @media screen and (min-width: 37.5em) {
            margin-top: 0;
        }
        &:first-of-type {
            float: left;
            padding-left: 0;
            margin-top: 0;
            @media screen and (min-width: 37.5em) {
                float: none;
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

        &:before {
            content: '';
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

    li.logo a {
        display: inline-block;
        margin: 0.313em 0.5em 0.313em 0;
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
    }
`;

const isPartiallyActive = ({isPartiallyCurrent}) =>
    isPartiallyCurrent ? {className: 'active'} : null;

const isCurrent = ({isCurrent}) => (isCurrent ? {className: 'active'} : null);

const Header = props => (
    <MainHeader>
        <nav>
            <SiteNav>
                <li className="logo">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo of danielvanc.com"
                            height="40"
                            width="40"
                            title="Go to homepage"
                        />
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        getProps={isPartiallyActive}
                        {...props}
                        title="More information about Daniel"
                    >
                        About
                    </Link>
                </li>
                {/* <li><Link to="/" getProps={isCurrent}{...props}>Home</Link></li> */}
                <li>
                    <Link
                        to="/notes"
                        getProps={isPartiallyActive}
                        {...props}
                        title="Find out what I've written lately"
                    >
                        Notes
                    </Link>
                </li>
                <li>
                    <Link
                        to="/now"
                        getProps={isPartiallyActive}
                        {...props}
                        title="Find out what I'm focusing on now"
                    >
                        Now
                    </Link>
                </li>
            </SiteNav>
        </nav>
    </MainHeader>
);

isPartiallyActive.PropTypes = {
    isPartiallyActive: PropTypes.bool,
};
isCurrent.PropTypes = {
    isCurrent: PropTypes.bool,
};

export default Header;
