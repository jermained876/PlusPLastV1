import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Login from "../components/Login/login.vue"

import Logout from "../components/Logout/logout.vue"
import Upload from "../components/Upload/upload.vue"

const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/upload', component: Upload }

]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history'
})

export default router