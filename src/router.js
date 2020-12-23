import Vue from 'vue'
// 导入router
import Router from 'vue-router'
// 导入页面文件
import register from './components/register.vue'
import login from './components/login.vue'
import userinfo from './components/userinfo.vue'
import edit from './components/edit.vue'
import Home from './components/Home.vue'

Vue.use(Router)
const router = new Router({
    routes: [{
            path: '/',
            redirect: "Home"
        },
        {
            path: '/register',
            component: register
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/Home',
            component: Home
        },
        {
            path: '/userinfo',
            component: userinfo,
            meta: {
                istoken: true
            }
        },
        {
            path: '/edit',
            component: edit,
            meta: {
                istoken: true
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.istoken == true) {
        router.push('/login')
        Vue.prototype.$msg.fail('请重新登录')
        return
    }
    next()
})

export default router