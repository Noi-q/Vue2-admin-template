
import VueRouter from 'vue-router'

import LoginPage from '../pages/LoginPage'
import Home from '../pages/Home'

// Account Management
import AccountList from '../pages/AccountManagement/AccountList'
import AccountAdd from '../pages/AccountManagement/AccountAdd'

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
        {
          path:'list',
          component:AccountList
        },
        {
          path:'add',
          component:AccountAdd
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