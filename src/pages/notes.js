import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import TitleAndMetas from '../components/Layout/TitleAndMetas'
import Layout from '../components/Layout'
import SubMast from '../components/Shared/SubMast'
import LatestBlock from '../components/Specifics/Notes/LatestBlock'
import ListPosts from '../components/Shared/ListPostsSquareOffset'
import AllCategories from '../components/Shared/ListCategories'

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

const NotesIndexPage = ( {data}) => {
  const page = 'sub';
  const {edges: notesLatest } = data.latest
  const {edges: notesPrevious } = data.previous || 0
  const {group: getTags } = data.allTags
  const { totalCount } = data.previous || 0
  return (
    <>
      <TitleAndMetas 
          metaTitle="Daniel Van Cuylenburg's Notes"
          metaDescription="Notes about Site news, Life, Web and Tech from Web Designer and Front-end Developer, Daniel Van Cuylenburg"
          metaKeywords="Notes, Blog, Blogging, Tech, Web, Life, Writing, News, Posts"
      />
      <Layout pageLayout={page}>
        <SubMast title="Notes" description="Updates include: site news,  my life, the Web and Tech" />
        <LatestBlock note={notesLatest} />
        <PreviousPosts>
          <AllCategories tags={getTags} />
          <ListPosts notes={notesPrevious} total={totalCount} />
        </PreviousPosts>
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

    previous: allMarkdownRemark(
      skip: 1,
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