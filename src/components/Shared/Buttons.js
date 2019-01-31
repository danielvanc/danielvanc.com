import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components' 

const ALink = ( {link, title, className}) => (
  <Link to={link} title={title} className={className}>{title}</Link>
)

const BlogButton = styled(ALink) `
  background: transparent;
  border: 1px solid #979797!important;
  border-radius: 12px;
  clear: both;
  /* background: ${props => props.blog ? 'olive' : 'yellow'}; */
  color: white!important;
  font-family: var(--font-family-subheadings);
  margin-top: 1.875em;
  padding: 0.750em 2em;
  text-transform: uppercase;

  &:hover {
    border: 1px solid var(--color-borders)!important;
    color: #979797!important;
    transition: all 0.5s;
  }
`

ALink.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string
}

export default BlogButton;