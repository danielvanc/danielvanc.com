import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import TitleAndMetas from '../components/Layout/TitleAndMetas'
import Layout from '../components/Layout'
import HTMLContent from '../components/Shared/Content'
import ImageThumb from 'gatsby-image'

const ArticleText = styled(HTMLContent)`
`
const ThumbNail = styled.div`
  height: 100px;
  width: 100px;
`

const AboutPage = ({ data }) => {
  const page = "sub";
  const pageData = data.sanityAbout

  return (
    <Layout pageLayout={page}>
      <TitleAndMetas
        metaTitle={pageData.metaTitle}
        metaDescription={pageData.metaDescription}
        metaKeywords={pageData.metaTags}
      />
      <header>
        <ArticleText content={pageData._rawTitle} />
      </header>
      <main>
        <ArticleText content={pageData._rawProfessionIntro} />
        <ThumbNail>
          {
            pageData.mainImage ? (
              <ImageThumb fluid={pageData.mainImage.asset.fluid} />
            ) : ''
          }
        </ThumbNail>
        <ArticleText content={pageData._rawBody} />
        <ThumbNail>
          {
            pageData.backupImage ? (
              <ImageThumb fluid={pageData.backupImage.asset.fluid} />
            ) : ''
          }
        </ThumbNail>
      </main>
    </Layout>
  )
}

export default AboutPage;

export const query = graphql`

  query MyQuery {
    sanityAbout {
      metaTitle
      metaTags
      metaDescription
      metaTags
      _rawTitle
      _rawProfessionIntro
      mainImage {
        asset {
          fluid(maxWidth: 950) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawBody
      backupImage {
        asset {
          fluid(maxWidth: 950) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;