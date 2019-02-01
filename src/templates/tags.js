import React from "react"
import { graphql } from "gatsby"
import TitleAndMetas from '../components/Layout/TitleAndMetas'
import Layout from "../components/Layout"
import SubMast from "../components/Shared/SubMast"
import LatestBlock from "../components/Specifics/Notes/LatestBlock"
import PreviousPosts from '../components/Shared/PreviousPosts'


const Tags = ({ pageContext, data }) => {
  const page = "sub"
  const { tag } = pageContext
  const {group: getTags } = data.allTags
  const {edges: notesLatest } = data.latest || 0
  const notesPrevious = data.previous

  const pageTitle = tag
  let pageDescription = ""

  switch(tag) {
    case 'Life':
      pageDescription =`What's going on in my world. `
      break
    case 'tech':
      pageDescription =`All notes related to the world of Technology. `
      break
      case 'web':
      pageDescription =`All notes related to the world wide web. `
      break
      case 'News':
      pageDescription =`Updates about the site`
      break
      default:
      pageDescription =`Posts found under this tag`
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
        <PreviousPosts notes={notesPrevious.edges} tot={notesPrevious.totalCount} tags={getTags} isTags={true} />
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