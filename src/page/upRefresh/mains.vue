<template>
  <!-- 这是上拉加载下拉刷新  -->
  <section class="container">
    <x-header id="header" :left-options="{showBack: false}">资管指标</x-header>
    <div class="containers">
      <v-refresh :on-refresh="onRefresh">
        <v-reload :on-infinite-load="onInfiniteLoad" :parent-pull-up-state="infiniteLoadData.pullUpState">
          <ul>
          <li class="info2" v-for="(item,index) in infiniteLoadData.pullUpList" :key="'info2-'+index" >
            <h5> {{item.path}}</h5>
            <p style="color: #666; font-size: 0.3rem;">2019-02-28 {{item.path}} </p>

          </li>
          <!-- <li class="info2" v-for="(item,index) in listdata"  :key="'info2-'+index">{{item.name}}</li>
          <li class="info1" v-for="(item,index) in downdata"  :key="'info1-'+index">{{item.name}}</li> -->
        </ul>
        </v-reload>
      </v-refresh>

    </div>
  </section>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
import DropDownRefresh from './DropDownRefresh'
import PullUpReload from './PullUpReload'
// import { constants } from 'http2';
export default {
  data () {
    return {
      bank_list: [
        {
          iconName: 'zhaoshang.png',
          bankName: '招商银行'
        },
        {
          iconName: 'minsheng.png',
          bankName: '民生银行'
        },
        {
          iconName: 'pingancar.png',
          bankName: '平安联名'
        },
        {
          iconName: 'xingye.png',
          bankName: '兴业银行'
        },
        {
          iconName: 'shanghai.png',
          bankName: '上海银行'
        },
        {
          iconName: 'jiaotong.png',
          bankName: '交通银行'
        },
        {
          iconName: 'guangda.png',
          bankName: '光大银行'
        },
        {
          iconName: 'more.png',
          bankName: '全部银行'
        }
      ],
      hot_centent_left: {
        bankName: '交通银行',
        name: '交行Y-POWER黑卡',
        desc: '额度100%取现',
        imgName: 'jiaohangY-POWER.png'
      },
      hot_c_r_one: {
        bankName: '招商银行',
        name: '招行YOUNG卡',
        desc: '生日月双倍积分',
        imgName: 'zhaohangYOUNG.png'
      },
      hot_c_r_two: {
        bankName: '光大银行',
        name: '光大淘票票公仔联名卡',
        desc: '电影达人必备',
        imgName: 'guangdalianming.png'
      },
      card_progress: {
        name: '办卡进度',
        desc: '让等待随处可见'
      },
      card_activation: {
        name: '办卡激活',
        desc: '让等待随处可见'
      },
      card_list: [
        {
          bankName: '平安联名',
          imgName: 'pinganqiche.png',
          cardName: '平安银行信用卡',
          cardTitle: '平安银行汽车之家联名单币卡',
          cardWordOne: '首年免年费',
          cardWordTwo: '加油88折'
        },
        {
          bankName: '上海银行',
          imgName: 'shanghaitaobao.png',
          cardName: '上海银行信用卡',
          cardTitle: '淘宝金卡',
          cardWordOne: '积分抵现',
          cardWordTwo: '首刷有礼'
        },
        {
          bankName: '华夏银行',
          imgName: 'huaxiaiqiyi.png',
          cardName: '华夏银行信用卡',
          cardTitle: '华夏爱奇艺悦看卡',
          cardWordOne: '送爱奇艺会员',
          cardWordTwo: '商城8折'
        },
        {
          bankName: '浦发银行',
          imgName: 'pufajianyue.png',
          cardName: '浦发银行信用卡',
          cardTitle: '浦发银行简约白金卡',
          cardWordOne: '团购立减',
          cardWordTwo: '酒店优惠 免年费'
        },
        {
          bankName: '中信银行',
          imgName: 'zhongxinbaijin.png',
          cardName: '中信银行信用卡',
          cardTitle: '中信银行i白金信用卡',
          cardWordOne: '首刷有礼',
          cardWordTwo: '双倍积分'
        }
      ],

      // 上拉加载的设置
      infiniteLoadData: {
        initialShowNum: 10, // 初始显示多少条
        everyLoadingNum: 3, // 每次加载的个数
        pullUpState: 0, // 子组件的pullUpState状态
        pullUpList: [], // 上拉加载更多数据的数组
        showPullUpListLength: this.initialShowNum // 上拉加载后所展示的个数
      },

      card_list: [], // 下拉更新数据存放数组
      downdata: []  // 上拉更多的数据存放数组
    }
  },
  created() {
    // this.getList()
  },
  mounted () {
    this.getList()
    console.log(this.card_list)
    this.getStartPullUpState()
    // this.getPullUpDefData()
  },
  methods: {
    getList(){
       let vm = this;
          vm.$http.get('https://api.github.com/repos/typecho-fans/plugins/contents/').then((response) => {
                   vm.card_list = response.data;
                  //  this.getStartPullUpState()
                    this.getPullUpDefData()
                 }, (response) => {
                    console.log('error');
                });
    },
    onInfinite(done) {
      let vm = this;
      vm.$http.get('https://api.github.com/repos/typecho-fans/plugins/contents/').then((response) => {
          vm.counter++;
          vm.pageEnd = vm.num * vm.counter;
          vm.pageStart = vm.pageEnd - vm.num;
          let arr = response.data;
              let i = vm.pageStart;
              let end = vm.pageEnd;
              for(; i<end; i++){
                let obj ={};
                obj["name"] = arr[i].name;
                vm.downdata.push(obj);
                  if((i + 1) >= response.data.length){
                  this.$el.querySelector('.load-more').style.display = 'none';
                  return;
                }
                }
          done() // call done
            }, (response) => {
            console.log('error');
        });
    },
    // 获取上拉加载的初始数据
    getPullUpDefData () {
      this.infiniteLoadData.pullUpList = []
      for (let i = 0; i < this.infiniteLoadData.initialShowNum; i++) {
        this.infiniteLoadData.pullUpList.push(this.card_list[i])
      }
    },

    getStartPullUpState () {
      if (this.card_list.length === this.infiniteLoadData.initialShowNum) {
        // 修改子组件的pullUpState状态
        this.infiniteLoadData.pullUpState = 3
      } else {
        this.infiniteLoadData.pullUpState = 0
      }
    },

    // 上拉一次加载更多的数据
    getPullUpMoreData () {
      this.showPullUpListLength = this.infiniteLoadData.pullUpList.length
      if (this.infiniteLoadData.pullUpList.length + this.infiniteLoadData.everyLoadingNum > this.card_list.length) {
        for (let i = 0; i < this.card_list.length - this.showPullUpListLength; i++) {
          this.infiniteLoadData.pullUpList.push(this.card_list[i + this.showPullUpListLength])
        }
      } else {
        for (let i = 0; i < this.infiniteLoadData.everyLoadingNum; i++) {
          this.infiniteLoadData.pullUpList.push(this.card_list[i + this.showPullUpListLength])
        }
      }
      if (this.card_list.length === this.infiniteLoadData.pullUpList.length) {
        this.infiniteLoadData.pullUpState = 3
      } else {
        this.infiniteLoadData.pullUpState = 0
      }
    },

    // 下拉刷新
    onRefresh (done) {
      // 如果下拉刷新和上拉加载同时使用，下拉时初始化上拉的数据
      this.getStartPullUpState()
      this.getPullUpDefData()
      done() // call done
    },

    // 上拉加载
    onInfiniteLoad (done) {
      console.log('触发上拉')
      if (this.infiniteLoadData.pullUpState === 0) {
        this.getPullUpMoreData()
      }
      done()
    }
  },
  components: {
    'v-refresh': DropDownRefresh,
    'v-reload': PullUpReload,
    XHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.containers {
  margin-top: 2.4rem;
}
li {
  position: relative;
  background-color: #fff;
  padding: 10px;

}
li:after {
    /* content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-image: linear-gradient(0deg, #f00 50%, transparent 50%); */

    content: "  ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    -webkit-transform: scaleY(.5);
    transform:scaleY(.5);
    background-color: #f00;
    /* 如果不用 background-color, 使用 border-top:1px solid #f00; 效果是一样的*/

    /* content: '';
    position: absolute;
    width: 200%;
    height: 1px;
    bottom: 0;
    border-bottom: 1px solid #d6e4ed;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(.5,.5);
    transform: scale(.5,.5);
    -webkit-box-sizing: border-box;
    box-sizing: border-box */
}

</style>
