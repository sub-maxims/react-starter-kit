import React from 'react'

if (process.env.BROWSER) {
    require('./bye.scss');
}

class ByeMessage extends React.Component {
    render() {  
        return (
            <div className='text'>Bye world</div>
        )
    }
}

module.exports = ByeMessage
