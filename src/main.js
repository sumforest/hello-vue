import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Vuex from 'vuex'
import store from './store'

// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入axios
import axios from 'axios'
Vue.prototype.axios = axios;

//引入router的配置
import router from './router'
//每个路由前的方法（类似拦截器）
router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem('isLogin');
  if (to.path == '/logout') {
    sessionStorage.clear();
    next({path: '/login'});
  }
  else if (to.path == '/login') {
    if (isLogin !=null){
      next({path: '/main'});
    }
  }
  else if (isLogin == null){
    next({path:'/login'});
  }
  //放行
  next();
});

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueRouter);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
