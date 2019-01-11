import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueGoodTablePlugin from 'vue-good-table';
import 'swiper/dist/css/swiper.css';
import 'vue-good-table/dist/vue-good-table.css';
Vue.use(ElementUI, { size: 'small' }, VueGoodTablePlugin);
Vue.use(VueAwesomeSwiper);
Vue.use(VueGoodTablePlugin);
Vue.prototype.baseURL = process.env.API_ROOT; //配置全局变量判断当前处于开发环境or生产环境
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
