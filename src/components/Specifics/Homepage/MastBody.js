import React from 'react'
import styled from 'styled-components'

const MastMainBody = styled.div`
  padding: 0 1em 1em 1.5em;
  @media screen and (min-width: 48em) {
    grid-column: 3 / -1;
    grid-row: 4 / 5;
    margin-right: 1.563em;
    padding: 0;
  }
  p { 
    /* font-size: 0.938em; */
    padding: 0.625em 0;
  }
  @media screen and (min-width: 64em) {
    grid-column: 2 / 6;
    grid-row: 2 / 5;
    margin-right: 0;
    padding-bottom: 1.875em;
    p { 
      font-size: 1.125rem;
      padding-top: 0;
      padding-bottom: 1.250em;
    }
  }
  @media screen and (min-width: 90em) {
    p { font-size: 1.313rem; }
  }
`

const MastBody = (props) => (
    <MastMainBody dangerouslySetInnerHTML={{ __html: props.pageDescription }} />
)

export default MastBody;