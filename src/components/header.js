import React from 'react'
import { Link } from 'gatsby'

const Header = ( {siteTitle} ) => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/now">Now</Link></li>
      <li><Link to="/notes">Notes</Link></li>
      <li><Link to="/log">Log</Link></li>
    </ul>
  </nav>
)

export default Header