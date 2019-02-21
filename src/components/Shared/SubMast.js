import React from 'react'
import styled from 'styled-components'
import BaseBlockContent from '@sanity/block-content-to-react'
import { Content } from '../Shared/Content'

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

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>

        case 'h2':
          return <h2>{props.children}</h2>

        case 'h3':
          return <h3>{props.children}</h3>

        case 'h4':
          return <h4>{props.children}</h4>

        case 'text':
          return <p>{props.children}</p>
        case 'span':
          return <p>{props.children}</p>

        default:
          return <p>{props.children}</p>
      }
    }
  }
}

const SubMast = (props) => {
  const { title, description, textContent } = props;
  return (
    <SubHeading>
      <h1>{title}</h1>
      {
        
        props.description ? (
          <BaseBlockContent blocks={description} serializers={serializers} />
        ) :
        <Content content={textContent} />
      }
    </SubHeading>
  )
}

export default SubMast;