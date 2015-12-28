import HelloMessage from './components/HelloMessage'
import ByeMessage from './components/ByeMessage.js'

export default {
    path: '/',
    component: HelloMessage,
    childRoutes: [ {
        path: 'about',
        component: ByeMessage
        } 
    ]
}


