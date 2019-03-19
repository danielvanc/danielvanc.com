import React from 'react'
import styled from 'styled-components'
import Meta from '../components/Layout/TitleAndMetas'
import Layout from '../components/Layout'
import SubMast from '../components/Shared/SubMast'
import HTMLContent from '../components/Shared/Content'

const PageMain = styled.main`
  /* background: yellow; */
  padding: 3.750em 0;
  
  @media screen and (min-width: 48em) {
    grid-row: 2 / 3;
    grid-column: 2 / 16;
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2;
    padding-bottom: 15em;
  }
  @media screen and (min-width: 93em) {
    grid-column: 3 / 15;
  }
  h2 {
    padding-top: 20px;
  }
  img {
    max-height: 80%;
  }
`

const LeftContent = styled(HTMLContent)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding-right: 1.5em;
  padding-left: 1.5em;
  @media screen and (min-width: 48em) {
    padding-left: 0em;
  }
  img {
    display: flex;
    justify-self: center;
    float: right;
    max-height: 460px;
    shape-outside: polygon(214px 26px, 97.37% 2.4%, 100.48% 0.32%, 419px 3px, 418px 571px, 102.01% 102.49%, 66.01% 86.08%, 7.92% 58%, 3.3% 55.14%, 3.53% 49.99%, 7.23% 46.33%, 79px 161px);
    margin-right: -2em;
    padding: 1.313em 0 0.313em 1.313em;
    @media screen and (min-width: 75em) {
      height: 80%;
      margin-left:-1.5em;
      shape-outside: polygon(248px 51px, 100.12% 1.6%, 100.06% 99.8%, 66.01% 86.08%, 6.17% 59.53%, -0.87% 54.68%, -0.76% 49.95%, 2.84% 46.03%, 97px 213px);
      max-height: 630px;
    }
  }
  h2:first-of-type { padding-top: 0; }
`

const RightContent = styled(HTMLContent)`
  grid-column: 2 / -1;
  grid-row: 1 / 2;
  padding-left:1.5em;
  padding-right:1.5em;
  img {
    display: flex;
    justify-self: center;
    float: left;
    shape-outside: polygon(-1px 7px, 4.21% 1.85%, 8.28% 4.47%, 53px 51px, 62.19% 29.71%, 89.29% 41.48%, 97.54% 46.9%, 96.89% 50.72%, 94.87% 55.14%, 8.14% 100.08%, 4px 678px);
    margin-left: -2em;
    padding: 1.313em 1.5em 0.313em 0;
    shape-margin:0 10px 0 0;
    max-height: 460px;
    @media screen and (min-width: 75em) {
      shape-outside: polygon(0px 9px, 4.21% 1.85%, 9.1% 3.24%, 66px 51px, 65.90% 29.50%, 90.94% 41.89%, 98.78% 46.9%, 98.95% 50.72%, 97.34% 55.14%, 11.44% 99.26%, 4px 678px);
      height: 80%;
      margin-left: -1.5em;
      max-height: 630px;
    }
  }
  h2:first-of-type { 
    @media screen and (min-width: 48em) {
      padding-top: 0; 
    }
  }
`

const UsesPage = ({data}) => {
  const page = "center-squared"
  const mast = "centered"
  const usesData = data.sanityUses;
  console.log(usesData);
  // return 1;
  return (
    <Layout pageLayout={page}>
      <Meta
        metaTitle = {usesData.metaTitle}
        metaDescription = {usesData.metaDescription}
        metaKeywords = {usesData.metaTags}
      />
      <SubMast layout={mast} title={usesData.title} textContent={usesData.subTitle} />
      <PageMain>
        <LeftContent content={usesData._rawLeftContent} />
        <RightContent content={usesData._rawRightContent} />
      </PageMain>
    </Layout>
  )
}

export default UsesPage;

export const query = graphql`
  query {
    sanityUses{
      title
      subTitle
      _rawLeftContent
      _rawRightContent
      metaTitle
      metaTags
      metaDescription
    }
  }
`