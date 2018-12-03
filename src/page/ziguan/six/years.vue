<template>
    <div class="pages-tables " id="pages-tables">
      <x-header id="header" >客户年龄结构分析（净值型）</x-header>
        <div class="waterMask" id="watermark"></div>
        <div class="box1"></div>
        <div class="rolling-table meal-table" ref="tableBox" :style="{height: maxHeight + 'px'}">
            <table class="table" id="table" cellpadding="0" cellspacing="0" ref="rollingTable">
              <!-- <thead class="fixedth"> -->
                <tr v-for="(x,i) in xList" :key="i">
                    <th class="rows " :class="{'cross': index == 0 && i == 0 }" v-for="(l,index) in x" :key="index" :colspan="l.colspan" :rowspan="l.rowspan">{{l.name}}</th>
                </tr>
              <!-- </thead> -->
              <!-- <tbody class="fixedth"> -->
                <tr  v-for="(item, index) in dealTable" :key="index">
                  <td  class="cols" :rowspan="item.rowsoan" v-if="item.titles && item.ifSame"> {{ item.ASSET }} </td>
                  <td> {{ item.titles }} </td>
                  <td> {{ item.AVUG_rate }} </td>
                  <td> {{ item.END_balance }} </td>
                  <td> {{ item.InCON }} </td>
                  <td> {{ item.InCON }} </td>
                  <td> {{ item.InCON }} </td>
                  <td> {{ item.InCON }} </td>
                </tr>
                <tr></tr>
              <!-- </tbody> -->
            </table>
        </div>
    </div>
