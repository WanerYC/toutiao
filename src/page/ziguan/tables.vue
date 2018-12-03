<template>
  <div>
    <div>头部双方都水电费水电费水电费是的故事的故事帝国时代根深蒂固是个是是大V山东省考的哈萨克的发挥出速度快发货狮吼功三哭殿还是苦的很上刊登过换是得靠和三大框架黄寺大街更合适的供货商度过受到更合适大局观和时代感和深度和高速等回过神丢供货商递归函数客户端个一是读后感iu</div>
    <div class="pages" id="pages" :style="{height: maxHeight + 'px'}">
        <table id="table" class="table" cellpadding="0" cellspacing="0">
            <thead v-show="showFixedHeaderCloFirst" class="fixedThead" id="fixedThead" :style="{left: fixedTheadLeft}">
                <tr v-for="(x,i) in xList"   :key="i+'a'">
                    <th v-for="(l,i) in x" :key="i" :colspan="l.colspan" :rowspan="l.rowspan">{{l.name}}</th>
                </tr>
            </thead>
            <div v-show="showFixedHeaderCloFirst" class="fixedHeaderCenter" id="fixedHeaderCenter" :style="{'line-height': firstCloHeight + 'px',width: firstCloWidth-1 + 'px'}">{{xList[0][0].name}}</div>

            <tbody v-show="showFixedHeaderCloFirst" class="fixedHeaderCloFirst" id="fixedHeaderCloFirst" :style="{'top': fixedHeaderCloFirstTop ,'height': fixedHeaderCloFirstHeight}">
                <tr v-for="(l,i) in yList" :key="i" :style="{width: firstCloWidth + 'px',height: cloFirstLineHeight + 'px'}">
                    <td :style="{width: firstCloWidth + 'px',height: cloFirstLineHeight -1 + 'px' }">{{l.statis_date }} </td>
                </tr>
            </tbody>

            <thead >
                <tr v-for="(x,index) in xList"   :key="index+'b'">
                    <th :class="{firstCol: index == 0 && i == 0}" v-for="(l,i) in x" :key="i" :colspan="l.colspan" :rowspan="l.rowspan">{{l.name}}</th>
                </tr>
            </thead>
            <tbody id="tbody">
                <tr  v-for="(l,i) in yList" :key="i">
                    <td v-for="(x,xKey) in xField" :key="xKey">
                        <div v-for="(ll,yKey) in l" v-if="x === yKey" :key="yKey" :class="{'tables-content-item-yellow':yList[i][yKey] > 0 && validateVal(x),'tables-content-item-green':yList[i][yKey] <= 0 && validateVal(x),}">
                            {{ yList[i][yKey]}}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            maxHeight: '100%',
            fixedTheadLeft: 0,
            fixedHeaderCloFirstTop: 0,
            fixedHeaderCloFirstHeight: '100%',
            th: [],
            tl: [],
            temp: [],
            firstCloWidth: 0,
            firstCloHeight: 0,
            showFixedHeaderCloFirst: false,
            cloFirstLineHeight: '0',
            fixedCol: false,
            fixedHeader: false,
            fixedA1: false,
            hLeft: 0,
            hHeight: 0,
            xList: [
                [
                    {
                        field_name: "statis_date",
                        name: "第一行合并3行1列",
                        colspan: 1, //指定单元格 横向 跨越的 列数
                        rowspan: 3, //指定单元格 纵向 跨越的 行数
                    },
                    {
                        field_name: "custom_field",
                        name: "第一行合并2列",
                        colspan: 2,
                        rowspan: 1,
                    },
                    {
                        field_name: "custom_field",
                        name: "第一行合并2列",
                        colspan: 2,
                        rowspan: 1,
                    },
                    {
                        field_name: "custom_field",
                        name: "第一行合并3列",
                        colspan: 3,
                        rowspan: 1,
                    },
                ],
                [
                    {
                        field_name: "custom_field",
                        name: "第二行日期",
                        colspan: 1, //指定单元格 横向 跨越的 列数
                        rowspan: 1, //指定单元格 纵向 跨越的 行数
                    },
                    {
                        field_name: "custom_field",
                        name: "第二行日期合并2列",
                        colspan: 2,
                        rowspan: 1,
                    },
                    {
                        field_name: "custom_field",
                        name: "第二行日期合并2列",
                        colspan: 2,
                        rowspan: 1,
                    },
                    {
                        field_name: "custom_field",
                        name: "第二行日期合并3列",
                        colspan: 3,
                        rowspan: 1,
                    },
                ],
                [
                    {
                        field_name: "area_name",
                        name: "第三行当月新增",
                        colspan: 1,  //指定单元格 横向 跨越的 列数
                        rowspan: 1, //指定单元格 纵向 跨越的 行数
                    },
                    {
                        field_name: "area_name1",
                        name: "第三行当月新增1",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name2",
                        name: "第三行当月新增2",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name3",
                        name: "第三行当月新增3",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name4",
                        name: "第三行当月新增4",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name5",
                        name: "第三行当月新增5",
                        colspan: 1,
                        rowspan: 1,
                    },
                    {
                        field_name: "area_name6",
                        name: "第三行当月新增6",
                        colspan: 1,
                        rowspan: 1,
                    },
                ],
            ],
            xField: ['statis_date', 'area_name', "area_name1", "area_name2", "area_name3", "area_name4", "area_name5", "area_name6",],
            yList: [
                {
                    area_name: "新增数据开始",
                    area_name1: "新增数据开始1",
                    area_name2: "新增数据开始2",
                    area_name3: "新增数据开始3",
                    area_name4: "新增数据开始4",
                    area_name5: "新增数据开始5",
                    area_name6: "新增数据开始6",
                    statis_date: 100007,
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
            ]
        }
    },
    filters: {
        dateFromt: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.slice(4)
        },
    },
    methods: {
        // 返回
        vdVal(val, value) {
            return value
        },
        // 是否包含 % 标志，有就要颜色控制
        validateVal(value) {
            let flag = false
            this.xList.forEach((e, i) => {
                if (e.zd_name == value) {
                    if (e.zx_name.includes('%')) {
                        flag = true
                    }
                }
            })
            return flag
        },
        $$(dom){
            return document.getElementById(dom)
        },
        savePosition(){
            this.maxHeight = window.screen.height
            this.$$("pages").onscroll = (()=> {
                let offsetHeight = this.$$("fixedHeaderCenter").offsetHeight
                let scrollTop = offsetHeight + 1 - this.$$("pages").scrollTop
                this.fixedTheadLeft =  - this.$$("pages").scrollLeft + 'px'
                this.fixedHeaderCloFirstTop = scrollTop + 'px'
                console.log("scrollTop:",scrollTop)
                console.log("this.fixedHeaderCloFirstTop:",this.fixedHeaderCloFirstTop)
            });
            // this.$$("fixedHeaderCloFirst").onscroll = (()=> {
            //     let offsetHeight = this.$$("fixedHeaderCenter").offsetHeight
            //     let scrollTop = - this.$$("fixedHeaderCloFirst").scrollTop
            //     this.$$("pages").style.left =  - this.$$("fixedHeaderCloFirst").scrollLeft + 'px'
            //     this.$$("table").style.top =  scrollTop + 'px'
            // });
        }
    },
    mounted() {
        setTimeout(()=>{
            this.firstCloWidth = document.getElementsByClassName("firstCol")[0].offsetWidth
            this.firstCloHeight = document.getElementsByClassName("firstCol")[0].offsetHeight-1
            this.fixedHeaderCloFirstHeight = this.$$("tbody").offsetHeight + 'px'
            this.cloFirstLineHeight = this.$$("tbody").children[0].offsetHeight  + 'px'
            this.fixedHeaderCloFirstTop = this.firstCloHeight + 3 + 'px'
            this.showFixedHeaderCloFirst = true
            this.savePosition()
        },10000)

    },
}

