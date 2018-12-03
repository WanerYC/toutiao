<template>
  <div class="info">
    <c-table :list="lists"></c-table>
  </div>
</template>

<script>
import cTable from '@/components/c-table.vue'

export default {
  components: {
    cTable
  },
  data () {
    return {
      lists: [
        [
          {title: true, value: "系列", rowspan:2},
          {title: true, value: "产品", rowspan:2},
          {title: true, value: "编号", rowspan:2},
          {title: true, value: "不同年龄段产品", colspan: 3},
        ],
        [
          {title: true,value: '1-20'},
          {title: true,value: '20-50'},
          {title: true,value: '50-100'}
        ],
        [
          {title: true, value: "阳关红"},
          {value: '红期一期'},
          {value: '232.32'},
          {value: '3432'},
          {value: '3224'},
          {value: '3224'},
        ],
        [
          {rowspan: 3, title: true, value: "阳关橙"},
          {value: '橙光一期'},
          {value: '43453'},
          {value: '534'},
          {value: '453'},
          {value: '453'},
        ],
        [
          {value: '橙光二期'},
          {value: '345'},
          {value: '454'},
          {value: '343'},
        ],
        [
          {value: '橙光三期'},
          {value: '342'},
          {value: '454'},
          {value: '76'},
        ],
        ,
        [
          {title: true, value: "阳关红"},
          {value: '红期一期'},
          {value: '232.32'},
          {value: '3432'},
          {value: '3224'},
        ],
        [
          {rowspan: 3, title: true, value: "阳关橙"},
          {value: '橙光一期'},
          {value: '43453'},
          {value: '534'},
          {value: '453'},
        ],
        [
          {value: '橙光二期'},
          {value: '345'},
          {value: '454'},
          {value: '343'},
        ],
        [
          {value: '橙光三期'},
          {value: '342'},
          {value: '454'},
          {value: '76'},
        ],
        ,
        [
          {title: true, value: "阳关红"},
          {value: '红期一期'},
          {value: '232.32'},
          {value: '3432'},
          {value: '3224'},
        ],
        [
          {rowspan: 3, title: true, value: "阳关橙"},
          {value: '橙光一期'},
          {value: '43453'},
          {value: '534'},
          {value: '453'},
        ],
        [
          {value: '橙光二期'},
          {value: '345'},
          {value: '454'},
          {value: '343'},
        ],
        [
          {value: '橙光三期'},
          {value: '342'},
          {value: '454'},
          {value: '76'},
        ],
        ,
        [
          {title: true, value: "阳关红"},
          {value: '红期一期'},
          {value: '232.32'},
          {value: '3432'},
          {value: '3224'},
        ],
        [
          {rowspan: 3, title: true, value: "阳关橙"},
          {value: '橙光一期'},
          {value: '43453'},
          {value: '534'},
          {value: '453'},
        ],
        [
          {value: '橙光二期'},
          {value: '345'},
          {value: '454'},
          {value: '343'},
        ],
        [
          {value: '橙光三期'},
          {value: '342'},
          {value: '454'},
          {value: '76'},
        ],
        ,
        [
          {title: true, value: "阳关红"},
          {value: '红期一期'},
          {value: '232.32'},
          {value: '3432'},
          {value: '3224'},
        ],
        [
          {rowspan: 3, title: true, value: "阳关橙"},
          {value: '橙光一期'},
          {value: '43453'},
          {value: '534'},
          {value: '453'},
        ],
        [
          {value: '橙光二期'},
          {value: '345'},
          {value: '454'},
          {value: '343'},
        ],
        [
          {value: '橙光三期'},
          {value: '342'},
          {value: '454'},
          {value: '76'},
        ]



      ]
    }
  }
}
</script>

<style>
.info {
  font-size: 12px;
}
</style>
