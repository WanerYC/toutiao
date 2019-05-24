<template>
    <div id="wrapper">
			<div id="scroller">
				<div id="pullDown">
					<span class="pullDownLabel">下拉刷新</span>
				</div>
				<!-- </ul> -->
				<ul id="ulData">
					<li> 1111</li>
					<li> 1111</li>

				</ul>
				<div id="pullUp" class="weui-loadmore">

					<span class="pullUpLabel weui-loadmore__tips">上拉加载更多</span>
				</div>
			</div>
		</div>
</template>
<script type="text/javascript">
  import PullDownAddUP from './PullDownAddUP.js'
// import { constants } from 'http2';
    export default {
        data(){
            return{

            }
        },
        methods:{
          loadData() {
            if (isRefresh) {
              p = 1;
              document.getElementById("ulData").innerHTML = "";
            } else {
              p++;
            }

            setTimeout(function() {
              var htm = document.getElementById("ulData").innerHTML;
              for (var i = onePageCount * (p - 1); i < onePageCount * p; i++) {
                htm += '<li> ' + '我是第' + (i + 1) + '个,属于第' + p + '页' + '</li>';
              }

              document.getElementById("ulData").innerHTML = htm;
              mScroll.refresh(); //数据加载完成一定要调用此方法,否则上拉会反弹

            }, 1000);

          },


        },
        components:{

        },
        created(){

        },
        mounted(){
          console.log(PullDownAddUP)
          var mScroll;
          var isRefresh = true;
          var p = 1; //当前页码
          var onePageCount = 20; //每页显示多少个
          window.onload = function() {
            mScroll = PullDownAddUP("wrapper", function(loadType) {
              if (loadType == "refresh") { //下拉刷新
                isRefresh = true;
              } else { //上拉加载
                isRefresh = false;
              }
              loadData();
            });
            loadData();

          }

        },

    }
</script>
<style scoped>

</style>
