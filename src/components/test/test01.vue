<template>
  <div>
    这是测试的页面
    <blog-post post-title="hello!" :is-show="isPublished"></blog-post>

    <ul>
        <li
        v-for="(item,index) in tabs"
        :key= "index"
        :class="{active:index == num}"
        @click="tab(index)">{{item}}</li>
    </ul>
    <div class="tabCon">
        <div
        v-for='(itemCon,index) in tabContents'
        :key= "index"
        v-show=" index == num">{{itemCon}}</div>
    </div>
  </div>
</template>

<script>

var blogPost = {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle', 'isShow'],
  template: '<h3>{{ postTitle }}</h3>'

}

export default {
  components: {
    blogPost
  },
  data () {
    return {
      ff: false,
      isPublished: false,
      tabs: ["标题一", "标题二","标题三"],
      tabContents: ["内容一", "内容二","内容三"],
      num: 1
    }
  },
  methods: {
    tab(index) {
        this.num = index;
    }
  }
}
</script>

<style>

</style>
