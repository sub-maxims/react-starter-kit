import React from 'react'
import { Link } from 'react-router'

export default class HelloMessag extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About (lazy loaded)</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}


