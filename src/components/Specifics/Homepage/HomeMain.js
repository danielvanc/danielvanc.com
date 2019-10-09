import React from 'react';
import styled from 'styled-components';
import BaseBlockContent from '@sanity/block-content-to-react';
import HTMLContent from '../../Shared/Content';

const MastMainBody = styled.main`
    grid-column: 1 / 6;
    grid-row: 2 / 3;
    @media screen and (min-width: 48em) {
        padding: 0;
    }
    img {
        float: left;
        margin: 90px 20px 20px -90px;
        max-width: 200px;
        /* shape-outside: circle(46.5% at 104px 99px); */
        shape-outside: circle(46.5% at 14px 189px);
    }
    p {
        @media screen and (min-width: 64em) {
            font-size: 1.125rem;
        }
        @media screen and (min-width: 90em) {
            font-size: 1.313rem;
        }
    }
`;

const HomeMainContent = props => (
    <MastMainBody>
        <HTMLContent content={props.pageDescription} />
    </MastMainBody>
);

export default HomeMainContent;
