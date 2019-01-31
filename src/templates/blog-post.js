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
    font-size: 1em;
    grid-column: 2 / 16;
  }
  
  @media screen and (min-width: 90em) {
    font-size: 1.188em;
    grid-column: 4 / 14;
  }
`
const ArticleEntry = styled.article`
  @media screen and (min-width: 48em) {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(8, 1fr);
  }
  header {
    grid-column: 2 / 8;
  }
`
const ArticleHeading = styled.h1`
  max-width: 45rem;
  margin-bottom: 0.625em;
  @media screen and (min-width: 48em) {
    margin-bottom:0;
  }
  @media screen and (min-width: 93em) {
    max-width: 60rem;
  }
`
const ArticleFooter = styled.footer`
  font-weight: 200;
  grid-column: 2 / 8;
  padding: 0 0 0.938em 0;
  @media screen and (min-width: 48em) {
    padding: 0;
  }
`

const ArticleDescription = styled.div`
  grid-column: 2 / 8;
  p {
    padding-right: 1.250em;
    margin-bottom: 0.625em;
    @media screen and (min-width: 64em) {
      font-size: 1.267em;
      &:first-of-type { margin-bottom: 0!important; }
    }
    @media screen and (min-width: 90em) {
      font-size: 1.105em;
    }
  }
`
const ArticleMainPost = styled(HTMLContent)`
  grid-column: 2 / 8;
`
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
`


const NotesThumbnail = styled(BlogThumb)`
  grid-column: 1 / -1;
`
const BlogPostStandard = ( {data} )  =>{
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

            <ArticleDescription>
              <p dangerouslySetInnerHTML={{ __html: post.frontmatter.description }} />
            </ArticleDescription>

            <NotesThumbnail sizes={post.frontmatter.image.childImageSharp.sizes} />
            {post.frontmatter.imageCaption ? (
              <ThumbnailCaption>{post.frontmatter.imageCaption}</ThumbnailCaption>
            ) : ''}

            <ArticleMainPost content={ post.html } />
          </ArticleEntry>
        </PageMain>

      </Layout>
    </>
  )
}

BlogPostStandard.propTypes = {
  page: PropTypes.string,
  data: PropTypes.object.isRequired
}

export default BlogPostStandard

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
              sizes(maxWidth: 1100, maxHeight: 450) {
                  ...GatsbyImageSharpSizes
              }
          }
        }
        imageCaption
      }
    }
  }
`