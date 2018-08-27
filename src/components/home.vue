<template>
  <div id="homes">
    <!-- 这是homes页面 -->
    <x-header id="header" :right-options="{showMore: true}" @on-click-more="moreList()">观察</x-header>

    <!-- 右侧 更多按钮 弹出框 -->
    <div class="modle-wrap pf" v-if="morelists">
      <!-- 显示更多功能 -->
      <ul>
        <li @click="about">
          <x-icon type="ios-information-outline" size="20" fill="#fff"></x-icon>
          <span type="primary">关于</span>
        </li>
        <li>
          <x-icon type="ios-help-outline" size="20" fill="#fff"></x-icon>
          <span type="primary">服务帮助</span>
        </li>
        <li>
          <x-icon type="ios-help-outline" size="20" fill="#fff"></x-icon>
          <span type="primary">用户反馈</span>
        </li>
         <li>
          <!-- <iconSvg icon-style="style" icon-class="drxx95"></iconSvg> -->
          <x-icon type="ios-help-outline" size="20" fill="#fff"></x-icon>
          <span type="primary">指标展示项设置</span>
        </li>
         <li>
          <x-icon type="ios-help-outline" size="20" fill="#fff"></x-icon>
          <span type="primary">指标组设置</span>
        </li>
      </ul>
    </div>

    <!-- 日期 / 机构选择 -->
    <div class="tool flex pf">
      <!-- 这里是时间共计 -->
      <!-- 日期 -->
      <div class="dates flex">
        <x-icon type="ios-information-outline" size="20" fill="#999"></x-icon>
        <group class="dates_g">
          <datetime name="datatime"
            v-model="timevalue"
            @on-change="change"
            @on-cancel="log('cancel')"
            @on-confirm="onConfirm"
            @on-hide="log('hide', $event)"></datetime>
        </group>
      </div>
      <!-- 机构 -->
      <div class="org flex">
        <x-icon type="ios-information-outline" size="20" fill="#999"></x-icon>
        <!-- 机构分布 -->
        <group class="org_g">
           <!-- :title="orgtitle"  -->
          <popup-picker :placeholder="orgtitle" :data="list3" :columns="2" @on-change="change1" v-model="orgvalue1" :show-name="showname"></popup-picker>
        </group>
      </div>
    </div>

    <!-- 顶部导航栏 -->
    <div class="natTOp pf">
      <!-- <tab>
        <tab-item selected @on-item-click="onItemClick">零食关键指标</tab-item>
        <tab-item @on-item-click="onItemClick">关键日指标</tab-item>
        <tab-item @on-item-click="onItemClick">对公指标</tab-item>
        <tab-item @on-item-click="onItemClick">贸金关键指标</tab-item>
        <tab-item @on-item-click="onItemClick">电子银行关键指标</tab-item>
        <tab-item @on-item-click="onItemClick">关键经营指标</tab-item>
        <tab-item @on-item-click="onItemClick">信用卡关键指标</tab-item>
      </tab> -->
      <tab>
        <!-- :selected="index==0"  使默认第一个显示  -->
        <tab-item active-class="vux-center backcolor" class="vux-center" :selected="index==0" @on-item-click="onItemClick" v-for="(item, index) in navTitlelist" :key="index">{{navTitlelist[index]}}</tab-item>
      </tab>
    </div>

    <!-- 顶部导航栏1 -->
    <div class="natTOp1 pf">
      <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper v-model="index" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list2" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
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
const list = () => ['精选', '美食', '电影', '酒店', '外卖']
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
      morelists: false,
      showMenus: false,
      timevalue: '2015-11-12',
      orgtitle: '联动显示文字',
      list3: [{
          name: '中国',
          value: 'china',
          parent: 0
        }, {
          name: '美国',
          value: 'USA',
          parent: 0
        }, {
          name: '广东',
          value: 'china001',
          parent: 'china'
        }, {
          name: '广西',
          value: 'china002',
          parent: 'china'
        }, {
          name: '美国001',
          value: 'usa001',
          parent: 'USA'
        }, {
          name: '美国002',
          value: 'usa002',
          parent: 'USA'
        }, {
          name: '广州',
          value: 'gz',
          parent: 'china001'
        }, {
          name: '深圳',
          value: 'sz',
          parent: 'china001'
        }, {
          name: '广西001',
          value: 'gx001',
          parent: 'china002'
        }, {
          name: '广西002',
          value: 'gx002',
          parent: 'china002'
        }, {
          name: '美国001_001',
          value: '0003',
          parent: 'usa001'
        }, {
          name: '美国001_002',
          value: '0004',
          parent: 'usa001'
        }, {
          name: '美国002_001',
          value: '0005',
          parent: 'usa002'
        }, {
          name: '美国002_002',
          value: '0006',
          parent: 'usa002'
        }],
      orgvalue: [],
      orgvalue1: [],
      navTitlelist: [
        "零食关键指标",
        "关键日指标",
        "对公指标",
        "贸金关键指标",
        "电子银行关键指标",
        "关键经营指标",
        "信用卡关键指标"
      ],
      index: 0,
      demo2: '精选',
      list2: list(),
      showname: true
    }

  },
  updated () {
    this.change1();
  },
  methods: {
    moreList () {
      this.morelists = !this.morelists;
    },
    about () {
      // this.$router.push('/search')
      this.$router.push({ name: 'search'})
    },
    change (value) {
      console.log('change', value)
    },
    log (str1, str2 = '') {
      console.log(str1, str2)
    },
    onConfirm (val) {
      console.log('on-confirm arg', val)
      console.log('current value', this.timevalue)
    },
    onItemClick (index) {
      console.log('on item click:', index)
    },
    change1 () {
      // alert('a');
      this.orgvalue = ''
    }
  }
}
</script>
