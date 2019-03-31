import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Categorys.vue'
import Found from '../pages/Found/Found.vue'
import Shop from '../pages/Shop/Shops.vue'
import Personal from '../pages/Personal/Pernson.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
       path:'/home',
       component:Home,
    },
    {
      path:'/category',
      compoent:Category,
    },
    {
      path:'/found',
      compoent:Found,
    },
    {
      path:'/shop',
      compoent:Shop,
    },
    {
      path:'/personal',
      compoent:Personal,
    },
    {
      path:'/',
      redirect:'/home'
    },
  ],
  mode: 'history',
})
