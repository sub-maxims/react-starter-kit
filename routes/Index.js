// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import HelloMessage from '../components/HelloMessage/index'

export default {
    path: '/',
    component: HelloMessage,  
    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [ 
                require('./ByeRoute.js') 
            ])
        })
    }
}
