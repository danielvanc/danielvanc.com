import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../../../images/logo.png'
import '../general.css'
// import '../fonts.css'

const MainHeader = styled.header`
  height: 120px;
  /* width: 84%; */
  padding-left: 1.5em;
  padding-right: 1.5em;
  
  display:flex;
  
  @media screen and (min-width: 37.500em) {
    margin: 0 auto;
    padding-left: 0;
    padding-right: 0;
    width:50%;
  }

  @media screen and (min-width: 48em) {
    height: auto;
    display: grid;
    grid-gap: 25px;
    grid-template-rows: 120px;
    width: 100%;
  }
  @media screen and (min-width: 90em) { grid-template-rows: 190px;}

  .home & {
    @media screen and (min-width: 64em) { grid-template-columns: minmax(200px, 6fr) repeat(8, 1fr); }
  }

  .sub &,
  .notes & {
    @media screen and (min-width: 48em) {
      display: grid;
      grid-template-columns: repeat(4, 1fr) ;
      width:100%;
      nav {
        grid-column: 2 / 4;
        align-self: end;
      }
    }
    grid-template-rows: 60px;
    @media screen and (min-width: 90em) { grid-template-rows: 100px;}
  }
  
  &.center-nav {
    @media screen and (min-width: 48em) {
      grid-column: 1 / -1;
      margin: 0 auto;
      width: 50%;
    }
  }

  nav { 
    display: flex; 
    width:100%;
  }
`
const SiteNav = styled.ul`
  align-items: center;
  list-style:none;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: space-evenly;
  align-self: center;
  display:inline;
  
  @media screen and (min-width: 37.500em) {
    display:flex;
    margin: 0 auto;
    max-width: 500px;
    padding: 0;
  }
  li {
    font-family: var(--font-family-subheadings);
    float: right;
    margin-top: 7px;
    padding-left: 2em;
    @media screen and (min-width: 37.500em) {
      margin-top: 0;
    }
    &:first-of-type {
      float: left;
      padding-left: 0;
      margin-top: 0;
      @media screen and (min-width: 37.500em) {
        float:none;
      }
    }
    @media screen and (min-width: 37.500em) {
      float:none;
      padding-left: auto;
    }
    @media screen and (min-width: 75em) {
      font-size: var(--font-size-nav-large);
    }
  }
  a:link,
  a:visited {
    border-bottom: 0!important;
    color: var(--color-white);
  }
  a {
    border-bottom: 0!important;
    color: var(--color-white);
    &:hover {
      color: var(--color-mint);
    }
    &.active {
      background: white;
      color: #333!important;
      padding: 0.313em 0.5em;
      &:hover {
        color: #333;
      }
    }
  }
  a:hover { color: var(--color-mint)}
`

const isPartiallyActive = ( {isPartiallyCurrent} ) => {
  return isPartiallyCurrent ? {className:'active'} : null;
}

const isCurrent = ( {isCurrent}) => {
  return isCurrent ? {className:'active'} : null;
}

const Header = (props) => {
  return (
    <MainHeader>
      <nav>
        <SiteNav>
          <li><Link to="/"><img src={logo} alt="Logo of danielvanc.com" height="40" width="40" title="Go to homepage" /></Link></li>
          {/* <li><Link to="/" getProps={isCurrent}{...props}>Home</Link></li> */}
          <li><Link to="/now" getProps={isPartiallyActive}{...props} title="Find out what I'm focusing on now">Now</Link></li>
          <li><Link to="/notes" getProps={isPartiallyActive}{...props} title="Find out what I've written lately">Notes</Link></li>
          <li><Link to="/log" getProps={isPartiallyActive}{...props} title="Checkout what has been updated on the site">Log</Link></li>
        </SiteNav>
      </nav>
    </MainHeader>
  )
}

isPartiallyActive.PropTypes = {
  isPartiallyActive: PropTypes.bool,
}
isCurrent.PropTypes = {
  isCurrent: PropTypes.bool,
}

export default Header