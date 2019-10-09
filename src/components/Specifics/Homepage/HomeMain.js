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
        max-width: 200px;
        margin: -20px 20px 20px 0px;
        shape-outside: circle(43.76% at 128px 78px);
    }
    p {
        padding-left: 90px;
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
