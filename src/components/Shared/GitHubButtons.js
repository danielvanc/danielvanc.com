import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'github-buttons'
// let render;

export default class GitHubButton extends React.Component {
  render () {
    return React.createElement('span', null, React.createElement('a', this.props, this.props.children))
  }
  componentDidMount () {
    // render = require('github-buttons');
    render(this._ = ReactDOM.findDOMNode(this).firstChild)
  }
  UNSAFE_componentWillUpdate () {
    ReactDOM.findDOMNode(this).replaceChild(this._, ReactDOM.findDOMNode(this).firstChild)
  }
  componentDidUpdate () {
    render(this._ = ReactDOM.findDOMNode(this).firstChild)
  }
}