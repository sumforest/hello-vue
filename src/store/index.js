import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
Vue.use(Vuex);

//把四个常量属性暴露出来
export default new Vuex.Store({
  modules:{
    user
  }
})
