import React from 'react'
import styled from 'styled-components'
import ListPosts from './ListPostsSquareOffset'
// import AllCategories from './ListCategories'

const Posts = styled.section`
  grid-column: 3 / 15;
  grid-row: 4 / 5;

  @media screen and (min-width: 48em) {
    display: grid;
    grid-template-columns: 2fr 8fr;
    padding:6.250em 0;
  }
  @media screen and (min-width: 75em) {
    padding:9.375em 0 6.250em 0;
  }

  .heading {
    font-size: var(--font-size);
    font-weight: 200;;
    text-transform: uppercase;
    position: relative;
    padding-left: 1.5em;
    &:after {
      border: 0;
      @media screen and (min-width: 48em) {
        border-bottom:1px solid var(--color-borders);
      }
    }
    @media screen and (min-width: 48em) {
      font-weight: 800;
      padding-left:0;
    }
  }
`

const PreviousNotes = (props) => (
  <Posts>
    {/* <AllCategories tags={props.tags} /> */}
    <ListPosts notes={props.notes} total={props.tot} isTags={props.isTags} />
  </Posts>
)

export default PreviousNotes;