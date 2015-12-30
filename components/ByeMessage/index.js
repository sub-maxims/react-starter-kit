import React from 'react'

if (process.env.BROWSER) {
    require('./bye.scss');
}

export default class ByeMessage extends React.Component {
    render() {  
        return (
            <div className='text'>Bye world</div>
        )
    }
}
