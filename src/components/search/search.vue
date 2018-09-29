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

    <!-- 消息推送 -->
     <div class="row">

      <form id="form1" runat="server">
        <div>

          <input id="conn" type="button" value="连接" border='1' />
          <br>
          <input id="close" type="button" value="关闭" />
          <br>
          <span id="tips" > {{ text1 }} </span>
          <br>
          <input id="content" type="text" />
          <br>
          <input id="send" type="button" value="发送" />
        </div>
      </form>


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
      msg: 'asadad',
      text1: '未连接'
    }
  },
  components: {
    vFooter,
    XHeader
  },
  mounted () {
     this.$nextTick(function () {
          this.conn()
      })
    // this.conn
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

    },
    conn () {
       var host = 'ws://' + window.location.hostname + ':' + window.location.port + '/search'
        console.log(host)
        var ws = new WebSocket(host);
        this.text1 = '正在 链接'
        // $('#tips').text('正在连接');
        ws.onopen = function () {
          console.log('websocket open')
          // $('#tips').text('已经连接');
        }
        ws.onmessage = function (evt) {
          console.log(evt)
          // $('#tips').text(evt.data);
        }
        ws.onerror = function (evt) {
          // $('#tips').text(JSON.stringify(evt));
        }
        ws.onclose = function () {
          // $('#tips').text('已经关闭');
          this.text1 = '已经关闭'
        }
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
