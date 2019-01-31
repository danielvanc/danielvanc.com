import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import ListDates from '../components/Shared/ListLogMonths'
import TitleAndMetas from '../components/Layout/TitleAndMetas'
import SubMast from '../components/Shared/SubMast'
import HTMLContent from '../components/Shared/Content'

const PageMain = styled.main`
  @media screen and (min-width: 48em) {
    grid-row: 2 / 3;
    grid-column: 3  / 14;
  }
  @media screen and (min-width: 64em) {
    grid-row: 1 / 2;
  }
`
const PageContainer = styled.div`
  grid-column: 1 / -1;
  padding: 1.5em 1.5em 2.5em 1.5em;
  @media screen and (min-width: 48em) {
    display: grid;
    grid-template-columns:  repeat(16, 1fr);
    padding: 1.5em 0 2.5em 0;
    grid-gap: 25px;
  }
`
const ListLogDates = styled.aside`
  margin-bottom: 1.5em;
  @media screen and (min-width: 48em) {
    grid-column: 3 / 5;
    margin-bottom: 0;
  }
  @media screen and (min-width: 64em) {
    grid-column: 1 / 3;
    text-align: right;
  }
  a {
    color: var(--color-light-grey);
    &.active {
      color: white;
    }
  }
`
const ContentTitle = styled.h2`
  display: none;
  @media screen and (min-width: 64em) {
    color: var(--color-light-grey);
    display:block;
    font-weight: 200;
    margin-bottom: 1.250em;
    text-transform: uppercase;
  }
`

const LogPage = ({data}, props) => {
  const page = "sub"
  return (
    <>
      <TitleAndMetas
        metaTitle="Update Log for danielvanc.com"
        metaDescription="All the latest updates and additions to danielvanc.com ordered by latest date"
        metaKeywords="log, changelog, updates, additions, releases"
      />
      <Layout pageLayout={page}>
        <SubMast
          title="What's new?"
          description="Documenting new features, enhancements and bug fixes."
        />

        <PageContainer>
          <ListLogDates>
            <ListDates latestPost="false" location={props.location} />
          </ListLogDates>
          <PageMain>
            {data.allMarkdownRemark.edges.map(({node}) => (
              <React.Fragment key={node.id}>
                <ContentTitle>{node.frontmatter.title}</ContentTitle>
                <HTMLContent content={ node.html } />
              </React.Fragment>
            ))}
          </PageMain>
        </PageContainer>
      </Layout>
    </>
  )
}

LogPage.propTypes = {
  page: PropTypes.string,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    })
  })
}

export default LogPage

export const query = graphql `
  query {
    allMarkdownRemark(
      limit:1,
      sort: { fields:[frontmatter___date], order: DESC },
      filter: { frontmatter: { templateKey: { eq: "logs" } }})
    {
      totalCount
      edges{
        node {
          id
          html
          frontmatter {
            title
            date(formatString: "DD, MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`