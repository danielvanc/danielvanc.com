import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
// import styled from 'styled-components'
import TitleAndMetas from '../components/Layout/TitleAndMetas'
import Layout from '../components/Layout'
import SubMast from '../components/Shared/SubMast'
import LatestBlock from '../components/Specifics/Notes/LatestBlock'
// import ListPosts from '../components/Shared/ListPostsSquareOffset'
// import AllCategories from '../components/Shared/ListCategories'
import PreviousPosts from '../components/Shared/PreviousPosts'

const NotesIndexPage = ( {data}) => {
  const page = 'sub';
  const {edges: notesLatest } = data.latest
  const notesPrevious = data.allNotes
  const {group: getTags } = data.allTags
  return (
    <>
      <TitleAndMetas 
          metaTitle="Daniel Van Cuylenburg's Notes"
          metaDescription="Site, Life, Web and Tech updates from Web Designer and Front-end Developer, Daniel Van Cuylenburg"
          metaKeywords="Notes, Blog, Blogging, Tech, Web, Life, Writing, News, Posts"
      />
      <Layout pageLayout={page}>
        <SubMast title="Notes" description="The Web, Technology, Life and Site related updates." />
        <LatestBlock note={notesLatest} />
        <PreviousPosts notes={notesPrevious.edges} tot={notesPrevious.totalCount} tags={getTags} isTags={false} />
          {/* <AllCategories tags={getTags} />
          <ListPosts notes={notesPrevious} total={totalCount} />
        </PreviousPosts> */}
      </Layout>
    </>
  )
}

NotesIndexPage.propTypes = {
  page: PropTypes.string,
  data: PropTypes.shape({
    allMarkdownRemake: PropTypes.shape({
      edges: PropTypes.array,
    })
  })
}
export default NotesIndexPage

export const query = graphql `
  query {
    latest: allMarkdownRemark(
      limit: 1
      sort: {fields:[frontmatter___date], order: DESC },
      filter: { frontmatter: { contentType: { eq: "notes" } }})
    {
      totalCount
      edges{
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
            image {
              childImageSharp{
                  sizes(maxWidth: 850) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    },

    allNotes: allMarkdownRemark(
      sort: { fields:[frontmatter___date], order: DESC },
      filter: { frontmatter: { contentType: { eq: "notes" } }})
    {
      totalCount
      edges{
        node {
          id
          frontmatter {
            title
            date(formatString: "Do MMMM, YYYY")
            description
            image {
              childImageSharp{
                  sizes(maxWidth: 460) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }

    allTags: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`