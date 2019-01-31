import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Mast from '../components/Specifics/Homepage/Mast'
import TitleAndMetas from '../components/Layout/TitleAndMetas'
import LatestPost from '../components/Specifics/Homepage/LatestPost'

const IndexPage = ( { data }) => {
  const { edges: posts } = data.intro
  const page = 'home';
  let pageData = {};
  
  posts.forEach(function ({ node: post }) {
    Object.assign(pageData, { 'metaTitle': post.frontmatter.metaTitle });
    Object.assign(pageData, { 'metaKeywords': post.frontmatter.metaKeywords });
    Object.assign(pageData, { 'metaDescription': post.frontmatter.metaDescription });
    Object.assign(pageData, { 'pageTitle': post.frontmatter.title });
    Object.assign(pageData, { 'pageSubTitle': post.frontmatter.subtitle });
    Object.assign(pageData, { 'pageFollowUp': post.frontmatter.followup });
    Object.assign(pageData, { 'pageDescription': post.html });
  });

  const { edges: notes } = data.latestPost

  return (
    <>
      <TitleAndMetas 
        metaTitle={pageData.metaTitle}
        metaDescription={pageData.metaDescription}
        metaKeywords={pageData.metaKeywords}
      />
      <Layout pageLayout={page}>        
        <Mast 
          pageTitle={pageData.pageTitle} 
          pageSubTitle={pageData.pageSubTitle} 
          pageDescription={pageData.pageDescription}  
          pageFollowUp={pageData.pageFollowUp}
        />
        <LatestPost notes={notes}  />
      </Layout>     
    </>     
  )  
}

IndexPage.propTypes = {
  page: PropTypes.string,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default IndexPage

export const query = graphql`
  query {
    intro:allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "index" } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            templateKey
            subtitle
            followup
            metaTitle
            metaDescription
            metaKeywords
          }
        }
      }
    }

    latestPost:allMarkdownRemark(
      limit: 1
      sort: {fields:[frontmatter___date], order: DESC },
      filter: {
        frontmatter: { contentType: { eq: "notes" } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          html
          fields {
            slug
          }
          frontmatter {
            title
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
  }
`