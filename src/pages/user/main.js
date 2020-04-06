import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "../../store"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../../assets/font/iconfont.css'
import iconfont from '../../assets/font/iconfont'

Vue.use(ElementUI);
Vue.use(iconfont);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