</script>
<style lang="less" scoped>
::-webkit-scrollbar {
    display: none;
}
.pages{
    overflow: scroll;
    height: 100%;

}
.fixedHeaderCenter{
    border: 1px solid red;
    background-color: #f3f4f6;
    color: #43484d;
    text-align: center;
    // padding: 0 0.3rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
}
.fixedHeaderCloFirst{
    // border-bottom: 1px solid #eee;
    height: 100%;
    line-height: 0.86rem;
    background: #fff;
    white-space: nowrap;
    text-align: center;
    position: fixed;
    left: 0;
    top: 0;
    th,td{
        padding: 0;
    }
    // overflow: scroll;
    div{
        background-color: #fff;
        border-bottom: 1px solid #eee;
    }
}
@main-color-green: #269513;
@main-color-yellow: #fc9d2e;
table {
  position: relative;
  color: #86939e;
  font-size: 0.32rem;
  border: 0px solid #000;
  min-height: 100%;
  text-align: center;
  white-space:nowrap;
  td {
    border-bottom: 1px solid #eee;
    white-space: nowrap;
    height: 0.86rem;
    line-height: 0.86rem;
    padding: 0 0.2rem;
    white-space:nowrap;
  }
  th {
      white-space:nowrap;
    color: #43484d;
    white-space: nowrap;
    height: 0.74rem;
    line-height: 0.74rem;
    padding: 0rem 0.3rem;
    background-color: #f3f4f6;
    font-weight: normal;
    padding-bottom: 0;
    padding-top: 0;
    border: 1px solid red;
  }
}
.tables-content-item-green {
  color: @main-color-green;
}

.tables-content-item-yellow {
  color: @main-color-yellow;
}
table {
    font-size: 0.3rem;
    // margin: 300px;
    border-collapse:collapse
}
.fixedThead{
    background: lightblue;
    position: fixed;
    top: 0 ;
    z-index: 2;
}
/*固定表头的样式*/
.fixedHeader {
    background: lightblue;
    position: fixed;
    top: 0 ;
    z-index: 2;
}

</style>
