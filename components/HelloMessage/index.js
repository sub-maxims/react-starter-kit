import React from 'react'
import { Link } from 'react-router'

if (process.env.BROWSER) {
    require('./hello.scss');
}

export default class HelloMessage extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1 className='header'>Hello world</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About (lazy loaded)</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}


