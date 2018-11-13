import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
import './layout.css'

const PageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "intro"
      "standfirst"
      "graphics"
      "intro-text"
      "intro-text-finish"
      "blog-intro"
      "blog-text"
      "blog-img"
      "socials"
      "opensource"
      "foot-notes"
      "copyright"
      "updated";
  
  @media screen and (min-width: 48em) { grid-template-columns: repeat(6, 1fr); }
  
  @media screen and (min-width: 48em) and (max-width:63.938em) {
    grid-template-areas:
      "header header header header header header"
      "graphics graphics intro intro intro intro"
      "graphics graphics standfirst standfirst standfirst standfirst"
      "graphics graphics intro-text intro-text intro-text intro-text"
      ". intro-text-finish intro-text-finish intro-text-finish . ."
      "blog-intro blog-intro blog-intro blog-intro blog-intro blog-intro"
      "blog-text blog-text blog-text blog-text blog-img blog-img"
      "foot-notes foot-notes foot-notes opensource opensource opensource"
      "foot-notes foot-notes foot-notes socials socials socials"
      "copyright copyright copyright updated updated updated";
  }

  @media screen and (max-height: 48em) and (min-width:37.5em) and (max-width: 63.938em) {
    grid-template-areas:
      "header header header header header header"
      "intro intro intro intro standfirst standfirst"
      "graphics graphics graphics graphics graphics graphics"
      "intro-text intro-text intro-text intro-text intro-text-finish intro-text-finish"
      "blog-intro blog-intro blog-intro blog-intro blog-intro blog-intro"
      "blog-text blog-text blog-text blog-text blog-img blog-img"
      "foot-notes foot-notes foot-notes opensource opensource opensource"
      "foot-notes foot-notes foot-notes socials socials socials"
      "copyright copyright copyright updated updated updated";
  }
  
  @media screen and (min-width: 64em) {
    grid-template-areas:
      ". header header header header header"
      "graphics graphics intro intro intro intro"
      "graphics graphics intro-text intro-text standfirst standfirst"
      "graphics graphics intro-text intro-text intro-text-finish intro-text-finish"
      "graphics graphics blog-intro blog-intro blog-intro blog-intro"
      "blog-text blog-text blog-text blog-text blog-img blog-img"
      "foot-notes foot-notes socials socials opensource opensource"
      "copyright copyright socials socials updated updated";
  }
  margin: 0 auto;
  max-width: 100%;
  height: 100vh;
  > div, 
  > main, 
  > header {
    /* border: 1px solid red; */
  }
`
const Layout = ({ children }) => {
  return (
    <PageContainer>
      <Header />
      {children}
      <Footer />
    </PageContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;