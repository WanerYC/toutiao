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

    <!-- 动态渲染表格 -->
    <div class="tables" id="contenter">
      <div id="theadDiv" style="z-index: 999; background-color: red; color: #fff;">
        <x-table id="grid1">
          <thead id="fixBax">
            <tr>
              <th v-for="(item, index) in allTable.ass_titles" :key="index" :rowspan="item.cospan ? 1 : 2" :colspan="item.cospan? item.cospan : 1">
                <span v-html="item.name"></span>
              </th>
            </tr>
            <tr>
              <th v-for="(item, index) in allTable.libil_title" :key="index">
                <span v-html="item.name"></span>
              </th>
            </tr>
          </thead>
        </x-table>

      </div>
      <div id="tbodyDiv">
        <x-table  id="grid1">
          <tbody>

            <tr v-for="(item,index) in dealTable" :key="index">
              <td v-if="item.ASSET && item.ifSame" :rowspan="item.rowsoan">{{item.ASSET}}</td>
              <td v-if="item.titles">{{item.titles}}</td>
              <td v-if="item.AVUG_rate">{{item.AVUG_rate}}</td>
              <td v-if="item.InCON">{{item.InCON}}</td>
              <td v-if="item.LABT">{{item.LABT}}</td>
              <td v-if="item.LABT">{{item.Sas}}</td>
              <td v-if="item.LABT">{{item.LABT}}</td>
            </tr>
          </tbody>

        </x-table>
      </div>
    </div>


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
      scrollToptable: 0,
      allTable: {
        ass_datass: []
      },
      dealTable: [],
      isFx: false,
      isRela: false,
      isSti: false
    }

  },
  updated () {

  },
  mounted () {
    this.getGoodsList()
    this.getTablist()

    this.navh = document.querySelector('#header').clientHeight
    var sli = document.querySelector('#tbodyDiv').scrollLeft
    // console.log(this.navh)
    // window.addEventListener('scroll', this.handleScroll)
    // window.addEventListener('touchmove', this.handleScroll)

    document.querySelector('#tbodyDiv').addEventListener('scroll', function () {
      // alert('12')
      document.querySelector('#theadDiv').scrollLeft = document.querySelector('#tbodyDiv').scrollLeft;
    });

  },
  methods: {
    // 导航的点击事件 tab切换事件
    onItemClick (index) {
      console.log('on item click:', index)
      this.num = index
      console.log(this.num)
      this.ishow = this.num
    },
    // 读取内容区域json文件
    getGoodsList () {
      this.$http.get('static/data.json').then((res) => {
        //赋值
        var data = res.data.data;
        // console.log(res, data)
        this.newList1 = data;
        // console.log(data.index)
      })
    },
    // 读取表格的json
    getTablist () {
      this.$http.get('static/table.json').then( (res) => {
        console.log(res);
        // return
        // var res = res.data
        this.allTable = res.data.data;
        this.ass_datass = this.allTable.ass_datass;
        this.dealData()
        // console.log(this.dealTable)
      })
    },
    dealData(){
      var length = this.ass_datass.length;
      for (var i = 0;i<length;i++){
          if( typeof this.ass_datass[i].ifSame == "undefined"){
              this.ass_datass[i].ifSame = true;
          }
          for(var j = i+1;j<length;j++){
              if(this.ass_datass[i].ASSET == this.ass_datass[j].ASSET){
                  this.ass_datass[j].ifSame = false;
              }
          }

          // this.ass_datass[i].ASSET == "" ? " " : this.ass_datass[i].ASSET
          if(this.ass_datass[i].ASSET == "") {
            this.ass_datass[i].ASSET = " "
          }

          // for (var index in  this.ass_datass[i]){
          //   // console.log(this.ass_datass[i][index]);
          //   // this.ass_datass[i][index] == "" ? " " : this.ass_datass[i][index]
          //   if(this.ass_datass[i][index] == "") {
          //     this.ass_datass[i][index] = " "
          //     console.log(this.ass_datass[i][index])
          //   }
          //   // console.log(index);
          // }

      }
      this.dealTable = this.ass_datass;
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
      // var liveDiv = document.querySelector('.liveDiv')
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var offsetTopTab = document.querySelector('.liveDiv').offsetTop - this.navh
      if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
          this.isSti = true
      }
      // if(/android/i.test(navigator.userAgent)){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > offsetTopTab) {
              this.isFx = true
            } else {
              this.isFx = false
            }
      // }

    },


  }
}
</script>

<style scoped>
  .isRelative {
    position: relative;
  }
  .isFixed {
    position: fixed;
  }
 .liveDiv {
  top: 0;
  width: 100%;
  /* height: 50px; */
  background: orange;
  }
  .sticky {
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;
    position: sticky;
    top: 0.8rem;
  }
  .hidden {
    overflow: hidden;
  }
  .tables {
    margin-top: 20px;

    padding-bottom: 150px;

    background-color: #fff;

    font-size: 0.5rem;

    width: 100%;

    height: 100%;

  }
  .table{
    width:100%;
    max-width: 100%;
  }
  .table>thead>tr{
      background: #edf7ff;
  }
  .table>thead>tr>th {
      white-space: nowrap;
      padding: 8px;
      line-height: 1.42857143;
  }

  .table>tbody>tr:nth-child(odd){
        background: #fff;
    }
  .table>tbody>tr:nth-child(even){
      background: #f7f7f7;
  }
  .table>tbody>tr:hover{
      background: #e3ecfc;
  }

  .table-cont{
      /**make table can scroll**/
      max-height: 500px;
      overflow: auto;
      /** add some style**/
      /*padding: 2px;*/
      background: #ddd;
      /* margin: 20px 10px;
      border: 1px solid #ddd; */
  }
</style>

<style>
  /* 滑动表格的样式 */
  #contenter {
    position: relative;
    /* width: 800px; */
    height: 650px;
    margin: auto;
    background-color: white;
    border: 1px solid black;
    overflow: auto;
    margin-bottom: 100px;
  }

  #theadDiv {
    position: absolute;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  #tbodyDiv {
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
}

#grid1, #grid2 {
  width: 900px;
  /* border: 1px solid gray; */
}
table > thead > tr > th, table > tbody > tr > td {
    width: 3%!important;
}
td, th {
    height: 35px;
    text-align: center;
}
</style>

