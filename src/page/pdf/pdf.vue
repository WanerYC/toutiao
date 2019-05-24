<template>
  <div>
    pdf展示页面
    <span @click="$router.push({name: 'Pdfdetail'})">跳到pdf页面</span>

    <v-footer :selected='2'></v-footer>
  </div>
</template>

<script>
import vFooter from '../../components/footer'
export default {
  components: {
    vFooter,
  }
}
</script>

<style>

</style>
