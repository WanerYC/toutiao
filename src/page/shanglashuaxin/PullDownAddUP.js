/**
*此方法可以写到公用的类里面，然后调用 ,
* 下拉刷新的id一定要是 【pullDown】，上拉加载的id一定要是【pullUp】
*
* 用iScroll4.js实现上拉加载和下拉刷新
* @param wrapperId 滚动容器的 elementId
* @param callbc  滚动回调，参数：refresh 表示下拉刷新，loadmore 表示上拉加载
*
* @return myScroll 将对象返回（注意，在执行完成数据刷新/加载之后要调用 myScroll.refresh(),否则会上拉会反弹）
*/
function PullDownAddUP(wrapperId, callbc) {
  var myScroll, pullDownEl, pullDownOffset, pullUpEl, pullUpOffset, generatedCount = 0;
  var isRefresh = true,
    isLoadMore = true;
  var option = {};
  option.hScrollbar = false;//纵向滚动条
  option.vScrollbar = false;//横向滚动条
  option.useTransition = true;



  //动画部分
  try {
    pullDownEl = document.getElementById('pullDown');
              pullUpOffset = pullUpEl.offsetHeight;


  } catch (e) {
    isRefresh = false;
  }
  try {
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;
  } catch (e) {
    isLoadMore = false;
  }

  if (isRefresh) {
    if (isLoadMore) {
      option.onRefresh = function() {
        if (pullDownEl.className.match('loading')) {
          pullDownEl.className = '';
          pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
        } else if (pullUpEl.className.match('loading')) {
          pullUpEl.className = '';
          pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
        }
      };
      option.onScrollMove = function() {

        if (this.y > 5 && !pullDownEl.className.match('flip')) {
          pullDownEl.className = 'flip';
          pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放刷新';
          this.minScrollY = 0;
        } else if (this.y < 5 && pullDownEl.className.match('flip')) {
          pullDownEl.className = '';
          pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
          this.minScrollY = -pullDownOffset;
        } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
          pullUpEl.className = 'flip';
          pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放加载';
          this.maxScrollY = this.maxScrollY;
        } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
          pullUpEl.className = '';
          pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
          this.maxScrollY = pullUpOffset;
        }
      };
      option.onScrollEnd = function() {
        if (pullDownEl.className.match('flip')) {
          pullDownEl.className = 'loading';
          pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中';
          callbc("refresh"); // Execute custom function (ajax call?)
        } else if (pullUpEl.className.match('flip')) {
          pullUpEl.className = 'loading';
          pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中';
          callbc("loadmore"); // Execute custom function (ajax call?)
        }
      };
    } else {
      option.onRefresh = function() {
        if (pullDownEl.className.match('loading')) {
          pullDownEl.className = '';
          pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
        }
      };
      option.onScrollMove = function() {

        if (this.y > 5 && !pullDownEl.className.match('flip')) {
          pullDownEl.className = 'flip';
          pullDownEl.querySelector('.pullDownLabel').innerHTML = '释放刷新';
          this.minScrollY = 0;
        } else if (this.y < 5 && pullDownEl.className.match('flip')) {
          pullDownEl.className = '';
          pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
          this.minScrollY = -pullDownOffset;
        }
      };
      option.onScrollEnd = function() {
        if (pullDownEl.className.match('flip')) {
          pullDownEl.className = 'loading';
          pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中';
          callbc("refresh"); // Execute custom function (ajax call?)
        }
      };
    }
  } else {
    if (isLoadMore) {
      option.onRefresh = function() {
        if (pullUpEl.className.match('loading')) {
          pullUpEl.className = '';
          pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多';
        }
      };
      option.onScrollMove = function() {
        if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
          pullUpEl.className = 'flip';
          pullUpEl.querySelector('.pullUpLabel').innerHTML = '释放加载';
          this.maxScrollY = this.maxScrollY;
        } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
          pullUpEl.className = '';
          pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
          this.maxScrollY = pullUpOffset;
        }
      };
      option.onScrollEnd = function() {
        if (pullUpEl.className.match('flip')) {
          pullUpEl.className = 'loading';
          pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中';
          callbc("loadmore"); // Execute custom function (ajax call?)
        }
      };
    } else {
      option.onRefresh = function() {
        //if (pullDownEl.className.match('loading')) {
        //	pullDownEl.className = '';
        //	pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新';
        //}
      };

    }
  }



  myScroll = new iScroll('wrapper', option);

  return myScroll;
}
