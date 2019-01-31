import React from 'react'
import styled from 'styled-components'

const MastIntro = styled.div`
  padding: 0 1em 1em 1.5em;
  @media screen and (min-width: 48em) { 
    align-self:center;
    margin-right: 3.125em;
    grid-column:  3 / -1;
    grid-row: 1 / 3;
    align-self: end;
    padding:0;
    padding-bottom: 1em;
  }
  @media screen and (min-width: 64em) {
    grid-column: 2 / -1;
    grid-row: 1 / 2;
    padding-bottom: 1.875em;
    margin-top: 1.250em;
  }
  
`

const Intro = (props) => (
    <MastIntro>
      <h1>{props.pageTitle}</h1>
    </MastIntro>
)

export default Intro;