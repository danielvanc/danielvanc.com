import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MainHeader = styled.header`
  grid-area: header;
`

const Header = ({ siteTitle }) => (
  <MainHeader>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/now">Now</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/log">Log</Link></li>
      </ul>
    </nav>
  </MainHeader>
)

export default Header