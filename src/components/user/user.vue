<template>
  <div>
    <!-- 这是用户界面"我的" 页面 -->
    <div class="hearder pr">
      <!-- 头像 -->
      <div class="headerImg">
        <img src="../../assets/img/01.jpg" alt="">
        <h6>大橘子</h6>
      </div>
    </div>

    <group>
      <cell is-link>
        <span slot="title" style="color:green;"><span style="vertical-align:middle;">消息通知</span> <badge text="1"></badge></span>
      </cell>
      <cell title="我的钱包" is-link></cell>
      <cell title="用户反馈" is-link></cell>
      <cell title="通用" is-link>
        <!-- <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII="> -->
      </cell>
    </group>

    <!-- 底部 -->
    <v-footer :selected='3'></v-footer>
  </div>
</template>

<script>
import { Cell, Group,Badge  } from 'vux'
import vFooter from '../footer'

export default {
  components: {
    vFooter,
    Cell,
    Group,
    Badge
  }
}
</script>

<style>
.hearder {
  width: 100%;
  height: 200px;
  background: red url(../../assets/img/02.jpg) no-repeat;
  background-size: cover;
  /* opacity: 0.5; */

}

.headerImg {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 1rem;
}

.headerImg img {
  /* display: block; */
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
}

.headerImg h6 {
  font-weight: bold;
  color: #FF0000;
  text-align: center;
  margin: 10px;
  font-size: 20px;
}

</style>
