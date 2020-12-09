import Vue from 'vue'
// 导入router
import Router from 'vue-router'
// 导入页面文件
import userinfo from './components/userinfo.vue'
import register from './components/register.vue'
import login from './components/login.vue'

Vue.use(Router)
const router = new Router({
    routes: [{
            path: '',
            redirect: "register"
        },
        {
            path: '/userinfo',
            component: userinfo
        },
        {
            path: '/register',
            component: register
        },
        {
            path: '/login',
            component: login
        },
    ]
})
export default router