</template>
<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, XTable } from 'vux'
import { createIScroller, refreshScroller } from "../../../assets/js/iscrollTable.js";
// import { addWaterMarker } from "libs/common/common";
export default {
    data() {
        return {
          maxHeight:'100%',
          scroll: {
              scroller: null
          },
          xList: [
              [
                  {
                      field_name: "statis_date",
                      name: "系列",
                      colspan: 1, //指定单元格 横向 跨越的 列数
                      rowspan: 2, //指定单元格 纵向 跨越的 行数
                  },
                  {
                      field_name: "custom_field",
                      name: "产品",
                      colspan: 1,
                      rowspan: 2,
                  },
                  {
                      field_name: "area_name",
                      name: "持有份额 合并6列",
                      colspan: 6,
                      rowspan: 1,
                  },
              ],
              [
                  {
                      field_name: "area_name",
                      name: "<50",
                      colspan: 1, //指定单元格 横向 跨越的 列数
                      rowspan: 1, //指定单元格 纵向 跨越的 行数
                  },
                  {
                      field_name: "area_name1",
                      name: "50-100",
                      colspan: 1,
                      rowspan: 1,
                  },
                  {
                      field_name: "area_name2",
                      name: "100-500",
                      colspan: 1,
                      rowspan: 1,
                  },
                  {
                      field_name: "area_name3",
                      name: "500-1000",
                      colspan: 1,
                      rowspan: 1,
                  },
                  {
                      field_name: "area_name4",
                      name: "1000-2000",
                      colspan: 1,
                      rowspan: 1,
                  },
                  {
                      field_name: "area_name5",
                      name: ">=2000",
                      colspan: 1,
                      rowspan: 1,
                  }
              ],
          ],
          xField: ['statis_date', 'area_name', "area_name1", "area_name2", "area_name3", "area_name4", "area_name5", "area_name6",],
          yList: [
              {
                  area_name: "Eb34-广银",
                  area_name1: "129.01",
                  area_name2: "3342",
                  area_name3: "0.3",
                  area_name4: "342.3",
                  area_name5: "234",
                  area_name6: "56",
                  statis_date: "阳光红系列",
                  rowspan: 2,
              },
              {
                  area_name: "EB13333-阳光红精英荟萃1期",
                  area_name1: "13",
                  area_name2: "89",
                  area_name3: "45.8",
                  area_name4: "45.8",
                  area_name5: "56",
                  area_name6: "456",
                  statis_date: "阳光红系列",
                  rowspan: 1,
              },
              {
                  area_name: "EB13333-阳光红精英荟萃2期-限量版",
                  area_name1: "新增数据开始1",
                  area_name2: "新增数据开始2",
                  area_name3: "新增数据开始3",
                  area_name4: "新增数据开始4",
                  area_name5: "新增数据开始5",
                  area_name6: "新增数据开始6",
                  statis_date: "阳光红系列",
              },
              {
                  area_name: "EB13333-阳光红精英荟萃2期-全球vip限量珍藏版版",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: "阳光红系列",
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据最后",
                  area_name1: "新增数据最后1",
                  area_name2: "新增数据最后2",
                  area_name3: "新增数据最后3",
                  area_name4: "新增数据最后4",
                  area_name5: "新增数据最后5",
                  area_name6: "新增数据最后6",
                  statis_date: 222222,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据最后",
                  area_name1: "新增数据最后1",
                  area_name2: "新增数据最后2",
                  area_name3: "新增数据最后3",
                  area_name4: "新增数据最后4",
                  area_name5: "新增数据最后5",
                  area_name6: "新增数据最后6",
                  statis_date: 222222,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据最后",
                  area_name1: "新增数据最后1",
                  area_name2: "新增数据最后2",
                  area_name3: "新增数据最后3",
                  area_name4: "新增数据最后4",
                  area_name5: "新增数据最后5",
                  area_name6: "新增数据最后6",
                  statis_date: 222222,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据",
                  area_name1: "新增数据1",
                  area_name2: "新增数据2",
                  area_name3: "新增数据3",
                  area_name4: "新增数据4",
                  area_name5: "新增数据5",
                  area_name6: "新增数据6",
                  statis_date: 201807,
              },
              {
                  area_name: "新增数据最后",
                  area_name1: "新增数据最后1",
                  area_name2: "新增数据最后2",
                  area_name3: "新增数据最后3",
                  area_name4: "新增数据最后4",
                  area_name5: "新增数据最后5",
                  area_name6: "新增数据最后6",
                  statis_date: 222222,
              }
          ],
          dealTable: []
        }
    },
    components: {
      XHeader,
      Actionsheet,
      ButtonTab,
      ButtonTabItem,
      XTable
    },
    mounted() {
        this.maxHeight = window.screen.height - 50
        this.scroll.scroller = createIScroller(".meal-table");
        // addWaterMarker(document.getElementById('watermark'))
        this.getIndex()
    },
    methods: {
       // 读取表格json
      getIndex() {
        this.$http.get('static/table.json').then( (res) => {
          this.allData  = res.data.data
          // console.log(this.allData)
          this.ass_datas = this.allData.ass_datas
          this.dealData()
          // console.log(this.dealTable)
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
<style lang="less" scoped>
  .box1 {
    width: 100%;
    height: 600px;
    border: 1px solid seagreen;
  }
  .pages-tables {
    -webkit-overflow-scrolling: touch; // ios滑动顺畅
    position: relative;
  }
  .rolling-table {
      height: 100%;
      font-size: 0.28rem;
      color: #86939a;
      background-color: #fff;
      width: 100%;
      -webkit-overflow-scrolling: touch;
      position: relative;
      top: 50px;
      overflow: hidden;
    }
  .rows {
      position: relative;
      z-index: 3;
  }
  .cross {
      position: relative;
      z-index: 5;
  }
  table td {
    border: 0px solid #000;
    font-size: 0.32rem;
    background: #fff;
  }
  ::-webkit-scrollbar {
      display: none;
  }
  .table {
  //   border-collapse: collapse; //去掉重复的border
    color: #86939e;
    font-size: 0.32rem;
    border: 0px solid #000;
    min-height: 100%;
    text-align: center;
    td {
      border-bottom: 0.02rem solid #eee;
      white-space: nowrap;
      height: 0.86rem;
      line-height: 0.86rem;
      padding: 0 0.2rem;
    }
    th {
      color: #43484d;
      white-space: nowrap;
      height: 0.74rem;
      line-height: 0.74rem;
      padding: 0rem 0.3rem;
      background-color: #f3f4f6;
      font-weight: normal;
      padding-bottom: 0;
      padding-top: 0;
      border: 0.02rem solid red;
    }
  }
  tr{
      position: relative;
      background-color: #fff;
      // &:nth-of-type(odd){
      //     td{
      //         // background-color: pink;
      //     }
      // }
  }
</style>
