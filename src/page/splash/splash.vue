<template>
  <div class="splash">
    <!-- 启动页 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
  </div>
  </div>
</template>

<script>

import  Swiper from '../../../static/swiper/swiper.min.js'
export default {
  data() {
    return {

    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.$router.push({name: 'home'})
    // },5000)
    var _this = this
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      on:{
        touchEnd:function () {
          // 判断是否在在最后一页继续拖动则释放跳转
          if(swiper.isEnd) {
            _this.$router.push({name: 'home'})

          }
        }
      }
    });
  }
}
</script>

<style>
/* @import '../../assets/swiper/swiper.min.css'; */
.splash {
  position: relative;
  height: 100vh;
}
.splash {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color:#000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
