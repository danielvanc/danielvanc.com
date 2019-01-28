import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import BlogThumb from "gatsby-image"
import Layout from "../components/Layout"
import TitleAndMetas from '../components/Layout/TitleAndMetas'

const PageMain = styled.main`
  grid-column: 1 / -1;
  font-size: 0.938em;
  padding: 6em 0;
  @media screen and (min-width: 48em) {
    font-size: 1em;
  }
  @media screen and (min-width: 90em) {
    font-size: 1.188em;
  }
`
const ArticleEntry = styled.article`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(13, 1fr);
  header {
    grid-column: 5 / 12;
    grid-row: 1 / 2;
  }

  ul,
  ol { 
    margin:0 0 1.563em 0.938em;
  }
  p {
    margin-bottom: 1.563em;
    max-width: 45em;
  }
`
const ArticleHeading = styled.h1`
  max-width: 45rem;
  @media screen and (min-width: 93em) {
    max-width: 60rem;
  }
`
const ArticleDate = styled.p`
  
`
const ArticleDescription = styled.div`
  grid-column: 8 / -1;
  grid-row: 2 / 3;
  display:flex;
  justify-content: space-between;
  p {
    padding-right: 1.250em;
    &:first-of-type { margin-bottom: 0!important; }
    @media screen and (min-width: 48em) {
      font-size: 1.267em;
    }
    @media screen and (min-width: 90em) {
      font-size: 1.105em;
    }
  }
`
const ArticleMainPost = styled.div`
  grid-column: 8 / -1;
  grid-row: 3 / 4;
`
const ThumbnailCaption = styled.p`
  /* grid-column: 3 / 8;
  grid-row: 3 / 4; */
  color: #999;
  font-size: 1rem;
  font-style: italic;
  font-weight: 200;
  /* display:flex;
  justify-content: flex-end; */
  margin: 0.938em 0 0 0.938em;
`
const Thumbnail = styled.div`
  grid-column: 1 / 8;
  grid-row: 2 / 4;
`


export default ( { data }) => {
  const page = 'notes'
  const post = data.markdownRemark;
  return (
    <Layout pageLayout={page}>

      <PageMain>
        <ArticleEntry>
          <header>
            <ArticleHeading>{ post.frontmatter.title }</ArticleHeading>
            <ArticleDate>{post.frontmatter.date}</ArticleDate>
          </header>
          <Thumbnail>
            <BlogThumb sizes={post.frontmatter.image.childImageSharp.sizes} />
            <ThumbnailCaption>{post.frontmatter.imageCaption}</ThumbnailCaption>
          </Thumbnail>

          <ArticleDescription>
            <p dangerouslySetInnerHTML={{ __html: post.frontmatter.description }} />
          </ArticleDescription>
          <ArticleMainPost dangerouslySetInnerHTML={{__html: post.html}}/>
        </ArticleEntry>
      </PageMain>

    </Layout>
  )
}
export const query = graphql`
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
        imageCaption
      }
    }
  }
`