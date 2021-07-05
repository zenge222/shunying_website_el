import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.css' // global css
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
import GeminiScrollbar from 'vue-gemini-scrollbar'
Vue.use(GeminiScrollbar)
Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.pushTo = function (path, parameter = {}) {
  router.push({
    name: path,
    params: parameter
  });
};
Vue.prototype.replaceTo = function (path, parameter = {}) {
  router.replace({
    name: path,
    params: parameter
  });
};
router.afterEach(() => {
  window.scrollTo(0,0);
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
