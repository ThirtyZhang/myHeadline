import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入
import 'element-ui/lib/theme-chalk/index.css' // 引入文件

Vue.config.productionTip = false
Vue.use(ElementUI) // 注册
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
