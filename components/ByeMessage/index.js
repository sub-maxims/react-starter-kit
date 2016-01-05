import React from 'react'

if (process.env.BROWSER) {
    require('./bye.scss');
}

class ByeMessage extends React.Component {
    render() {  
        return (
            <div className='bye-container'>
                <p>Bye world ( lazy loaded )</p>
            </div>
        )
    }
}

module.exports = ByeMessage
