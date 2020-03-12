import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import GitHubButton from 'react-github-btn';

const SiteFooter = styled.footer`
    background: var(--color-page-background);
    @media screen and (min-width: 48em) {
        padding: 3em 0;
        width: 100%;
    }
    p,
    li {
        font-size: 15px;
    }
`;

const SiteFooterWrap = styled.div`
    margin: 0 auto;
    max-width: 1150px;
    padding: 0 1.5em;
    @media screen and (min-width: 48em) {
        display: flex;
        flex-wrap: wrap;
    }
    @media screen and (min-width: 76.25em) {
        padding: 0;
    }
`;

const FootNotes = styled.ul`
    list-style: none;
    padding: 1em 0 2em 0;
    text-align: center;
    @media screen and (min-width: 48em) {
        margin: 0 auto;
        text-align: right;
        padding: 2em 0;
        flex-basis: 67%;
        order: 1;
        padding: 0;
        text-align: left;
    }
    /* @media screen and (min-width: 64em) {
        flex-basis: 50%;
    } */
    li {
        @media screen and (min-width: 32.5em) {
            display: inline;
        }
        @media screen and (min-width: 48em) {
            display: block;
        }
        @media screen and (min-width: 64em) {
        }
        @media screen and (min-width: 53.125em) {
            display: inline;
        }
        &:first-of-type {
            padding-right: 5px;
        }
    }
`;

const OpenSource = styled.div`
    padding-top: 2em;
    margin: 0 auto;
    max-width: 300px;
    @media screen and (min-width: 48em) {
        flex-basis: 33%;
        order: 2;
        padding-top: 0;
    }
    ul {
        display: flex;
        list-style: none;
        justify-content: space-evenly;
    }
`;

const Footer = () => (
    <>
        <SiteFooter>
            <SiteFooterWrap>
                <OpenSource>
                    <ul>
                        <li>
                            <GitHubButton
                                title="Fork this repo"
                                href="https://github.com/danielvanc/danielvanc.com"
                                data-icon="octicon-star"
                                data-size="large"
                                data-text="Star"
                                aria-label="Star danielvanc/danielvanc.com on GitHub"
                            >
                                Star
                            </GitHubButton>
                        </li>
                        <li>
                            <GitHubButton
                                title="Fork this repo"
                                href="https://github.com/danielvanc/danielvanc.com/fork"
                                data-icon="octicon-repo-forked"
                                data-size="large"
                                data-text="Fork"
                                aria-label="Fork danielvanc/danielvanc.com on GitHub"
                            >
                                Fork
                            </GitHubButton>
                        </li>
                        <li>
                            <GitHubButton
                                title="Report an Issue"
                                href="https://github.com/danielvanc/danielvanc.com/issues"
                                data-icon="octicon-issue-opened"
                                data-size="large"
                                data-text="Issue"
                                aria-label="Issue danielvanc/danielvanc.com on GitHub"
                            >
                                Issue
                            </GitHubButton>
                        </li>
                    </ul>
                </OpenSource>
                <FootNotes>
                    <li>&copy; 2019 Daniel Van Cuylenburg.</li>
                    <li>
                        A
                        <a
                            href="https://github.com/danielvanc/danielvanc.com"
                            title="A Open Source Project"
                        >
                            {' '}
                            Open Source!! :)
                        </a>{' '}
                        project. 
                        <Link to="/colophon">Colophon</Link>
                    </li>
                </FootNotes>
            </SiteFooterWrap>
        </SiteFooter>
    </>
);

export default Footer;
