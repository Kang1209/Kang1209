import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

const originVueRouterPush =  VueRouter.prototype.push

console.log(originVueRouterPush);
  

Vue.use(VueRouter)

const router = new VueRouter({
      mode:'history',
      routes:[
            {
                  path:'/home',
                  component:Home
            },
            {
                  path:'/login',
                  component:Login
            },
            {
                  path:'/register',
                  component:Register
            },
            {
                  path:'/search',
                  component:Search
            },
            //重定向
            {
                  path:'/',
                  redirect:'/home'
            },
            
      ]
})

export default router