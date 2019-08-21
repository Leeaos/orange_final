import Vue from 'vue'
import Router from 'vue-router'
import mine from './mineRouter'
import home from './homeRouter'
import upload from './uploadRouter'
Vue.use(Router)

const routes = [
    home,
    mine,
    upload,
    {
        path:'/',
        redirect:'/home'
    }
]

export default new Router({
    mode:'history',
    routes
})
