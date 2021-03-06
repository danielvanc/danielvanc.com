import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import styled from 'styled-components';
import BlogThumb from 'gatsby-image';
import { DiscussionEmbed } from "disqus-react";
import Layout from '../components/Layout';
import TitleAndMetas from '../components/Layout/TitleAndMetas';
import HTMLContent from '../components/Shared/Content';

const PageMain = styled.main`
    font-size: 0.938em;
    padding: 3em 0 6em 0;
    @media screen and (min-width: 48em) {
        font-size: 1em;
        grid-column: 2 / 16;
        padding: 6em 0;
        margin: 0 auto;
        max-width: 1150px;
    }

    @media screen and (min-width: 90em) {
        font-size: 1.188em;
        grid-column: 4 / 14;
    }
`;
const ArticleEntry = styled.article`
    padding-bottom: 2em;
    @media screen and (min-width: 48em) {
        display: grid;
        grid-gap: 25px;
        grid-template-columns: repeat(8, 1fr);
        padding-bottom: 4em;
    }
    header {
        grid-column: 2 / 8;
    }
`;
const ArticleHeading = styled.h1`
    max-width: auto;
    margin-bottom: 0.625em;
    font-size: 7vm;
    font-size: 7vmin;
    @media screen and (min-width: 48em) {
        font-size: 5.8vm;
        font-size: 5.8vmin;
        margin-bottom: 0;
    }
    @media screen and (min-width: 90em) {
        font-size: 4.3vm;
        font-size: 4vmax;
    }
    @media screen and (min-width: 93em) {
        font-size: 2.836em;
    }
`;
const ArticleFooter = styled.footer`
    font-weight: 200;
    grid-column: 2 / 8;
    padding: 0 0 0.938em 0;
    @media screen and (min-width: 48em) {
        padding: 0;
    }
`;

const ArticleDescription = styled.div`
    grid-column: 2 / 8;
    p {
        /* padding-right: 1.250em; */
        margin-bottom: 0.625em;
        @media screen and (min-width: 64em) {
            font-size: 1.267em;
            &:first-of-type {
                margin-bottom: 0 !important;
            }
        }
        @media screen and (min-width: 90em) {
            font-size: 1.105em;
        }
    }
`;
const ArticleMainPost = styled(HTMLContent)`
    grid-column: 2 / 8;
`;
const ThumbnailCaption = styled.p`
    grid-column: 5 / 8;
    color: #999;
    font-size: 0.875rem;
    font-style: italic;
    font-weight: 200;
    margin: 0.938em 0;
    @media screen and (min-width: 64em) {
        font-size: 1rem;
        margin: 0 0 0 0.938em;
    }
`;

const NotesThumbnail = styled(BlogThumb)`
    grid-column: 1 / -1;
`;


const BlogPostStandard = ({ data }) => {
  const page = 'notes';
  const post = data && data.post;
      
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUSS_NAME,
    config: { identifier: post.slug.current  }
  }


    return (
        <>
            <TitleAndMetas
                metaTitle={post.metaTitle}
                metaDescription={post.metaDescription}
                metaKeywords={post.metaTags}
                postTitle={post.title}
                postDescription={post.socialDescription}
                postImage={post.twitterImage ? post.twitterImage.asset.url : ''}
                ogImage={post.ogImage ? post.ogImage.asset.url : ''}
            />
            <Layout pageLayout={page}>
                <PageMain>
                    <ArticleEntry>
                        <header>
                            <ArticleHeading>{post.title}</ArticleHeading>
                        </header>

                        <ArticleFooter>{post.publishedAt}</ArticleFooter>

                        <ArticleDescription>
                            <p>{post.description}</p>
                        </ArticleDescription>

                        {post.mainImage && (
                            <NotesThumbnail
                                fluid={post.mainImage.asset.fluid}
                            />
                        )}

                        {post.mainImageCaption ? (
                            <ThumbnailCaption>
                                {post.mainImageCaption}
                            </ThumbnailCaption>
                        ) : (
                            ''
                        )}

                        <ArticleMainPost content={post._rawContent} />
                    </ArticleEntry>
                    <DiscussionEmbed {...disqusConfig} />
                </PageMain>
            </Layout>
        </>
    );
};

BlogPostStandard.propTypes = {
    page: PropTypes.string,
    data: PropTypes.object.isRequired,
};

export default BlogPostStandard;

export const pageQuery = graphql`
    query($id: String!) {
        post: sanityNote(id: {eq: $id}) {
            id
            title
            metaTitle
            metaDescription
            metaTags
            _rawContent
            description
            publishedAt(formatString: "Do MMMM, YYYY")
            slug {
              current
            }
            mainImage {
                asset {
                    fluid(maxWidth: 600) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            socialDescription
            twitterImage {
                asset {
                    url
                    fixed {
                        src
                    }
                }
            }
            ogImage {
                asset {
                    url
                    fixed {
                        src
                    }
                }
            }
            mainImageCaption
        }
    }
`;
