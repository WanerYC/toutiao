<template>
  <!-- 这是上拉加载下拉刷新  -->
  <section class="container">
    <v-refresh :on-refresh="onRefresh">
    <v-reload :on-infinite-load="onInfiniteLoad" :parent-pull-up-state="infiniteLoadData.pullUpState">
      <div class="bank_lists">
        <div class="bank_box">
          <div class="bank_list" v-for="item in bank_list" :key="item.id">
            <div class="bank_icon"  ></div>
            <span class="bank_name">{{item.bankName}}</span>
          </div>
        </div>
      </div>
      <div class="hot_box">
        <div class="hot_header">
          <span class="hot_name">热门推荐</span>
          <div class="more_box">
            <span class="more_text">查看更多</span>
            <span class="more_icon"></span>
          </div>
        </div>
        <div class="hot_centenrt">
          <div class="hot_centent_left">
            <span class="hot_left_name">{{hot_centent_left.name}}</span>
            <span class="hot_left_desc">{{hot_centent_left.desc}}</span>
            <div class="hot_left_img"  ></div>
          </div>
          <div class="hot_centent_right">
            <div class="hot_right_top">
              <div class="hot_right_text_box">
                <span class="hot_right_name">{{hot_c_r_one.name}}</span>
                <span class="hot_right_desc">{{hot_c_r_one.desc}}</span>
              </div>
              <div class="hot_right_img"  ></div>
            </div>
            <div class="hot_right_bottom">
              <div class="hot_right_text_box2">
                <span class="hot_right_name2">{{hot_c_r_two.name}}</span>
                <span class="hot_right_desc2">{{hot_c_r_two.desc}}</span>
              </div>
              <div class="hot_right_img"  ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="card_state">
        <div class="card_progress border-right">
          <div class="progress_icon"></div>
          <div class="card_text">
            <span class="card_state_name">{{card_progress.name}}</span>
            <span class="card_desc">{{card_progress.desc}}</span>
          </div>
        </div>
        <div class="card_activation">
          <div class="activation_icon"></div>
          <div class="card_text">
            <span class="card_state_name">{{card_activation.name}}</span>
            <span class="card_desc">{{card_activation.desc}}</span>
          </div>
        </div>
      </div>
      <div class="card_order">
        <div class="border_bottom card_content_bottom">
          <div class="hot_header">
            <span class="hot_name">热卡排行</span>
          </div>
        </div>
        <div slot="load-more">
        <li class="card_list" v-for="(item,index) in infiniteLoadData.pullUpList" :key="item.id">
          <div class="card_content" :class="infiniteLoadData.pullUpList.length - 1 != index? 'card_content_bottom':''">
            <div class="card_img"  ></div>
            <div class="card_list_text">
              <p class="card_name">{{item.cardName}}</p>
              <p class="card_title">{{item.cardTitle}}</p>
              <div class="card_words_lists">
                <div class="card_words bor_rad_20">
                  <p class="card_word">{{item.cardWordOne}}</p>
                </div>
                <div v-if="item.cardWordTwo" class="card_words card_words_two bor_rad_20">
                  <p class="card_word">{{item.cardWordTwo}}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        </div>
      </div>
    </v-reload>
    </v-refresh>
  </section>
</template>

<script>
import DropDownRefresh from './DropDownRefresh'
import PullUpReload from './PullUpReload'
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
        initialShowNum: 3, // 初始显示多少条
        everyLoadingNum: 3, // 每次加载的个数
        pullUpState: 0, // 子组件的pullUpState状态
        pullUpList: [], // 上拉加载更多数据的数组
        showPullUpListLength: this.initialShowNum // 上拉加载后所展示的个数
      }
    }
  },
  mounted () {
    this.getStartPullUpState()
    this.getPullUpDefData()
  },
  methods: {
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
      if (this.infiniteLoadData.pullUpState === 0) {
        this.getPullUpMoreData()
      }
      done()
    }
  },
  components: {
    'v-refresh': DropDownRefresh,
    'v-reload': PullUpReload
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "../assets/css/not2rem.css"; */
.container {
  display: flex;
  flex-direction: column;
  width: 750px;
  height: 1334px;
  background-color: #f7f7f7;
}

.bank_lists {
  width: 100%;
  height: 320px;
  margin-top: 0px;
  background-color: #fff;
}

.bank_box {
  display: flex;
  flex-wrap: wrap;
  padding: 2px 7px 42px 7px;
}

.bank_list {
  width: 100px;
  height: 98px;
  margin: 40px 42px 0 42px;
}

.bank_icon {
  width: 56px;
  height: 56px;
  margin: 0 22px 18px;
}

.bank_name {
  display: inline-flex;
  width: 110px;
  height: 24px;
  line-height: 24px;
  font-size: 24px;
  color: #333;
}

.hot_box {
  width: 100%;
  height: 420px;
  margin-top: 10px;
  background: #fff;
}

.hot_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 674px;
  height: 80px;
  margin: 0 30px 0 46px;
}

