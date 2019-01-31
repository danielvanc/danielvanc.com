import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BlogThumb from 'gatsby-image'
import Layout from '../components/Layout'
import TitleAndMetas from '../components/Layout/TitleAndMetas'
import HTMLContent from '../components/Shared/Content'

const PageMain = styled.main`
  font-size: 0.938em;
  padding: 6em 0;
  @media screen and (min-width: 48em) {
    grid-column: 1 / 16;
  }
  @media screen and (min-width: 64em) {
    grid-column: 2 / 15;
  }
  @media screen and (min-width: 93em) {
    grid-column: 3 / 15;
    font-size: 1.188em;
  }
`
const ArticleEntry = styled.article`
  @media screen and (min-width: 48em) {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: minmax(25px, 50px) minmax(2%, 25px) 8fr 1fr 4fr minmax(2%, 25px);
  }
  header {
    @media screen and (min-width: 48em) {
      grid-column: 3 / 6;
      grid-row: 1 / 2;
    }
  }
  ul,
  ol { 
    margin:0 0 1.563em 0.938em;
  }
  p {
    margin-bottom: 1.563em;
    max-width: 45em;
  }
  .gatsby-image-wrapper {
    margin-bottom:1.5em;
    @media screen and (min-width: 48em) { margin-bottom: 0;} 
  }
`
const ArticleHeading = styled.h1`
  max-width: 45rem;
  @media screen and (min-width: 93em) {
    max-width: 60rem;
  }
`
const ArticleFooter = styled.footer`
  font-weight: 200;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding: 0.938em 0;
  @media screen and (min-width: 48em) {
    position: relative;
    transform: rotate(-90deg);
    white-space: nowrap;
    height: 126px;
    width: 176px;
    padding: 0;
  }
  @media screen and (min-width: 90em) {
    height: 190px;
    width: 186px;
  }
`
const NotesThumbnail = styled(BlogThumb)`
  grid-column: 2 / 7;
  grid-row: 2 / 3;
`
const ThumbnailCaption = styled.p`
  grid-column: 5 / 6;
  grid-row: 3 / 4;
  color: #999;
  font-size: 1rem;
  font-style: italic;
  font-weight: 200;
`
const ArticlePost = styled.div`
  grid-column: 3 / 5;
  grid-row: 3 / 4;

  img { max-width: 100%; }
`
const ArticleDescription = styled.p`
  &:first-of-type { margin-bottom: 0!important; }
  @media screen and (min-width: 48em) {
    font-size: 1.267em;
  }
  @media screen and (min-width: 90em) {
    font-size: 1.105em;
  }
`

const BlogPostNews = ( {data} ) => {
  const page = 'notes'
  const post = data.markdownRemark;
  return (
    <>
      <TitleAndMetas 
        metaTitle={`${post.frontmatter.title} | Notes`}
        metaDescription={post.frontmatter.description}
        metaKeywords="Notes, Blog, Blogging, Tech, Web, Life, Writing, News, Posts"
      />
      <Layout pageLayout={page}>
        <PageMain>
          <ArticleEntry>
            <header>
              <ArticleHeading>{ post.frontmatter.title }</ArticleHeading>
            </header>
            <ArticleFooter>
              {post.frontmatter.date}
            </ArticleFooter>
            <NotesThumbnail sizes={post.frontmatter.image.childImageSharp.sizes} />
            <ThumbnailCaption>{post.frontmatter.imageCaption}</ThumbnailCaption>
            <ArticlePost>
              <ArticleDescription>
                <p dangerouslySetInnerHTML={{ __html: post.frontmatter.description }} />
              </ArticleDescription>
              <HTMLContent content={ post.html } />
            </ArticlePost>
          </ArticleEntry>
        </PageMain>
      </Layout>
    </>
  )
}

BlogPostNews.propTypes = {
  page: PropTypes.string,
  data: PropTypes.object.isRequired
}

export default BlogPostNews

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "Do MMMM, YYYY")
        title
        description
        image {
          childImageSharp{
              sizes(maxWidth: 800, maxHeight: 250) {
                  ...GatsbyImageSharpSizes
              }
          }
        }
        imageCaption
      }
    }
  }
`