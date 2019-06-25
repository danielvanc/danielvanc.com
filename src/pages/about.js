import React from 'react'
import styled from 'styled-components'
import TitleAndMetas from '../components/Layout/TitleAndMetas'
import Layout from '../components/Layout'

const AboutPage = () => {
  const page = "sub";
  // const pageData =""

  return (
    <Layout pageLayout={page}>
      <TitleAndMetas
        metaTitle="About Page"
        metaDescription="Some description for the about page"
        metaKeywords="Some keywords for about page"
      />
      <header>
        <h1>About page</h1>
      </header>
    </Layout>
  )
}

export default AboutPage;