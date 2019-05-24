# project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

仿今日头条APP


接下来要做个滑动表格
--> page scrollTable
首先我要去试一下  直接复制进来elementui的插件能不能用
D:\one\n\excess 安装了element-ui
复制到 本项目中的node_modules


在hometext.1中写 左右滑动的表格

在years.1.vue实现
实现了左右滚动

在在years.vue 实现首行 首列固定

结构
在yaers.vue 中实现了 表格滑动固定首行首列
参考 https://blog.csdn.net/ch834301/article/details/81259337

使用的iscroll 插件
将iscroll 文件夹放入 node_module中
将iscrollTable.js 保存至static 或者 assets 中
在页面中引入
import { createIScroller, refreshScroller } from "../../../assets/js/iscrollTable.js";



上拉刷新，下拉加载

在线json数据
https://api.github.com/repos/typecho-fans/plugins/contents/


2019/05/24 启动页需求
splash.vue
