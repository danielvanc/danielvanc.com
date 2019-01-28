import React from 'react'
import PropTypes from 'prop-types'
import { graphql} from 'gatsby'
import styled from 'styled-components'
import BlogThumb from 'gatsby-image'
import Layout from '../components/Layout'
import TitleAndMetas from '../components/Layout/TitleAndMetas'
import HTMLContent from '../components/Shared/Content'

const PageMain = styled.main`
  grid-column: 2 / 14;
  grid-row: 1 / 1;
  font-size: 0.938em;
  padding: 6em 0;
  @media screen and (min-width: 64em) {
    grid-column: 3 /-1;
  }
  @media screen and (min-width: 93em) {
    font-size: 1.188em;
    grid-column: 4 /-1;
  }
`
const ArticleEntry = styled.article`
  ul,
  ol { 
    margin:0 0 1.563em 0.938em;
  }
  p {
    margin-bottom: 1.563em;
    max-width: 30em;
    @media screen and (min-width: 93em) {
      max-width: 45em;
    }
  }
  .gatsby-image-wrapper {
    margin-bottom:1.5em;
    @media screen and (min-width: 64em) {
      float:right;
      margin: 0 0 1.5em 2.5em;
      width: 60%;
      * {
        padding-bottom: 0!important;
        position:relative!important;
        height: auto!important;
        width: auto!important;
      }
      img { display: none;}
      picture {
        img {
          display: block;
          float: right;
          position:relative!important;
          width: 100%!important;
        }
      }
    }
  }
`
const ArticleHeading = styled.h1`
  max-width: 40rem;
  margin-bottom: 0.625em;
  @media screen and (min-width: 93em) {
    max-width: 55rem;
  }
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
const ArticleFooter = styled.footer`
  font-style: italic;
  font-weight: 200;
  margin-bottom:0.625em;
`
const ArticlePost = styled(HTMLContent)`
  img { max-width: 100%; }
`

const BlogPostWeb = ( {data} ) => {
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
            <BlogThumb sizes={post.frontmatter.image.childImageSharp.sizes} />
            <ArticleDescription>{post.frontmatter.description}</ArticleDescription>
            <ArticleDescription>{post.frontmatter.description}</ArticleDescription>
            <ArticlePost content={ post.html } />
          </ArticleEntry>
        </PageMain>
      </Layout>
    </>
  )
}

BlogPostWeb.propTypes = {
  page: PropTypes.string,
  data: PropTypes.object.isRequired
}

export default BlogPostWeb

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
              sizes(maxWidth: 630, maxHeight: 325) {
                  ...GatsbyImageSharpSizes
              }
          }
        }
      }
    }
  }
`