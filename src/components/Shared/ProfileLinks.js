import React from 'react';
import styled from 'styled-components';

const Links = styled.ul`
    list-style: none;
    line-height: 250%;
    max-width: 90%;
    /* margin: 0 auto; */
    text-align: center;

    border-bottom: 5px solid #393939;
    margin: 0 auto;
    padding: 0 0 2em 0;

    @media screen and (min-width: 600px) {
        border-bottom: 0;
        max-width: 100%;
        margin: auto;
        padding: auto;
        text-align: left;
    }
    @media screen and (min-width: 1280px) {
        align-self: center;
        flex: 1;
        order: 4;
    }
    li {
        display: inline-block;

        @media screen and (min-width: 1280px) {
            display: flex;
            align-items: center;
        }
        @media screen and (max-width: 1023px) {
            &:first-of-type {
                display: none;
            }
        }
        a {
            border-bottom: 0;
            color: white;
        }
    }
    .fab {
        display: inline-block;
        font-size: 1.3em;

        @media screen and (min-width: 768px) {
            font-size: 1.4em;
        }
        @media screen and (min-width: 1024px) {
            font-size: 1.7em;
        }
        @media screen and (min-width: 1280px) {
            margin-right: 0.5em;
        }
    }
    .text {
        display: inline-block;
        font-size: 0.813rem;
        position: relative;
        top: -3px;
        margin: 0 1em 0 0.3em;
        @media screen and (min-width: 600px) {
            margin: 0 1.75em 0 0.3em;
        }
        @media screen and (min-width: 768px) {
            margin: 0 1em 0 0.3em;
        }
        @media screen and (min-width: 1024px) {
            margin: 0 2em 0 0.3em;
        }
        @media screen and (min-width: 1280px) {
            margin: 0;
        }
    }
`;

const ProfileLinks = () => (
    <Links>
        <li>
            <a
                href="https://en.wikipedia.org/wiki/Telecommuting"
                aria-label="I work remotely aka Telecommute"
                title="I work remotely aka Telecommute"
            >
                <span className="fab fas fa-location-arrow" />
                <span className="text">Remote</span>
            </a>
        </li>
        <li>
            <span className="fab fa-skype" />
            <span className="text">danielvanc</span>
        </li>
        <li>
            <a href="https://dvanc.co/in" aria-label="Join my LinkedIn network">
                <span className="fab fa-linkedin" />
                <span className="text">in/danielvanc</span>
            </a>
        </li>
        <li>
            <a href="https://dvanc.co/tw" aria-label="Follow me on Twitter">
                <span className="fab fa-twitter" />
                <span className="text">@danielvanc</span>
            </a>
        </li>
    </Links>
);

export default ProfileLinks;
