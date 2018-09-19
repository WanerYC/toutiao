import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import User from '@/components/user/user.vue'
import Search from '@/components/search/search.vue'
import Test01 from '@/components/test/test01.vue'
import guangsuH5 from '@/components/h5/guangsu.vue'
import nextTick from '@/components/test/nextclivk.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path:'/home',
      name: 'home',
      component: Home
    },
    {
      path:'/user',
      name: 'user',
      component: User
    },
    {
      path: '/h5',
      name: 'h5',
      component: guangsuH5
    },
    // 语音搜索
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    // 测试的页面 路由
    {
      path: '/test01',
      name: 'test01',
      component: Test01
    },
    // $nextTick 的测试
    {
      path: '/nextTick',
      name: 'nextTick',
      component: nextTick
    }
  ]
})

export default router
