<template>
  <div class="table">
    <div v-if="list.length === 0">暂无数据</div>
    <table v-else>
      <tr v-for="(item,index) in list" :key="index">
        <td v-for="(child,ind) in item" :key="ind" :width="child.width?child.width:''" :class="{'title':child.title}"
            :colspan="child.colspan?child.colspan:''" :rowspan="child.rowspan?child.rowspan:''"
            :align="child.align?child.align:(child.title?'center':'')">
          {{child.value}}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
  /**
   * title: true, 是否添加标题样式
   * colspan: 1, 跨行
   * rowspan: 1, 跨列
   * value: "value" 值
   */
  export default {
    props: {
      list: Array
    }
  };
</script>
<style lang="less" scoped>
  @import "../assets/style/public.less";

  .table {
    table {
      width: 100%;
      border-collapse: collapse;
      border: none;
    }
    table td {
      border: 1px solid @border-gray;
      line-height: 20px;
      padding: 10px 16px;
    }
    table td:hover {
      background: @french-grey;
      transition: background-color 0.25s ease;
    }
    .title {
      background: @french-grey;
      color: #2a2b2d;
    }
  }
</style>
