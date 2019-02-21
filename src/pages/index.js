import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Mast from '../components/Specifics/Homepage/Mast'
import TitleAndMetas from '../components/Layout/TitleAndMetas'
import LatestPost from '../components/Specifics/Homepage/LatestPost'

const IndexPage = ( { data }) => {
  // const { edges: posts } = data.intro
  const post = data.intro
  const page = 'home';
  let pageData = {};
  
  // posts.forEach(function ({ node: post }) {
    Object.assign(pageData, { 'metaTitle': post.metaTitle });
    Object.assign(pageData, { 'metaKeywords': post.metaKeywords });
    Object.assign(pageData, { 'metaDescription': post.metaDescription });
    Object.assign(pageData, { 'pageTitle': post.title });
    Object.assign(pageData, { 'pageSubTitle': post._rawSubTitle });
    Object.assign(pageData, { 'pageFollowUp': post._rawFollowUp });
    Object.assign(pageData, { 'pageDescription': post._rawBody });
  // });

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
    intro:sanityHome {
      id
      title
      _rawSubTitle 
      _rawBody 
      _rawFollowUp 
      metaTitle
    	metaDescription
      metaTags
    }

    latestPost:allSanityNote(
      limit: 1
      sort: { fields: [publishedAt], order: DESC}
      filter: { slug: { current: { ne: null } } }
    ) {
      totalCount
      edges {
        node {
          id
          title
          _createdAt(formatString: "DD.MM.YYYY")
          description
          slug {
            _type
            current
          }
          mainImage {
          asset {
            fluid( maxWidth: 630) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    }
  }
`