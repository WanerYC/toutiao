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

      <div class="vux-header-right"  @click="search">
        <!-- type="ios-search-strong" 加粗的图标 -->
        <x-icon  type="ios-search"  size="35" style="fill:#fff;"></x-icon>
      </div>
    </x-header>

    <!-- 顶部导航栏 -->
    <div class="natTOp pf">
      <tab>
        <!-- :selected="index==0"  使默认第一个显示  -->
        <tab-item
          active-class="vux-center backcolor"
          class="vux-center"
          :selected="index==0"
          @on-item-click="onItemClick"
          v-for="(item, index) in navTitlelist"
          :key="index">
          {{navTitlelist[index]}}
        </tab-item>
      </tab>
    </div>


    <ul  class="content" v-for="(item, index) in navTitlelist" :key="index" v-show=" index == num">
      <li>
        {{ navTitlelist[index] }}
        <ul>
          <li v-for="(item, index) in newList1" :key="index" v-show="index == ishow">
            <h5>{{ newList1[index].posterScreenName }}</h5>
            <span>{{ newList1[index].content }}</span>
            <p>
              <i>央视网新闻</i>
              <i>评论 68</i>
              <i>{{ newList1[index].publishDateStr }}</i>
            </p>
          </li>
        </ul>
      </li>
    </ul>

    <!-- 多层级表格 -->
    <table border="1" cellspacing="0" cellpadding="10" width="100%" class="table"  id="tablesth">
      <!-- <thead :class="{tablesth: isFixed}"> -->
      <thead>
        <tr class="firstHead">
          <th colspan="1" rowspan="2">系列</th>
          <th colspan="1" rowspan="2">产品</th>
          <th colspan="4">存量客户年龄结构</th>
        </tr>
        <tr class="twoHead">
          <th>0-20</th>
          <th>20-40</th>
          <th>40-60</th>
          <th>>60</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="3">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td rowspan="1">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
         <tr>
          <td rowspan="3">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td rowspan="1">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
         <tr>
          <td rowspan="3">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td rowspan="1">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
         <tr>
          <td rowspan="3">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td rowspan="1">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
         <tr>
          <td rowspan="3">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td rowspan="1">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
         <tr>
          <td rowspan="3">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td rowspan="1">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
         <tr>
          <td rowspan="3">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td rowspan="1">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
         <tr>
          <td rowspan="3">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td rowspan="1">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
         <tr>
          <td rowspan="3">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td rowspan="1">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
         <tr>
          <td rowspan="3">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td rowspan="1">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
         <tr>
          <td rowspan="3">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>
        <tr>
          <td rowspan="1">阳光红</td>
          <td>EB1333精英荟萃1期</td>
          <td>20万</td>
          <td>60万</td>
          <td>100万</td>
          <td>看着办</td>
        </tr>

      </tbody>
    </table>

    <!-- 简单表格 -->
    <!-- <x-table style="text-align:center; background-color: skyblue; margin-top: 15px" :cell-border="false">
      <thead :class="{liveDiv: true ,sticky: isStic}">
        <tr>
          <th>这是</th>
          <th>表头</th>
          <th>应该</th>
          <th>顶部</th>
          <th>固定</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
         <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>金钱</td>
        </tr>
        <tr>
          <td>时间</td>
          <td>就是</td>
          <td>金钱</td>
          <td>金钱</td>
          <td>命运</td>
        </tr>
      </tbody>
    </x-table> -->

    <!-- 底部 -->
    <v-footer :selected='0'></v-footer>
  </div>
</template>

<script>
import { XHeader, Actionsheet, XTable, TransferDom, ButtonTab, ButtonTabItem, Icon, Datetime, PopupPicker, Tab, TabItem, Swiper, SwiperItem, Group } from 'vux'
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
    vFooter,
    XTable
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
      ],
      num: 0,

      newList1:[],
      ishow: 0,
      isFixed: true,
      navh: 0,
      isStic: false
    }

  },
  updated () {

  },
  mounted () {
     this.getGoodsList()
      // window.addEventListener('scroll', this.handleScroll)
      // this.navh = document.querySelector('.natTOp').clientHeight + document.querySelector('.natTOp').offsetTop

      window.addEventListener('scroll', this.navChangeArea("liveDiv", 100))
      window.addEventListener('touchmove', this.navChangeArea("liveDiv", 100))
  },
  methods: {
    // 导航的点击事件 tab切换事件
    onItemClick (index) {
      console.log('on item click:', index)
      this.num = index
      console.log(this.num)
      this.ishow = this.num
    },
    // 读取json文件
    getGoodsList () {
      this.$http.get('static/data.json').then((res) => {
        //赋值
        var data = res.data.data;
        // console.log(res, data)
        this.newList1 = data;
        // console.log(data.index)
      })
    },
    search () {
      alert('aaa')
      // var audioCtx;
      try {
        audioCtx=new (window.AudioContext || window.webkitAudioContext)();
      }
      catch(e) {
        console.log("Your browser does not support AudioContext!");
      }
      navigator.getUserMedia=(navigator.getUserMedia || navigator.webkitGetUserMedia ||
								navigator.mozGetUserMedia || navigator.msGetUserMedia);
		  if(navigator.getUserMedia) {
        navigator.getUserMedia({
            audio:true,
            // video: { width: 1280, height: 720 }
        },
        function(stream) {
          var source=audioCtx.createMediaStreamSource(stream);
          var biquadFilter=audioCtx.createBiquadFilter();
          biquadFilter.type="lowshelf";
          biquadFilter.frequency.value=1000;
          biquadFilter.gain.value=25;
          source.connect(biquadFilter);
          biquadFilter.connect(audioCtx.destination);
        },
        function(err) {
          console.log("The following gUM error occured: "+err);
        });
      } else {
      	console.log("getUserMedia not supported on your browser!");
      }

    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log('滚动距离'+ scrollTop)
      var offsetTop = document.querySelector('#tablesth').offsetTop - this.navh
      console.log('元素距离顶部距离' + offsetTop)
      if (scrollTop > offsetTop) {
        // alert('潮了')
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
    navChangeArea(message, height) {
      // var liveDiv = $("#" + message).length ? $("#" + message) : $("." + message);
      var liveDiv = document.querySelector('.message')
      if(/android/i.test(navigator.userAgent)){
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          if (scrollTop < height) {
            //  该固定
            // alert('该固定')
              liveDiv.css("position", "relative");
          } else {
              liveDiv.css("position", "fixed");
          }
      }
      if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
          this.isStic = true
      }
    }

  }
}
</script>

<style>
 .liveDiv {top: 0;width: 100%;height: 50px;background: green;}
 .sticky {position: -webkit-sticky;position: -moz-sticky;position: -ms-sticky;position: -o-sticky;position: sticky;}
</style>

