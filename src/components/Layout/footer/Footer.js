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
    max-width: 1080px;
    display: flex;
    flex-wrap: wrap;
`;

const FootNotes = styled.div`
    flex-basis: 67%;
    order: 1;
    padding: 2em 0;
    text-align: center;
    @media screen and (min-width: 48em) {
        padding: 0;
        text-align: left;
    }
`;

const OpenSource = styled.div`
    order: 2;
    flex-basis: 33%;
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
                    <p>
                        &copy; 2019 Daniel Van Cuylenburg | An
                        <a
                            href="https://github.com/danielvanc/danielvanc.com"
                            title="An Open Source Project"
                        >
                            {' '}
                            Open Source
                        </a>{' '}
                        project | <Link to="/colophon">Colophon</Link>
                    </p>
                </FootNotes>
            </SiteFooterWrap>
        </SiteFooter>
    </>
);

export default Footer;
