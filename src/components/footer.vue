<template>
  <div class="footer pf">
    <!-- 底部员工信息 -->
    <!-- <div class="circle pf">
      <p class="animate">
        <span>员工号</span>
        <span>{{ tokenId }}</span>
      </p>
    </div> -->

  <tabbar>
    <tabbar-item link="/" :selected="$route.path == '/'">
      <!-- <img slot="icon" class=""> -->
      <svg class="icon" slot="icon" aria-hidden="true" style="width: 30px; height: 30px;">
        <use xlink:href="#icon-home"></use>
      </svg>
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item show-dot link="/detail">
      <!-- <img slot="icon"> -->
      <svg class="icon" slot="icon" aria-hidden="true" style="width: 30px; height: 30px;">
        <use xlink:href="#icon-favor"></use>
      </svg>
      <span slot="label">收藏</span>
    </tabbar-item>
    <!-- <tabbar-item> -->
    <tabbar-item link="/h5">
      <!-- <img slot="icon"> -->
      <svg class="icon" slot="icon" aria-hidden="true" style="width: 30px; height: 30px;">
        <use xlink:href="#icon-like"></use>
      </svg>
      <span slot="label">关注</span>
    </tabbar-item>
    <tabbar-item badge="2"  link="/user" :selected="$route.path == '/user'">
      <!-- <img slot="icon"> -->
      <svg class="icon" slot="icon" aria-hidden="true" style="width: 30px; height: 30px;">
        <use xlink:href="#icon-person2"></use>
      </svg>
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  data () {
    return {
      tokenId: 12312
    }
  },
  prop: [],
  components: {
    Tabbar,
    TabbarItem
  },
  moutend () {
    this.footerJump()
  },
  methods: {
    footerJump () {
      const ls = window.location.hash;
      console.log(ls);
      alert(ls)
    }
  }
}
</script>

<style>
.footer {
  width: 100%;
  height: 50px;
  background-color: #fff;
  bottom: 0;
  left: 0;
  border-top: 1px solid red;
}

.footer .circle {
  bottom: 5rem;
  right: 0.8rem;
  background-color: rgba(119, 136, 153, 0.5);
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0e82e8;
  text-align: center;
}

.footer .animate {
  animation: mycrilce 2s infinite alternate;
}

@keyframes mycrilce {
  0% {
    transform: scale(1.2)
  }
  100% {
    transform: scale(1)
  }
}

</style>
