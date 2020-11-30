import Vue from 'vue'
import App from './App.vue'
// 导入router.js文件
import router from './router'
import http from './http'
// 引入组件vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false


Vue.prototype.$http = http
// 把封装好的http文件引入，方便局部应用

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')