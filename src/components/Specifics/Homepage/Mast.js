import React from 'react';
import styled from 'styled-components';
import MastStandFirst from './MastStandFirst';
// import MastImage from './MastImage';
// import MastFollowUp from './MastFollowUp';

const MastContent = styled.div`
    padding: 0 0 0.9em 0;
    @media screen and (min-width: 48em) {
        grid-column: 1 / -1;
        grid-row: 1 / 2;
        /* padding: 3.5em 0 0.5em 0; */
    }
    @media screen and (min-width: 64em) {
        padding: 3em 0 0.5em 0;
    }
    h1 {
        /* msax-width: 30ch; */
        max-width: none;

        font-size: 5vw !important;
        @media screen and (min-width: 23.438em) {
            font-size: 5vmin !important;
        }
        @media screen and (min-width: 35.625em) {
            /* 570px */
            font-size: 5vw !important;
            max-width: 30ch;
        }

        @media screen and (min-width: 48em) {
            font-size: 5vw !important;
            max-width: 30ch;
        }
        @media screen and (min-width: 60.625em) {
            font-size: 5vw !important;
            max-width: 30ch;
        }
        @media screen and (min-width: 64em) {
            font-size: var(--font-size-x-large) !important;
        }
        @media screen and (min-width: 80.625em) {
        }
    }
    p {
        display: none;
        font-size: 0.842em;
        font-weight: 200;
        line-height: 130%;
        padding-bottom: 1em;
        @media screen and (min-width: 22.5em) {
            display: block;
        }
        @media screen and (min-width: 48em) {
            font-size: 1em;
            max-width: 70%;
        }
        @media screen and (min-width: 64em) {
            font-size: 1.25em;
        }
    }
    @media screen and (min-width: 64em) {
        p {
            font-size: 1.125em;
            font-weight: 200;
        }
    }
    @media screen and (min-width: 90em) {
        p {
            padding-bottom: 0.625em;
        }
    }
`;

const Mast = ({pageTitle, pageSubTitle}) => (
    <MastContent>
        <MastStandFirst pageSubTitle={pageSubTitle} />
        <h1>{pageTitle}</h1>
    </MastContent>
);

export default Mast;
