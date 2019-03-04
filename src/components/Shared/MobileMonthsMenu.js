import React from 'react'
import { Location, navigate } from '@reach/router';
import styled from 'styled-components'

const MobileList = styled.select`
  -webkit-appearance: menulist;
  -moz-appearance: menulist;
  appearance: menulist;
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
    navigate(ev.target.value, { state: { currentSelected: ev.target.value } })
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
            {this.props.data.map(({ node: log }) => (
              <option key={log.id} value={log.url.current}>{log.publishedAt}</option>
            ))}
          </MobileList>
        )}
      </Location>
    )
  }
}

export default MobileMenu;