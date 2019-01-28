import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'
// import PageImage from '../../images/bodybg.png'

const PageContainer = styled.div`
  background: var(--color-grey) no-repeat;
  background-size: cover;
  &.home .contentContainer {
    @media screen and (min-width: 48em) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      /* grid-column-gap: 25px; */
    }
    @media screen and (min-width: 64em) {
      grid-template-columns: minmax(200px, 6fr) repeat(8, 1fr);
      grid-template-rows: repeat(3, minmax(min-content, max-content)) minmax(min-content, 300px) 1fr min-content;
      grid-column-gap: 25px;
    }
    @media screen and (min-width: 90em) {
      grid-template-rows: repeat(3, minmax(min-content, max-content)) minmax(min-content, 300px) 1fr min-content;
    }
  }
  &.sub .contentContainer {
    @media screen and (min-width: 48em) {
      display: grid;
      grid-template-columns: repeat(16, 1fr);
      grid-template-rows: minmax(100px, 200px);
      grid-column-gap: 25px;
    }
    @media screen and (min-width: 64em) {
      grid-template-rows: minmax(200px, 300px);
    }
  }
  &.notes .contentContainer {
    padding: 0 1.5em;
    @media screen and (min-width: 48em) {
      display: grid;
      grid-template-columns: repeat(16, 1fr);
      grid-column-gap: 25px;
      padding: 0;
    }
  }
`
const Layout = (props) => {
  const layout = props.pageLayout
  return (
      <PageContainer className={layout}>
        <Header />
          <div className="contentContainer">
            {props.children}
          </div>
        <Footer />
      </PageContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;