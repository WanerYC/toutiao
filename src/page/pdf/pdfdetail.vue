<template>
<div>
  <x-header > PDF</x-header>
  详情页面
  <!-- <iframe src="http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf"  width="100%" :height="Height"> -->
  <iframe src="https://syspron.test.cebbank.com/mmc/mpi/download/fenchun20190116.pdf"  width="100%" :height="Height">
  <!-- <iframe src="https://pan.baidu.com/s/1HmtAxm9RwnZ9oL6INN54tg"  width="100%" :height="Height"> -->
  This browser does not support PDFs. Please download the PDF to view it: <a href="/index.pdf">Download PDF</a></iframe>
</div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'
export default {
  components: {
    XHeader,
    // Actionsheet,
    // ButtonTab,
    // ButtonTabItem,
  },
  data() {
    return {
      Height: ''
    }
  },
  mounted() {
    this.Height =document.documentElement.clientHeight
  }
}
</script>

<style>

</style>
