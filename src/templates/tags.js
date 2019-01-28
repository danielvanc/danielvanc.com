import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import TitleAndMetas from '../components/Layout/TitleAndMetas'
import Layout from "../components/Layout"
import SubMast from "../components/Shared/SubMast"
import LatestBlock from "../components/Specifics/Notes/LatestBlock"
import AllCategories from "../components/Shared/ListCategories"
import ListPosts from "../components/Shared/ListPostsSquareOffset"

const PreviousPosts = styled.section`
  grid-column: 3 / 15;
  grid-row: 4 / 5;

  @media screen and (min-width: 48em) {
    display: grid;
    grid-template-columns: 2fr 8fr;
    padding:6.250em 0;
  }
  @media screen and (min-width: 75em) {
    padding:9.375em 0 6.250em 0;
  }

  .heading {
    font-size: var(--font-size);
    font-weight: 200;;
    text-transform: uppercase;
    position: relative;
    padding-left: 1.5em;
    &:after {
      border: 0;
      @media screen and (min-width: 48em) {
        border-bottom:1px solid var(--color-borders);
      }
    }
    @media screen and (min-width: 48em) {
      font-weight: 800;
      padding-left:0;
    }
  }
`

const Tags = ({ pageContext, data }) => {
  const page = "sub"
  const { tag } = pageContext
  const {group: getTags } = data.allTags
  const { totalCount } = data.allPosts || 0
  const {edges: notesLatest } = data.latest || 0
  const {edges: allPosts } = data.previous || 0

  const pageTitle = tag
  let pageDescription = ""

  switch(tag) {
    case 'Life':
      pageDescription =`${totalCount} update${ totalCount === 1 ? "" : "s"} about what's going on in my life. `
      break
    case 'tech':
      pageDescription =`${totalCount} update${ totalCount === 1 ? "" : "s"} about all things related to the world of Technology. `
      break
      case 'web':
      pageDescription =`${totalCount} update${ totalCount === 1 ? "" : "s"} about all things related to the world wide web. `
      break
      case 'News':
      pageDescription =`${totalCount} news update${ totalCount === 1 ? "" : "s"}, usually about the site or myself personally `
      break
      default:
      pageDescription =`Found ${totalCount} update${ totalCount === 1 ? "" : "s"} for this tag`
  }

  const pageMetaTitle = `All notes tagged under: ${tag}`
  const pageMetaDescription = pageDescription
  const pageMetaKeywords = `Work, Life, Web, News, Notes, Blog, Blogging, Journal, Writing, Authoring, Content`

  return (
    <>
      <TitleAndMetas
        metaTitle={pageMetaTitle}
        metaDescription={pageMetaDescription}
        metaKeywords={pageMetaKeywords}
      />
      <Layout pageLayout={page}>
        <SubMast
          title={pageTitle}
          description={pageDescription}
        />
        <LatestBlock note={notesLatest} />
        <PreviousPosts>
          <AllCategories tags={getTags} />
          <ListPosts 
            notes={allPosts} 
            total={totalCount >= 2 ? totalCount : 0 } 
          />
        </PreviousPosts>
      </Layout>
    </>
  )
}

export default Tags

export const pageQuery = graphql`

  query($tag: String) {
    
    allPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        frontmatter: { 
          tags: { in: [$tag] }  
          contentType: { eq: "notes" }
          published: { ne: false } 
        } 
      }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "Do MMMM, YYYY")
            description
            image {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          }
        }
      }
    }

    latest: allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        frontmatter: { 
          tags: { in: [$tag] }  
          contentType: { eq: "notes" }
          published: { ne: false } 
        } 
      }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "Do MMMM, YYYY")
            description
            image {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          }
        }
      }
    }

    previous: allMarkdownRemark(
      skip:1
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        frontmatter: { 
          title: { ne: "" }
          tags: { in: [$tag] }  
          contentType: { eq: "notes" }
          published: { ne: false } 
        } 
      }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "Do MMMM, YYYY")
            description
            image {
              childImageSharp{
                  sizes(maxWidth: 630) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          }
        }
      }
    }

    allTags: allMarkdownRemark(
      limit: 2000
      filter: { 
        frontmatter: { 
          published: { ne: false }
          contentType: { eq: "notes" }
        }
      }
        ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`