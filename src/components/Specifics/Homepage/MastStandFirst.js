import React from 'react'
import styled from 'styled-components'

const MastStandFirst = styled.div`
  padding: 0 1em 1em 1.5em;
  @media screen and (min-width: 48em) {
    align-self:center;
    margin-right: 3.125em;
    grid-column: 3 / 5;
    grid-row: 3 / 4;
    padding: 0;
  }
  @media screen and (min-width: 64em) {
    grid-column: 6 / -1;
    grid-row: 2 / 4;
    padding-top: 0;
  }
  p {
    font-size: 1.250em;
    font-weight: 200;
  }
  @media screen and (min-width: 64em) {
    p {
      font-size: var( --font-size-medium);
      font-weight: 200;
    }
  }
  @media screen and (min-width: 90em) {
    p { 
      font-size: var( --font-size-large); 
      padding-bottom: 0.625em;
    }
  }
`

const StandFirst = (props) => (
    <MastStandFirst>
      <p>"{props.pageSubTitle}"</p>
    </MastStandFirst>
)

export default StandFirst;