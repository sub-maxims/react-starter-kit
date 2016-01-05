import React from 'react'

if (process.env.BROWSER) {
    require('./hello.scss');
}

class HelloMessage extends React.Component {
    render() {  
        return (
            <div className='hello-container'>
                <p>Hello world</p>
            </div>
        )
    }
}

module.exports = HelloMessage
