<template>
  <div>
    <!-- swiper -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiperSlide1">Slide 1</swiper-slide>
      <swiper-slide class="swiperSlide2">Slide 2</swiper-slide>
      <swiper-slide class="swiperSlide3">Slide 3</swiper-slide>
      <swiper-slide class="swiperSlide4">Slide 4</swiper-slide>
      <swiper-slide class="swiperSlide5">Slide 5</swiper-slide>
      <div class="swiper-scrollbar"></div> <!--滚动条-->
      <div class="swiper-pagination" slot="pagination"></div> <!--标页码-->
    </swiper>
    <!-- 底部 -->
    <!-- <v-footer></v-footer> -->
  </div>
</template>

<script>
import vFooter from '../footer'
import animate from 'script-loader!assets/js/swiper/swiper.animate.min.js'
  export default {
    components: {
      vFooter
    },
    data() {
      return {

      }
    },
    computed : {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
      this.initSwiper()
    },
    methods: {
      initSwiper () {
        swiperOption: {
          autoplay: false,  // 自动切换
          speed: 1000,   //  滑屏速度
          direction: 'vertical', // 垂直方向  horizontal 水平方向  Slides的滑动方向
          autoplayDisableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay
          pagination: { //分页器容器的css选择器或HTML标签
            el: '.swiper-pagination',
            clickable: true,
            paginationType: 'progress',
          },
          height: window.innerHeight, // 高度设置，占满设备高度
          autoHeight: true,//自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
          slidesPerView: 1,//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          mousewheel: true,//开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
          mousewheelControl: true,//同上
          resistanceRatio: 0,//抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
          onTransitionStart(swiper){
            console.log(swiper)
          }
        }
      },
    }
  }
</script>

<style scoped>
  .swiperSlide1 {
    background-color: burlywood;
  }
  .swiperSlide2 {
    background-color: palegoldenrod;
  }
  .swiperSlide3 {
    background-color: oldlace;
  }
  .swiperSlide4 {
    background-color: lawngreen;
  }
  .swiperSlide5 {
    background-color: aqua;
  }
  .swiperSlide6 {
    background-color: azure;
  }
  .swiperSlide7 {
    background-color: indianred;
  }
  .swiperSlide8 {
    background-color: rosybrown;
  }
  .swiperSlide9 {
    background-color: violet;
  }
  .swiperSlide10 {
    background-color: burlywood;
  }

  .footer {
    z-index: 9;
  }
</style>

