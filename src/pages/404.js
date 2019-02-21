import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import TitleAndMetas from '../components/Layout/TitleAndMetas'
import SubMast from '../components/Shared/SubMast'

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

const ErrorPage = () => {
  const page = 'sub'
  return (
    <>
      <TitleAndMetas
        metaTitle="404 | That page doesn't exist"
        metaDescription="Looks like you've tried going somewhere that doesn't exist."
        metaKeywords="404, Lost, Navigation"
      />
      <Layout pageLayout={page}>
        <SubMast title="404" textContent="Not the page you were looking for?" />

        <PageContainer>
          <PageMain>
            <p>Sorry, that page doesn't exist. Feel free to head <Link to="/">Home</Link> or use the main navigation above to browse elsewhere.</p>
          </PageMain>
        </PageContainer>

        
        
      </Layout>
    </>
  )
}

export default ErrorPage