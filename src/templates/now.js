import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import TitleAndMetas from '../components/Layout/TitleAndMetas';
import Layout from '../components/Layout';
import SubMast from '../components/Shared/SubMast';
import HTMLContent from '../components/Shared/Content';

const PageMain = styled.main`
    grid-column: 3 / 15;
    padding-bottom: 2em;
    @media screen and (min-width: 64em) {
        grid-column: 3 / 16;
    }
    @media screen and (min-width: 75em) {
        grid-column: 3 / 14;
    }
`;
const PageArticle = styled.article`
    padding: 1.5em;
    @media screen and (min-width: 48em) {
        padding: 0;
    }
`;
const PageContent = styled(HTMLContent)`
    @media screen and (min-width: 64em) {
        padding: 3em 0 0 0;
        grid-column: 5 / -1;
        grid-row: 1 / 2;
    }
`;
const BlogImage = styled.div`
    position: relative;
    @media screen and (min-width: 64em) {
        grid-column: 1 / 5;
        grid-row: 1 / -1;
    }
`;

const NowPage = ({data}) => {
    const page = 'sub';
    const post = data.sanityNow;
    return (
        <>
            <TitleAndMetas
                metaTitle="Now - What I'm currently focusing on | Daniel Van Cuylenburg"
                metaDescription="Find out what i'm currently focusing on and working towards for the current month(s)."
                metaKeywords="Focus, Study, Work, Life, Busy, Calendar, Schedule"
            />
            <Layout pageLayout={page}>
                <SubMast
                    title={post.title}
                    description={post._rawSubTitle}
                    layout="standard"
                />
                <PageMain>
                    <PageArticle>
                        <PageContent content={post._rawBody} />
                    </PageArticle>
                </PageMain>
            </Layout>
        </>
    );
};

NowPage.propTypes = {
    data: PropTypes.object.isRequired,
    page: PropTypes.string,
};

export default NowPage;

export const query = graphql`
    query($id: String!) {
        sanityNow(id: {eq: $id}) {
            id
            url {
                _type
                current
            }
            title
            _rawSubTitle
            metaTitle
            metaDescription
            metaTags
            _rawBody
            mainImage {
                asset {
                    fluid(maxWidth: 950) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
    }
`;