.hot_name {
  display: inline-flex;
  height: 28px;
  line-height: 28px;
  font-size: 28px;
  color: #333;
}

.more_text {
  display: inline-flex;
  height: 24px;
  line-height: 24px;
  font-size: 24px;
  color: #999;
}

.more_icon {
  display: inline-flex;
  margin-left: 20px;
  width: 11px;
  height: 20px;
  /* background: url("../assets/images/icon/more.png") no-repeat; */
  background-size: 100%;
}

.hot_centenrt {
  display: flex;
  flex-direction: row;
  width: 710px;
  height: 320px;
  margin: 0 20px 20px 20px;
}

.hot_centent_left {
  flex-direction: column;
  width: 350px;
  height: 320px;
  background: #f7f7f7;
}

.hot_left_name {
  display: inline-flex;
  width: 282px;
  height: 24px;
  margin: 50px 34px 0 34px;
  font-size: 24px;
  line-height: 24px;
  color: #333;
}

.hot_left_desc {
  display: inline-flex;
  width: 282px;
  height: 20px;
  margin: 12px 34px 0 34px;
  font-size: 20px;
  line-height: 20px;
  color: #999;
}

.hot_left_img {
  width: 220px;
  height: 142px;
  margin-left: 34px;
  margin-top: 34px;
}

.hot_centent_right {
  flex-direction: column;
  width: 350px;
  height: 320px;
  margin-left: 10px;
}

.hot_right_top {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 156px;
  background: #f7f7f7;
}

.hot_right_text_box {
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 58px;
  margin: 49px 20px 0 20px;
}

.hot_right_name {
  display: inline-flex;
  width: 100%;
  height: 24px;
  line-height: 24px;
  font-size: 24px;
  color: #333;
}

.hot_right_desc {
  display: inline-flex;
  margin-top: 10px;
  width: 100%;
  height: 24px;
  line-height: 24px;
  font-size: 24px;
  color: #999;
}

.hot_right_img {
  width: 110px;
  height: 70px;
  margin-top: 43px;
}

.hot_right_bottom {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 156px;
  margin-top: 8px;
  background: #f7f7f7;
}

.hot_right_text_box2 {
  display: flex;
  flex-direction: column;
  width: 180px;
  margin: 31px 20px 0 20px;
}

.hot_right_name2 {
  display: inline-flex;
  width: 100%;
  height: 58px;
  line-height: 30px;
  font-size: 24px;
  color: #333;
}

.hot_right_desc2 {
  display: inline-flex;
  margin-top: 12px;
  width: 100%;
  height: 24px;
  line-height: 24px;
  font-size: 24px;
  color: #999;
}

.card_state {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 128px;
  margin-top: 10px;
  background-color: #fff;
}
.card_progress {
  display: inline-flex;
  width: 327px;
  height: 88px;
  margin: 20px 0 20px 48px;
}
.progress_icon {
  width: 48px;
  height: 48px;
  margin: 20px 0;
  /* background: url("../assets/images/icon/search.png") no-repeat; */
  background-size: 100%;
}
.activation_icon {
  width: 48px;
  height: 48px;
  margin: 20px 0;
  /* background: url("../assets/images/icon/activation.png") no-repeat; */
  background-size: 100%;
}
.card_text {
  width: 228px;
  height: 66px;
  margin: 11px 20px 11px 30px;
}
.card_state_name {
  display: inline-flex;
  width: 100%;
  height: 28px;
  line-height: 28px;
  font-size: 28px;
  color: #333;
}
.card_desc {
  display: inline-flex;
  width: 100%;
  height: 22px;
  line-height: 22px;
  font-size: 22px;
  margin-top: 16px;
  color: #999;
}
.card_activation {
  display: inline-flex;
  width: 326px;
  height: 88px;
  margin: 20px 0 20px 48px;
}

.card_order {
  width: 100%;
  height: auto;
  margin-top: 10px;
  background-color: #fff;
}
.border_bottom {
  width: 100%;
  height: 80px;
}
.card_list {
  width: 100%;
  height: 228px;
  list-style-type: none;
}
.card_content {
  display: flex;
  flex-direction: row;
  width: 700px;
  height: 228px;
  margin-left: 50px;
}
.card_img {
  width: 186px;
  height: 120px;
  margin: 54px 0 54px 20px;
}
.card_list_text {
  flex-direction: column;
  width: 386px;
  height: 124px;
  margin: 52px 34px 52px 74px;
}
.card_name {
  width: 100%;
  height: 28px;
  line-height: 28px;
  font-size: 28px;
  color: #333;
}
.card_title {
  width: 100%;
  height: 24px;
  margin-top: 20px;
  line-height: 24px;
  font-size: 24px;
  color: #666;
}
.card_words_lists {
  display: flex;
  flex-direction: row;
}
.card_words {
  height: 36px;
  margin-top: 16px;
  background-color: #e8ca88;
}
.card_word {
  height: 20px;
  padding: 8px 18px;
  line-height: 20px;
  font-size: 20px;
  color: #4b4b4b;
}
.card_words_two {
  margin-left: 20px;
}
</style>
