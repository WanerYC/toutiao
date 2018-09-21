<template>
  <div>
    <!-- :right-options="{showMore: true}" -->
    <x-header id="header" @on-click-more="moreList()">今日头条</x-header>

    <div class="search">

      这是语音搜索页<br>

      <input type="text" id="a"/>
      <button id="b">buttonB</button>
      <button id="c">停止</button>
    </div>

    <!-- 底部 -->
    <v-footer :selected='2'></v-footer>
  </div>

</template>

<script>
import { XHeader} from 'vux'
import vFooter from '../footer'

export default {
  data() {
    return {
      msg: 'asadad'
    }
  },
  components: {
    vFooter,
    XHeader
  },
  methods: {
    upperCase () {
      this.msg = this.value
      var file;

      var fileChooser = document.getElementById('fileChooser');
      fileChooser.onchange = function() {
          if (fileChooser.files[0]) {
              file = fileChooser.files[0];
              console.log(file)

              // Do something with 'file'...
          }
      }

      var fileContent;

      var fileReader = new FileReader();
      fileReader.onload = function(e) {
          fileContent = e.target.result;

          // Do something with 'fileContent'...
      }
      fileReader.readAsArrayBuffer(file);

    }
  }
}
</script>

<style>
.search {
  margin-top: 50px;
}

input {
  width: 7rem;
  height: 4rem;
}

</style>
