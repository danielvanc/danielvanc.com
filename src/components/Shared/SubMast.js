import React from 'react'
import styled from 'styled-components'

const SubHeading = styled.div`
  grid-column: 3 / 15;
  grid-row: 1 / 2;
  color: white;
  align-self: center;
  padding: 0 1.5em 0.938em 1.5em;
  @media screen and (min-width: 48em) {
    padding: 0;
  }
  p {
    color: var(--color-light-grey);
    @media screen and (min-width: 75em){
      font-size: var(--font-size-medium);
    }
  }
  h1 {
    @media screen and (max-width: 75em) {
    font-size: var(--font-size-large);
    }
  }
`

const SubMast = (props) => {
  const { title, description } = props;
  return (
    <>
      <SubHeading>
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </SubHeading>
    </>
  )
}

export default SubMast;