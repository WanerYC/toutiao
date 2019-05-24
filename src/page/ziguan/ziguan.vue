<template>
  <div>
    <x-header id="header" :left-options="{showBack: false}">资管指标</x-header>

    <!-- 列表 -->
    <div class="list pr">
      <ul class="listul">
        <li>1.资产负债分析</li>
        <ul>
          <li>资产负债表(FOF)</li>
        </ul>
        <li>2.投资端分析</li>
        <ul>
          <li>投资端分析(净值型)</li>
          <li>投资端分析(FOF)</li>
          <li>投资端分析(净值型 + FOF)</li>
        </ul>
        <li>3.负债端分析</li>
        <ul>
          <li>负债端分析(净值型)</li>
        </ul>
        <li>4.流动性分析</li>
        <ul>
          <li>每日头寸安排</li>
          <li>流动性储备分析</li>
        </ul>
        <li>5.活期类产品分析</li>
        <li>6.客户机构分析</li>
        <ul>
          <li @click="showDetail(9)">客户年龄结构分析(净值型)</li>
          <li>客户份额结构分析(净值型)</li>
        </ul>
      </ul>
    </div>

    <!-- 底部 -->
    <v-footer :selected='3'></v-footer>
  </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
import vFooter from '../../components/footer'
export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    vFooter
  },
  data () {
    return {

    }
  },
  methods: {
    showDetail (id) {
      switch (id) {
        case 9:
        this.$router.push({ name: 'yearjiegou'});
        break;
      }
    }
  }
}
</script>

<style>
.hearder {
  width: 100%;
  height: 200px;
  background: red url(../../assets/img/02.jpg) no-repeat;
  background-size: cover;
  /* opacity: 0.5; */
}

.list {
  top: 45px;
  font-size: 0.8rem;
  margin-bottom: 4rem;
}
.listul > li {
  width: 100%;
  background-color: #fff;
  height: 50px;
  padding-left: 1rem;
  /* text-align: center; */
  line-height: 50px;

}

.listul li {
  width: 100%;
  height: 50px;
  padding-left: 1rem;
  /* text-align: center; */
  line-height: 50px;
}
</style>


