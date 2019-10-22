import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import Meta from '../components/Layout/TitleAndMetas';
import Layout from '../components/Layout';
import HTMLContent from '../components/Shared/Content';

const PageMain = styled.main`
    grid-row: 1 / 2;
    max-width: 1200px;
    margin-left: 1.5em;
    margin-right: 1.5em;
    padding-bottom: 6.25em;
    @media screen and (min-width: 48em) {
        margin: 0 auto;
        width: 100%;
        grid-column: 2 / 16;
        padding: 6.25em 0;
    }
    @media screen and (min-width: 64em) {
        grid-column: 2 / 15;
    }
    @media screen and (min-width: 1550px) {
        grid-column: 4 / 14;
    }

    article {
        @media screen and (min-width: 48em) {
            display: flex;
            align-items: stretch;
        }
    }
    header {
        order: 1;
        max-width: 150px;
        @media screen and (min-width: 75em) {
            max-width: 200px;
        }
        h1 {
            font-size: var(--font-size-large);
            @media screen and (min-width: 48em) {
                font-size: var(--font-size-xx-large);
                transform: rotate(-90deg) translateX(-234%);
                text-transform: uppercase;
                letter-spacing: 0.235em;
            }
            @media screen and (min-width: 75em) {
                transform: rotate(-90deg) translateX(-163%);
            }
        }
    }
`;
const PageDescription = styled.p`
    color: var(--color-light-grey);
    padding-bottom: 3.125em;
    @media screen and (min-width: 48em) {
        color: #fff;
        border-right: 1px solid #3a3a3a;
        font-style: italic;
        order: 0;
        padding-right: 3%;
        padding-bottom: 0;
    }
    @media screen and (min-width: 75em) {
        padding-right: 7%;
    }
`;
const ArticleText = styled(HTMLContent)`
    order: 2;
    p:last-of-type {
        padding-bottom: 0;
    }
`;

const ColophonPage = ({data}) => {
    const page = 'colophon';
    const pageData = data.sanityColophon;
    return (
        <Layout pageLayout={page}>
            <Meta
                metaTitle={pageData.metaTitle}
                metaDescription={pageData.metaDescription}
                metaKeywords={pageData.metaTags}
            />
            <PageMain>
                <article>
                    <header>
                        <h1>{pageData.title}</h1>
                    </header>
                    <PageDescription>{pageData.subTitle}</PageDescription>
                    <ArticleText content={pageData._rawContent} />
                </article>
            </PageMain>
        </Layout>
    );
};

export default ColophonPage;

export const pageQuery = graphql`
    query {
        sanityColophon {
            title
            subTitle
            _rawContent
            metaTitle
            metaDescription
            metaTags
        }
    }
`;
