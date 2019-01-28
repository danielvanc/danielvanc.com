import React from 'react'
import { kebabCase } from 'lodash';
import {Link} from 'gatsby'
import styled from 'styled-components'

const AllCategories = styled.div`
  border-bottom: 1px solid var(--color-borders);
  margin-bottom: 1.5em;
  padding: 1.5em;
  @media screen and (min-width: 48em) {
    border-bottom: 0;
    grid-column: 1 / 2;
    margin-bottom: 0;
    padding:0;
    padding-right: 2.500em;
  }
  .heading { 
    padding-left:0!important;
    margin:0 0 0.750em 0;
  }
`

const StyledBlockList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  @media screen and (min-width: 48em) {
    display: block;
    justify-content: none;
  }
  li {
    /* display: inline; */
    @media screen and (min-width: 75em) {
      font-size: 1.375em;
    }

    a:link, a:active, a:visited {
      background: white;
      border-radius: 6px;
      color: #333;
      padding: 0.213em 0.5em 0.313em 0.5em;
    }

    a:hover {
      background: var(--color-borders);
      color: white;
      transition: all 0.7s;
    }

    
  a:link, a:active, a:visited {
    @media screen and (min-width: 48em) {
        background: transparent;
        border-bottom: 1px solid var(--color-borders);
        color: var(--color-white);
        display:block;
        padding: 0.625em 0;
      }
      a:hover { color: var(--link-hover); }
    }
  }
  @media screen and (min-width: 48em) {
    li:first-child { a { padding-top:0; } }
    li:last-child { a { border-bottom: 0; } }
  }
`

const ListCategories = (props) => (
  <>
    <AllCategories>
      <h4 className="heading">Tags</h4>
      <StyledBlockList>
      {props.tags.map((tag) => (
        <li key={tag.fieldValue}>
          <Link to={`/notes/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))} 
      </StyledBlockList>
    </AllCategories>
  </>
)

export default ListCategories;