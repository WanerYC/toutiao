<template>
  <div id="homes">
    <!-- 这是homes页面 -->
    <!-- <x-header id="header" :right-options="{showMore: true}" @on-click-more="moreList()">今日头条</x-header> -->
    <x-header id="header" :left-options="{showBack: false}">
      今日头条
      <!-- <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon> -->
      <div class="vux-header-left">
        <svg class="icon" aria-hidden="true" style="width: 30px; height: 30px;">
          <use xlink:href="#icon-message"></use>
        </svg>
      </div>

      <div class="vux-header-right">
        <!-- type="ios-search-strong" 加粗的图标 -->
        <x-icon  type="ios-search"  size="35" style="fill:#fff;"></x-icon>
      </div>
    </x-header>

    <!-- 顶部导航栏 -->
    <div class="natTOp pf">
      <tab>
        <!-- :selected="index==0"  使默认第一个显示  -->
        <tab-item active-class="vux-center backcolor" class="vux-center" :selected="index==0" @on-item-click="onItemClick" v-for="(item, index) in navTitlelist" :key="index">{{navTitlelist[index]}}</tab-item>
      </tab>
    </div>

    <!-- 底部 -->
    <v-footer></v-footer>
  </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, Icon, Datetime, PopupPicker, Tab, TabItem, Swiper, SwiperItem, Group } from 'vux'
// 引入iconfont
import icon from './icon.vue'
import '@/assets/css/home.css'
import vFooter from './footer'

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    icon,
    Icon,
    Datetime,
    PopupPicker,
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Group,
    vFooter
  },
  data () {
    return {
      navTitlelist: [
        "推荐",
        "热点",
        "社会",
        "娱乐",
        "科技",
        "体育",
        "财经",
        "军事",
        "国际",
        "时尚"
      ]
    }

  },
  updated () {

  },
  methods: {
    // 导航的点击事件 tab切换事件
    onItemClick (index) {
      console.log('on item click:', index)
    }
  }
}
</script>
