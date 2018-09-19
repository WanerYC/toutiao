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

    <!-- 内容区域 -->
    <!-- <ul class="content" v-show=" index == num">
      <li>lailala</li>
      <li>
        <h5>习近平引领“一带一路”从愿景走向现实</h5>
        <ul class="imgscont">
          <li></li>
        </ul>
        <p>
          <i>央视网新闻</i>
          <i>评论 68</i>
          <i>刚刚</i>
        </p>
      </li>
    </ul> -->
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
    <!-- 底部 -->
    <v-footer :selected='0'></v-footer>
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
      ],
      num: 0,

      newList1:[],
      ishow: 0
    }

  },
  updated () {

  },
  mounted () {
     this.getGoodsList()
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

    }

  }
}
</script>
