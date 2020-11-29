import Vue from 'vue'
// 导入router
import Router from 'vue-router'
// 导入页面文件
import HelloWorld from './components/HelloWorld.vue'
import register from './components/register.vue'

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '',
            redirect: "register"
        },
        {
            path: '/HelloWorld',
            component: HelloWorld
        },
        {
            path: '/register',
            component: register
        },
    ]
})
export default router