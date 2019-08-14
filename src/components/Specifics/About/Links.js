import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../Shared/Buttons';

const RefLinks = styled.ul`
    margin: 0 auto 2.563em auto !important;
    padding-left: 0;
    width: 90%;
    @media screen and (min-width: 600px) {
        padding-left: 45px;
        width: auto;
    }
    @media screen and (min-width: 768px) {
        padding-left: 45px;
    }
    @media screen and (min-width: 1024px) {
        padding-left: 0;
        position: absolute;
        left: 0;
        top: 272px;
        float: none;
        width: auto;
    }
    li {
        display: inline-block;
        font-size: 0.75em !important;
        list-style: none;
        margin-bottom: 0;
        margin-right: 10px;
        @media screen and (min-width: 1024px) {
            display: block;
            margin-right: auto;
        }
        a {
            margin-top: 1em;
            @media screen and (min-width: 1024px) {
                display: block;
                text-align: center;
            }
        }
    }
`;

const Links = ({items}) => (
    <RefLinks>
        {items.map(({link, title}, index) => (
            <li key={`link-${index}`}>
                <LinkButton link={link} title={title} aboutLink />
            </li>
        ))}
    </RefLinks>
);

export default Links;
