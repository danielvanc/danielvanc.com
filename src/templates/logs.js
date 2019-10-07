import React from 'react';
import {graphql} from 'gatsby';
import styled from 'styled-components'
import Layout from '../components/Layout'
import ListDates from '../components/Shared/ListLogMonths';
import TitleAndMetas from '../components/Layout/TitleAndMetas';
import SubMast from '../components/Shared/SubMast'
import HTMLContent from '../components/Shared/Content';

const PageMain = styled.main`
    @media screen and (min-width: 48em) {
        grid-row: 2 / 3;
        grid-column: 3 / 14;
    }
    @media screen and (min-width: 64em) {
        grid-row: 1 / 2;
    }
`;
const PageContainer = styled.div`
    grid-column: 1 / -1;
    padding: 1.5em 1.5em 2.5em 1.5em;
    @media screen and (min-width: 48em) {
        display: grid;
        grid-template-columns: repeat(16, 1fr);
        padding: 1.5em 0 2.5em 0;
        grid-gap: 25px;
    }
`;
const ListLogDates = styled.aside`
    margin-bottom: 1.5em;
    @media screen and (min-width: 48em) {
        grid-column: 3 / 5;
        margin-bottom: 0;
    }
    @media screen and (min-width: 64em) {
        grid-column: 1 / 3;
        text-align: right;
    }
    a {
        color: var(--color-light-grey);
        &.active {
            color: white;
        }
    }
`;

const ContentTitle = styled.h2`
    display: none;
    @media screen and (min-width: 64em) {
        color: var(--color-light-grey);
        display: block;
        font-weight: 200;
        margin-bottom: 1.25em;
        text-transform: uppercase;
    }
`;

export default ({data}, props) => {
    const page = 'sub';
    const post = data.sanityLog;
    const {edges: allData} = data.allLogs;

    return (
        <>
            <TitleAndMetas
                metaTitle={post.metaTitle}
                metaDescription={post.metaDescription}
                metaKeywords={post.metaKeywords}
            />
            <Layout pageLayout={page}>
                <SubMast
                    title="Log"
                    textContent="Documenting new features, enhancements and bug fixes."
                    layout="standard"
                />
                <PageContainer>
                    <ListLogDates>
                        {/* <Location> */}
                        {/* <ListDates data={allData} location={props => props.location} /> */}
                        <ListDates
                            data={allData}
                            location={props => props.location}
                        />
                        {/* </Location> */}
                    </ListLogDates>
                    <PageMain>
                        <ContentTitle>{post.title}</ContentTitle>
                        <HTMLContent content={post._rawBody} />
                    </PageMain>
                </PageContainer>
            </Layout>
        </>
    );
};
export const query = graphql`
    query($id: String!) {
        sanityLog(id: {eq: $id}) {
            _rawBody
            url {
                current
            }
            title
        }

        allLogs: allSanityLog(sort: {fields: [publishedAt], order: DESC}) {
            edges {
                node {
                    id
                    title
                    url {
                        current
                    }
                    template_key {
                        id
                    }
                    publishedAt(formatString: "MMM YYYY")
                }
            }
        }
    }
`;
