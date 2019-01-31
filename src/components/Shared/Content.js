import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PostBody = styled.div`
  ul,
  ol { 
    margin:0 0 2.563em 1.3em;
  }
  p {
    margin-bottom: 1.563em;
    max-width: 45em;
    @media screen and (min-width: 75em) {
      font-size: 1.188rem;
    }
  }
  li {
    @media screen and (min-width: 75em) {
      font-size: 1.188rem;
    }
  }
  h2,
  h3,
  h4,
  h5 { font-weight: 800 }
`

const HTMLContent = ({ content, className }) => (
  <PostBody className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

HTMLContent.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

export default HTMLContent