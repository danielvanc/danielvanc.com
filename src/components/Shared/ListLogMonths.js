import React from 'react'
import PropTypes from 'prop-types'
import { Link, navigate, StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router';
import styled from 'styled-components'
// import { navigate } from '@reach/router'

const isCurrent = ( {isCurrent}) => isCurrent ? {className:'active'} : null

const DesktopList = styled.ul`
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
    border-bottom:${props => props.firstActive ? "0" : "#494949" };
    color: var(--color-light-grey);
    color: ${props => props.firstActive ? "white" : "#787878" };
    position: relative;
    .fas {
      color: var(--color-pink);
      display: none;
      position: absolute;
      left: -24px;
      top: 3px;
      /* font-size: var(--font-size-medium);
      left: -30px;
      top: -1px; */
    }
    &.active {
      color: white;
      .fas {
        display: inline-block;
      }
    }
  }
`
const MobileList = styled.select`
  -webkit-appearance: listbox;
  @media screen and (min-width: 64em) {
    display: none;
  }
`

class MobileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSelected: ''
    }
  }
  goToEntry = (ev) => {
    navigate( ev.target.value, { state: {currentSelected: ev.target.value} } )
  }
  render() {
    return (
      <Location>
        {({ location }) => (
          <MobileList 
            onChange={this.goToEntry}
            value={location.state ? location.state.currentSelected : ''}
            id="select-one"
          > 
          {this.props.dataL.map( ({node: note }) => (
            <option  key={note.id} value={note.fields.slug}>{note.frontmatter.date}</option>
          ))}
          </MobileList>
        )}
      </Location>
    )
  }
}

const ListMonths = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields:[frontmatter___date], order: DESC },
          filter: { frontmatter: { templateKey: { eq: "logs" } }})
        {
          edges{
            node {
              id
              frontmatter {
                date(formatString: "MMM YYYY")
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => 
      <>
        <MobileMenu dataL={data.allMarkdownRemark.edges} />
        <DesktopList>
        {data.allMarkdownRemark.edges.map( ({node: note }, i) => (
            <li key={note.id}>
              <Link to={note.fields.slug} getProps={isCurrent} className={props.latestPost && i === 0 ? 'active' : ''}>
                <i className="fas fa-arrow-alt-circle-right"></i>
                {note.frontmatter.date}
              </Link>
            </li>
        ))}
        </DesktopList>
      </>
    }
  />
)

isCurrent.propTypes = {
  isCurrent: PropTypes.bool
}

ListMonths.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    })
  })
}

export default ListMonths