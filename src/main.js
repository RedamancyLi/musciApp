import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router'
import 'common/stylus/index.styl'

import VueLazyLoad from 'vue-lazyload'

// 移动端300s延迟
import fastclick from 'fastclick'

Vue.config.productionTip = false

// 绑定到body 上 所有点击没有300ms的延迟
fastclick.attach(document.body)

Vue.use(VueLazyLoad,{
  loading:require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
