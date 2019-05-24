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
import splash from '@/page/splash/splash.vue'
import { resolve } from 'url';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      name: 'splash',
      component: splash
    },
    {
      path: '/splash',
      name: 'splash',
      component: splash
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
    },
    // 预览pdf的测试
    {
      path: '/pdf',
      name: 'Pdf',
      component: resolve => { require(['@/page/pdf/pdf.vue'], resolve)},
      meta:{keepAlive: false}
    },
    {
      path: '/pdfdetail',
      name: 'Pdfdetail',
      component: resolve => { require(['@/page/pdf/pdfdetail.vue'], resolve)},
      meta:{keepAlive: false}
    },
    {
      path: '/toploading',
      name: 'topLoading',
      component: resolve => { require(['@/page/shanglashuaxin/topLoading.vue'], resolve)},
      meta:{keepAlive: false}
    },
    // 上拉刷新
    {
      path: '/uprefresh',
      name: 'upRefresh',
      component: resolve => { require(['@/page/upRefresh/mains.vue'], resolve)},
      meta:{keepAlive: false}
    },
    // {
    //   path: '/helloWorld',
    //   name: 'HelloWorld',
    //   component: resolve => { require(['@/components/HelloWorld.vue'], resolve)},
    //   meta:{keepAlive: false}
    // },
    // {
    //   path: '/pdfmd',
    //   name: 'pdfMd',
    //   component: resolve => { require(['@/components/pdf.md.vue'], resolve)},
    //   meta:{keepAlive: false}
    // }
  ]
})

export default router
