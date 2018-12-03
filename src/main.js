// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import FastClick from 'fastclick'
// import VueRouter from 'vue-router'
import App from './App'
import router from './router/index.js'
import './assets/css/base.css'
import { AlertPlugin, ToastPlugin, DatetimePlugin } from 'vux'
import './assets/iconfont/iconfont.js'//引入iconfont.js
import './assets/iconfont.js'
import axios from 'axios'

// 引入swiper动画 的css / js
// import './assets/css/animate.min.css'
// import './assets/js/swiper.animate1.0.3.min'

// Vue.use(ElementUI);

// 注册h5的 awesome-swiper 插件
import vueAwesomeSwiper from 'vue-awesome-swiper'
// 引入样式
import 'swiper/dist/css/swiper.css'
// 全局注册
Vue.use(vueAwesomeSwiper)

Vue.prototype.$http = axios

Vue.use(AlertPlugin)
Vue.use(DatetimePlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
