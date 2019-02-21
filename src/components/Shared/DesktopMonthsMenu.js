import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const DesktopListView = styled.ul`
  display: none;
  list-style: none; 
  margin-top: 4.125em;
  @media screen and (min-width: 64em) {
    display: block;
  }
  li {
    font-weight: 200;
    padding: 0.5em 0;
  }
  a {
    border-bottom:${props => props.firstActive ? "0" : "#494949"};
    color: var(--color-light-grey);
    color: ${props => props.firstActive ? "white" : "#787878"};
    position: relative;
    .fas {
      color: var(--color-pink);
      display: none;
      position: absolute;
      left: -24px;
      top: 3px;
    }
    &.active {
      color: white;
      .fas {
        display: inline-block;
      }
    }
  }
`

const isActive = ({ isPartiallyCurrent }) => isPartiallyCurrent ? { className: 'active' } : null

const DesktopView = (props) => {
  const post = props.data

  return (
      <DesktopListView>
          {post.map(({ node: log }, i) => (
            <li key={log.id}>
              <Link to={`/log/${log.url.current}`} getProps={isActive} className={props.latestPost && i === 0 ? 'active' : ''}>
                <i className="fas fa-arrow-alt-circle-right"></i>
                {log.publishedAt}
              </Link>
            </li>
          ))}
      </DesktopListView>

  )
}

export default DesktopView;