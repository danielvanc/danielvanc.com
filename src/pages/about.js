import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import TitleAndMetas from '../components/Layout/TitleAndMetas';
import Layout from '../components/Layout';
import HTMLContent from '../components/Shared/Content';

const PageMain = styled.main`
    display: grid;
    grid-column: 2 / 16;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 5px;
    margin: 0 auto;
    max-width: 1300px;
    padding: 0.7em 0 2em 0;
    position: relative;
    @media screen and (min-width: 400px) {
        padding: 1.5em 0 2em 0;
    }
    @media screen and (min-width: 600px) {
        grid-column: 1 / 17;
        padding: 6em 0 2em 0;
    }
    @media screen and (min-width: 768px) {
        grid-column: 2 / 15;
    }
    @media screen and (min-width: 1024px) {
        padding: 6em 0 10em 0;
    }
    @media screen and (min-width: 1320px) {
        grid-column: 1 / -1;
    }
    @media screen and (max-width: 600px) {
        overflow-x: hidden;
    }
`;
const ProfessionalText = styled(HTMLContent)`
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    @media screen and (min-width: 600px) and (max-width: 1023px) {
        div {
            padding-left: 45px;
            padding-right: 20px;
        }
    }
    @media screen and (min-width: 1024px) {
        grid-column: 2 / -1;
        div {
            float: right;
            max-width: 70%;
        }
    }
    img {
        shape-outside: circle(51.4% at 49.13% 52.5%);
        /* shape-outside:circle(62.89% at 35.40% 45.58%); */
        display: block;
        margin: 0 auto;
        min-width: 130%;
        overflow: hidden;
        position: relative;
        left: -25%;
        transform: translateX(5%);

        @media screen and (min-width: 600px) {
            shape-outside: circle(57.8% at -57.71% 59.7%);
            float: left;
            display: block;
            height: 100%;
            width: 75%;
            margin: auto;
            overflow: auto;
            left: auto;
            transform: none;
            min-width: auto;
        }

        @media screen and (min-width: 600px) and (max-width: 1023px) {
            shape-outside: circle(45.32% at 14% 47%);
            transform: translateX(-45%);
            left: auto;
            margin-bottom: 20px;
        }
        @media screen and (min-width: 800px) and (max-width: 1023px) {
            shape-outside: circle(46.32% at 16% 47%);
            shape-margin: 0px;
            width: 55%;
        }
        @media screen and (min-width: 1024px) {
            margin: 100px 40px 0 -55%;
            shape-outside: circle(57.8% at -57.71% 59.7%);
        }
        @media screen and (min-width: 1160px) {
            shape-outside: circle(59.81% at -62.21% 58.95%);
        }
        @media screen and (min-width: 1240px) {
            shape-outside: circle(62.32% at -113px 337px);
        }
        @media screen and (min-width: 1320px) {
            shape-outside: circle(61.5% at -125px 384px);
        }
    }
    h1 {
        font-size: 28px;
        line-height: 100%;
        text-transform: uppercase;
        margin: 0 auto 0.7em auto;
        max-width: 270px;
        @media screen and (min-width: 400px) {
            font-size: 32px;
            max-width: 312px;
        }
        @media screen and (min-width: 600px) {
            font-size: 46px;
            max-width: 100%;
        }
        @media screen and (min-width: 1024px) {
            margin: auto;
        }
        strong {
            color: var(--color-mint);
            display: block;
        }
    }
    p {
        max-width: 100%;
        @media screen and (max-width: 599px) {
            margin: 0 auto 0.8em auto;
            width: 90%;
        }
        @media screen and (min-width: 600px) and (max-width: 1023px) {
            font-size: 18px;
            max-width: 520px;
        }
        @media screen and (min-width: 1400px) {
            font-size: 21px;
        }
        @media screen and (min-width: 1600px) {
            font-size: 24px;
        }
        &:last-of-type {
            @media screen and (min-width: 600px) and (max-width: 1023px) {
                margin-bottom: 0;
            }
        }
    }
`;

const PersonalLife = styled(HTMLContent)`
    grid-column: 1 / -1;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 90%;
    @media screen and (min-width: 600px) {
        max-width: 100%;
        margin-right: 20px;
        margin-left: 20px;
    }
    @media screen and (min-width: 1024px) {
        column-count: 3;
        column-gap: 30px;
    }
    @media screen and (min-width: 1200px) {
        column-count: 3;
        column-gap: 20px;
    }
    @media screen and (min-width: 1320px) {
        column-count: 4;
    }
    @media screen and (min-width: 600px) {
        div {
            padding-left: 25px;
        }
    }
    img {
        float: right;
        display: block;
        shape-outside: polygon(
            58px 0px,
            80.39% -0.47%,
            105.95% 94.67%,
            93.26% 98.19%,
            79.19% 100.19%,
            54.03% 101.45%,
            26.83% 99.86%,
            10.5% 97.37%,
            -0.37% 92.26%,
            -3.74% 87.31%,
            -2.34% 81.27%,
            5% 75.58%,
            14.99% 69.99%,
            10.01% 64.09%,
            6.17% 59.53%,
            15.66% 56.34%,
            33.14% 51.23%,
            33.93% 35.24%,
            38.21% 16.83%,
            51px 53px
        );
        @media screen and (min-width: 1024px) {
            max-width: 50%;
        }
        @media screen and (min-width: 1320px) {
            max-width: 100%;
        }
    }
    p {
        margin-top: 0.5em;
        @media screen and (max-width: 599px) {
            margin: 0 auto 0.8em auto;
        }
        @media screen and (min-width: 600px) and (max-width: 1023px) {
            font-size: 18px;
            max-width: 520px;
        }
    }
`;

const AboutPage = ({data}) => {
    const page = 'sub about';
    const pageData = data.sanityAbout;

    return (
        <Layout pageLayout={page}>
            <TitleAndMetas
                metaTitle={pageData.metaTitle}
                metaDescription={pageData.metaDescription}
                metaKeywords={pageData.metaTags}
            />
            <PageMain>
                <ProfessionalText
                    content={pageData._rawProfessionIntro}
                    isAbout
                />
                <PersonalLife content={pageData._rawBody} />
            </PageMain>
        </Layout>
    );
};

export default AboutPage;

export const query = graphql`
    query MyQuery {
        sanityAbout {
            metaTitle
            metaTags
            metaDescription
            metaTags
            _rawProfessionIntro
            _rawBody
        }
    }
`;
