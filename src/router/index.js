import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Hometext from '@/components/hometext'
import HometextO from '@/components/hometext.1'
import User from '@/components/user/user.vue'
import Search from '@/components/search/search.vue'
import Test01 from '@/components/test/test01.vue'
import guangsuH5 from '@/components/h5/guangsu.vue'
import nextTick from '@/components/test/nextclivk.vue'
import Ziguan from '@/page/ziguan/ziguan.vue'
import Yearjiegou from '@/page/ziguan/six/years.vue'
import Tables from '@/page/ziguan/tables.vue'

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
    },
    // 资管页面
    {
      path: '/ziguan',
      name:'ziguan',
      component: Ziguan
    },
    {
      path: '/yearjiegou',
      name: 'yearjiegou',
      component: Yearjiegou
    },
    // 合并单元格测试页面
    {
      path: '/tables',
      name: 'table',
      component: Tables
    },
    {
      path: '/hometext',
      name: 'hometext',
      component: Hometext
    },
    {
      path: '/hometext1',
      name: 'hometext',
      component: HometextO
    }
  ]
})

export default router
