// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import Navigation from '../components/Navigation/index'
import HelloMessage from '../components/HelloMessage/index'

export default {
    path: '/',
    component: Navigation,  
    getChildRoutes(location, cb) {
        require.ensure([], (require) => {
            cb(null, [ 
                require('./ByeRoute.js') 
            ])
        })
    },
    indexRoute: {
        component: HelloMessage
    }
}
