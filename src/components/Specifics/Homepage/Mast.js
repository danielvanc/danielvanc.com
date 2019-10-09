import React from 'react';
import styled from 'styled-components';
import MastStandFirst from './MastStandFirst';
// import MastImage from './MastImage';
// import MastFollowUp from './MastFollowUp';

const MastContent = styled.div`
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    padding: 3.5em 0 0.5em 90px;
    h1 {
        /* max-width: 90%; */
        max-width: 30ch;
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
