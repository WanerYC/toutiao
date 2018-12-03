<template>
  <div>
    <x-header id="header" >客户年龄结构分析（净值型）</x-header>

    <!-- 表单 -->
    <!-- <div class="table pr">
      <table border="1" cellspacing="0" cellpadding="10" width="100%">
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

        </tbody>
      </table>
    </div> -->

    <!-- 这是时间的控件占位 -->
    <div class="time">
      时间控件占位
    </div>
    <!-- 动态获取 -->
    <div id="contenter">
      <div id="theadDiv">
        <x-table id="grid1">
          <thead>
            <tr>
              <th v-for="(item, index) in allData.ass_titles" :key="index" :colspan="item.cospan" :rowspan="item.rowspan" :class="'thds' + index">
                {{ item.name }}
              </th>
            </tr>
            <tr>
            <th v-for="(item, index) in allData.libil_title" :key="index"  :class="'thd' + index">
              {{ item.name }}
            </th>
          </tr>
          </thead>
        </x-table>
      </div>
      <div id="tbodyDiv">
        <x-table id="grid2">
          <tbody>
            <tr  v-for="(item, index) in dealTable" :key="index">
              <td style="width:20%" :rowspan="item.rowsoan" v-if="item.titles && item.ifSame"> {{ item.ASSET }} </td>
              <td style="width:20%"> {{ item.titles }} </td>
              <td style="width:12%"> {{ item.AVUG_rate }} </td>
              <td style="width:12%"> {{ item.END_balance }} </td>
              <td style="width:12%"> {{ item.InCON }} </td>
              <td style="width:12%"> {{ item.InCON }} </td>
              <td style="width:12%"> {{ item.InCON }} </td>
            </tr>
          </tbody>
        </x-table>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, XTable } from 'vux'
export default {
  data() {
    return {
      allData: {
        ass_titles: [],
        ass_datas: []
      },
      dealTable: []
    }
  },
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    XTable
  },
  mounted() {
    this.getIndex()

      document.querySelector('#tbodyDiv').addEventListener('scroll', function () {
        // alert('12')
        document.querySelector('#theadDiv').scrollLeft = document.querySelector('#tbodyDiv').scrollLeft;
      });
  },
  methods: {
    // 读取表格json
    getIndex() {
      this.$http.get('static/table.json').then( (res) => {
        this.allData  = res.data.data
        console.log(this.allData)
        this.ass_datas = this.allData.ass_datas
        this.dealData()
        console.log(this.dealTable)
      })
    },
    // 处理表体数据
     dealData(){
      var length = this.ass_datas.length;
      for (var i = 0;i<length;i++){
          if( typeof this.ass_datas[i].ifSame == "undefined"){
              this.ass_datas[i].ifSame = true;
          }
          for(var j = i+1;j<length;j++){
              if(this.ass_datas[i].ASSET == this.ass_datas[j].ASSET){
                  this.ass_datas[j].ifSame = false;
              }
          }
      }
      this.dealTable = this.ass_datas;
    },
  }
}
</script>

<style>
  .time {
    width: 100%;
    height: 60px;
    background-color: skyblue;
    /* margin-top: 47px; */
    text-align: center;
    line-height: 60px;
    position: fixed;
    top: 47px;
    left: 0;
    z-index: 100;
  }
  .table {
    top: 60px;
    font-size: 0.5rem;
  }
  #contenter {
    position: relative;
    /* width: 800px; */
    height: 550px;
    margin: auto;
    margin-top: 106px;
    background-color: white;
    border: 1px solid skyblue;
    overflow: auto;
    margin-bottom: 100px;
  }

  #theadDiv {
    position: fixed;
    left: 0;
    right: 0;
    overflow: hidden;
    background-color: slategrey;
    z-index: 99;
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
      /* width: 3%!important; */
  }
  td, th {
      height: 35px;
      text-align: center;
  }
</style>

<style>
/* 设置th td的宽度 */
#theadDiv .thds0 {
  width: 20% !important;
}
#theadDiv .thds1 {
  width: 20% !important;
}
#theadDiv .thds2 {
  width: 12% !important;
}
#theadDiv .thd0,  #theadDiv .thd1, #theadDiv .thd2, #theadDiv .thd3{
  width: 12% !important;
}
</style>

