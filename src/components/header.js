import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import './layout.css'

const MainHeader = styled.header`
  grid-area: header;
  nav {
    display: flex;
    height: 100%;
  }
`
const SiteNav = styled.ul`
  align-self: center;
  margin: 0;
  padding: 0;
  li {
    display: inline;
    margin-right:10%;
  }
  a {
    border-bottom: 0;
    color: var(--color-white);
  }
  a:hover { color: var(--color-mint)}
`

const Header = ({ siteTitle }) => (
  <MainHeader>
    <nav>
      <SiteNav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/now">Now</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/log">Log</Link></li>
      </SiteNav>
    </nav>
  </MainHeader>
)

export default Header