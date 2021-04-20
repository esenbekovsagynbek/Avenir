import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Second from './pages/Second'

Vue.use(Router) 

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path:'/second',
            component: Second
        }
    ]
})