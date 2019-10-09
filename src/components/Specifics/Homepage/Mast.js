import React from 'react';
import styled from 'styled-components';
import MastStandFirst from './MastStandFirst';
// import MastImage from './MastImage';
// import MastFollowUp from './MastFollowUp';

const MastContent = styled.div`
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    padding: 2.5em 0 3em 0;
    @media screen and (min-width: 48em) {
        align-self: center;
        grid-row: 1 / 3;
        align-self: end;
        padding-bottom: 1em;
    }
    @media screen and (min-width: 64em) {
        grid-row: 1 / 2;
        padding-bottom: 1.875em;
    }
    h1 {
        max-width: 90%;
    }
    p {
        font-size: 1.25em;
        font-weight: 200;
        line-height: 130%;
        max-width: 62%;
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
