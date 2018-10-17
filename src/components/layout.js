import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
// import Header from './header'
import './layout.css'
import styled from 'styled-components'
import FavIcon from '../../favicon.png'

const PageContainer = styled.div `
  color: #fff;
  margin: 0 auto;
  width: 80%;

  @media screen and (min-width: 600px) {
    margin: 0 0 0 12%;
    width: 525px;
  }
  @media screen and (min-width: 1024px) {
    margin: 0 0 0 30%;
    width: 525px;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: `description`, content: `Personal Website of Daniel Van Cuylenburg who is a Website Designer and Front-end Developer on the Isle of Wight, UK`},
          { name: `keywords`, content: `web designer, designer, developer, gatsbyjs, reactjs, javascript, personal site`},
        ]}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${FavIcon}` },
          { rel: 'icon', type: 'image/png', href: `${FavIcon}` }
        ]}
      >

      {/* Global site tag (gtag.js) - Google Analytics  */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126709092-1"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-126709092-1');
        `}
      </script>

      <html lang="en" />
      </Helmet>
      <PageContainer>
        { children }
      </PageContainer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;