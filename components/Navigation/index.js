import React from 'react'
import { Link } from 'react-router'

if (process.env.BROWSER) {
    require('./navigation.scss');
}

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <ul className='navbar'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bye">Bye message</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

module.exports = Navigation
