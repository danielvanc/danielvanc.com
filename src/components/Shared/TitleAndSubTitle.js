import React from 'react';
import styled from 'styled-components';

const TitleWrap = styled.div`
    margin: 0 auto;
    width: 60%;
    @media screen and (min-width: 375px) {
        width: 230px;
    }
    @media screen and (min-width: 600px) {
        margin: 1em 0 0 38%;
        width: 50%;
    }
    @media screen and (min-width: 600px) and (max-width: 767px) {
        margin: 1em 0 0 35%;
    }
    @media screen and (min-width: 768px) {
        margin: 3em 0 0 45%;
    }
    @media screen and (min-width: 1024px) {
        margin: 3em 0 0 36%;
    }
    @media screen and (min-width: 1280px) {
        margin: 4em 0 0 49%;
    }
`;
const SimpleContent = styled.h1`
    flex: 2;
    font-size: 1.875rem;
    order: 2;
    grid-column: 2 / -1;
    grid-row: 1 / 2;
    text-transform: uppercase;
    line-height: 100%;
    margin: 0.2em 0;
    @media screen and (min-width: 375px) {
        font-size: var(--font-size-large);
    }
    @media screen and (min-width: 1280px) {
        font-size: 2.938rem;
    }
    strong {
        color: var(--color-mint);
    }
    span {
        color: var(--color-text-grey);
        display: block;
        font-weight: 200;
        font-size: var(--font-size);
        @media screen and (min-width: 1280px) {
            font-size: var(--font-size-medium);
        }
        text-transform: none;
    }
`;

const ProfessionTag = styled.small`
    display: inline-block;
    flex: 2;
    font-weight: 200;
    order: 3;
    grid-column: 2 / -1;
    grid-row: 1 / 2;
    border: 1px solid var(--color-text-grey);
    font-size: var(--font-size);
    width: 100%;
    @media screen and (min-width: 375px) {
        width: auto;
    }
    @media screen and (min-width: 1280px) {
        font-size: var(--font-size-medium-alt);
    }
    margin-top: 0.25em;
    padding: 0.5em 0.65em 0.5em 0.65em;
    text-transform: uppercase;
`;

const TitleAndSubTitle = ({profession}) => (
    <TitleWrap>
        <SimpleContent>
            <span>Resume of </span>
            <strong>Daniel</strong> Van Cuylenburg
        </SimpleContent>
        <ProfessionTag>{profession}</ProfessionTag>
    </TitleWrap>
);

export default TitleAndSubTitle;
