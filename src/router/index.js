import Vue from 'vue'
import Router from "vue-router"

import Login from "../views/Login"
import Main from '../views/Main'
import UserList from '../views/user/UserList'
import UserProfile from '../views/user/UserProfile'
import NotFound from '../views/error/NotFound'

//安装路由
Vue.use(Router);
//设置路由
export default new Router({
  mode:'history',//让地址栏不出现#符号（即禁用hash模式）
  routes:[
    {
      path:"/login",
      name:"Login",
      component:Login
    },
    {
      path:'/main',
      name:'Main',
      component:Main,
      children:[
        {path:'/user/profile/:id',name:'UserProfile',component:UserProfile,props:true},
        {path:'/user/list',name:'UserList',component:UserList}
      ]
    },
    {
      path:'/gomain',
      redirect:'/main'
    },
    //配置错误页面
    {
      path:'*',
      component:NotFound
    }




  ]
})
