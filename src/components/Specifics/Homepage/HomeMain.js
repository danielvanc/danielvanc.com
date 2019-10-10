import React from 'react';
import styled from 'styled-components';
import BaseBlockContent from '@sanity/block-content-to-react';
import HTMLContent from '../../Shared/Content';

const MastMainBody = styled.main`
    grid-column: 1 / 6;
    grid-row: 2 / 3;
    margin-bottom: 3em;
    @media screen and (min-width: 48em) {
        padding: 0;
    }
    img {
        display: none;
        /* max-width: 100px;
        margin: 10px 20px 20px 0;
        shape-outside: circle(47.96% at 54px 53px); */
        @media screen and (min-width: 23.438em) {
            display: block;
            float: left;
            max-width: 250px;
            margin: 0 20px 25px 0;
            shape-outside: circle(47.96% at 0px 120px);
            transform: translateX(-55%);
        }
        @media screen and (min-width: 48em) {
            display: block;
            max-width: 200px;
            margin: -20px 20px 20px 0px;
            shape-outside: circle(43.76% at 128px 78px);
        }
    }
    p {
        font-size: 0.789em;
        @media screen and (min-width: 48em) {
            padding-left: 90px;
        }
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
