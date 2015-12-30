import HelloMessage from './components/HelloMessage/index'
import ByeMessage from './components/ByeMessage/index'

export default {
    path: '/',
    component: HelloMessage,
    childRoutes: [ {
        path: 'about',
        component: ByeMessage
        } 
    ]
}


