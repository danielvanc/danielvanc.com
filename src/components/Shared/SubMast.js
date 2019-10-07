import React from 'react';
import styled from 'styled-components';
import BaseBlockContent from '@sanity/block-content-to-react';
import {Content} from './Content';

const SubHeading = styled.div`
    &.standard-centered,
    &.standard {
        grid-column: 3 / 15;
        grid-row: 1 / 2;
        color: white;
        align-self: center;
        padding: 0 1.5em 0.938em 1.5em;
        @media screen and (min-width: 48em) {
            padding: 0;
        }
        p {
            color: var(--color-light-grey);
            @media screen and (min-width: 75em) {
                font-size: var(--font-size-medium);
            }
        }
        h1 {
            @media screen and (max-width: 75em) {
                font-size: var(--font-size-large);
            }
        }
        &-centered {
            margin: 0 8%;
            padding: 2em 0 1em 0;

            @media screen and (min-width: 64em) {
                padding: 4em 0;
            }
            * {
                @media screen and (min-width: 48em) {
                    padding: 1em 0;
                    margin: 0;
                    text-align: center;
                }
            }
            h1 {
                max-width: 100%;
                padding: 0;
            }
        }
    }
    &.centered {
        grid-column: 5 / 14;
        grid-row: 1 / 2;
        padding: 2.8em 1.5em 0 1.5em;
        align-self: center;
        margin: 0 auto;
        @media screen and (min-width: 48em) {
            /* 540px */
            display: flex;
            justify-content: space-around;
            max-width: 680px;
        }
        /* @media screen and (min-width: 48em) {
      grid-column: 5 / 13;
    } */
        @media screen and (min-width: 75em) {
            grid-column: 6 / 13;
            padding: 5.625em 0 1.875em 0;
        }

        h1 {
            font-size: var(--font-size-large);
            @media screen and (min-width: 48em) {
                /* 540px */
                font-size: var(--font-size-xx-large);
                max-width: 260px;
                line-height: 0.9;
                text-transform: uppercase;
                padding-right: 0.25em;
                text-align: right;
                width: 400px;
            }
            @media screen and (min-width: 75em) {
                font-size: var(--font-size-xxx-large);
            }
        }
        p {
            color: var(--color-light-grey);
            font-size: 1em;
            @media screen and (min-width: 48em) {
                color: #fff;
                font-size: 0.75em;
            }
            @media screen and (min-width: 75em) {
                max-width: 400px;
                font-size: var(--font-size);
            }
        }
    }
`;

const serializers = {
    types: {
        block(props) {
            switch (props.node.style) {
                case 'h1':
                    return <h1>{props.children}</h1>;

                case 'h2':
                    return <h2>{props.children}</h2>;

                case 'h3':
                    return <h3>{props.children}</h3>;

                case 'h4':
                    return <h4>{props.children}</h4>;

                case 'text':
                    return <p>{props.children}</p>;
                case 'span':
                    return <p>{props.children}</p>;

                default:
                    return <p>{props.children}</p>;
            }
        },
    },
};

const SubMast = props => {
    const {title, description, textContent, layout} = props;
    return (
        <SubHeading className={layout}>
            <h1>{title}</h1>
            {props.description ? (
                <BaseBlockContent
                    blocks={description}
                    serializers={serializers}
                />
            ) : (
                <Content content={textContent} />
            )}
        </SubHeading>
    );
};

export default SubMast;
