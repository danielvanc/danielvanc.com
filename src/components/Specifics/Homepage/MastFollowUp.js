import React from 'react'
import styled from 'styled-components'

const MastFollowUp = styled.div`
  padding: 0 1em 1em 1.5em;
  @media screen and (min-width: 48em) {
    grid-column: 2 / 4;
    column-count: 2;
    margin: 2.813em 0;
    padding: 0;
  }
  @media screen and (min-width: 64em) {
    column-count: 1;
    display: block;
    grid-column: 6 / -1;
    grid-row: 4 / 5;
    margin:0 3.125em 0 0;
  }
  @media screen and (min-width: 90em) {
    column-count: 2;
  }

  p { 
    font-size: 0.938em; 
    padding-right: 1em;
    padding-left: 1em;
    &:first-child {
      border-top: 1px solid var(--color-borders);
      border-bottom: 1px solid var(--color-borders);
      margin-bottom: 1em;
      padding: 1em;
      @media screen and (min-width: 48em) {
        border-top:0;
        border-bottom:0;
        margin-bottom: 0;
        padding:0 1em 0 0;
      }
      @media screen and (min-width: 64em) {
        padding: 0 0 1em 0;
      }
      @media screen and (min-width: 75em) {
        font-size: 1em;
        padding-right:1em;
      }
    }
    @media screen and (min-width: 48em) { padding-left: 0; }
  }

`

const FollowUp = (props) => (
    <MastFollowUp dangerouslySetInnerHTML={{__html: props.pageFollowUp }} />
)

export default FollowUp;