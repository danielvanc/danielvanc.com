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
  const {edges: allData } = data.allLogs
  const {edges: latestData } = data.latest
  return (
    <>
      <TitleAndMetas
        metaTitle={latestData.metaTitle}
        metaDescription={latestData.metaDescription}
        metaKeywords={latestData.metaKeywords}
      />
      <Layout pageLayout={page}>
        <SubMast
          title="What's new?"
          textContent="Documenting new features, enhancements and bug fixes."
          layout="standard"
        />

        <PageContainer>
          <ListLogDates>
            <ListDates data={allData} latestPost="false" />
          </ListLogDates>
          <PageMain>
            {latestData.map(({node}) => (
              <React.Fragment key={node.id}>
                <ContentTitle>{node.title}</ContentTitle>
                <HTMLContent content={ node._rawBody } />
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
    latest:allSanityLog(
      limit: 1
      sort: { fields:[publishedAt], order:DESC }
    ) {
      edges {
        node{
          id
          title
          template_key {
            id
          }
          publishedAt(formatString: "Do MMMM, YYYY")
          description
          _rawBody
          metaTitle
          metaDescription
          metaTags
        }
      }
    }
  allLogs:allSanityLog (
      sort: { fields:[publishedAt], order:DESC }
    ) {
      edges {
        node{
          id
          title
          url {
            current
          }
          template_key {
            id
          }
          publishedAt(formatString: "MMM YYYY")
        }
      }
    }
  } 
`