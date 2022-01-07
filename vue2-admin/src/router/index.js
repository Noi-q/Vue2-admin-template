import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 解决重复跳转路由的报错
// 重写push|replace
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location,resolve,reject){
  if(resolve && reject){
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{})
  }
}
VueRouter.prototype.replace = function(location,resolve,reject){
  if(resolve && reject){
    originReplace.call(this,location,resolve,reject)
  }else{
    originReplace.call(this,location,()=>{},()=>{})
  }
}

import LoginPage from '../pages/LoginPage'
import Home from '../pages/Home'

// Account Management
import AccountList from '../pages/AccountManagement/AccountList'
import AccountAdd from '../pages/AccountManagement/AccountAdd'

// Role Management
import RoleList from '../pages/RoleManagement/RoleList'
import RoleAdd from '../pages/RoleManagement/RoleAdd'

const router = new VueRouter({
  mode:'hash',
  routes:[
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      component:LoginPage,
      meta:{}
    },
    {
      path:'/home',
      component:Home,
      meta:{},
      children:[
        // 账号管理
        {
          name:'list',
          path:'list',
          component:AccountList
        },
        {
          name:'add',
          path:'add',
          component:AccountAdd
        },
        // 角色管理
        {
          name:'role_list',
          path:'role_list',
          component:RoleList
        },
        {
          name:'role_add',
          path:'role_add',
          component:RoleAdd
        }
      ]
    }
  ]
})

// router.beforeEach((to,from,next)=>{
//   // console.log(router,to,from,next)
//   if(to.path === 'login'){
//     next()
//   }
// })

export default router