/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2023-05-13 12:10:12
 * @version $Id$
 */




//实现上滑出现导航栏
$(document).ready(function(){
  var previousScroll = 0;
  
  $(window).scroll(function(){
    var currentScroll = $(this).scrollTop();
    
    if(currentScroll < previousScroll) {//意味着上滑
      $('.topnav').css('top', '0');
    } else {
      $('.topnav').css('top', '-80px');
    }
    previousScroll = currentScroll;
  });
});

// 赛事轮播
$(document).ready(function(){
    var mySwiper = new Swiper('#swiper-container-event', {
    slidesPerView: 1,
    spaceBetween: 1000,
    autoplay: {
    delay: 7000, // 自动切换时间间隔
    disableOnInteraction: true, // 用户操作后是否禁止自动切换
    },
    loop: true, // 开启无限循环模式
    pagination: {
    el: '.swiper-pagination', // 添加分页器
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next', // 下一页按钮
    prevEl: '.swiper-button-prev', // 上一页按钮
    },
    });
})


// 冠军轮播
$(document).ready(function(){
    var mySwiper = new Swiper('#swiper-container-champion', {
    slidesPerView: 1,
    spaceBetween: 350,
    autoplay: {
    delay: 5000, // 自动切换时间间隔
    disableOnInteraction: true, // 用户操作后是否禁止自动切换
    },
    loop: true, // 开启无限循环模式
    pagination: {
    el: '.swiper-pagination', // 添加分页器
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next', // 下一页按钮
    prevEl: '.swiper-button-prev', // 上一页按钮
    },
    });
})

// 搜索框回车确认跳转
$(document).ready(function(){
  $("#evenserch").keypress(function(event) {
    // 判断是否按下了回车键
    if (event.keyCode === 13) {
      // 获取输入的内容并进行跳转
      window.location.replace("event_game.html");
    }
    });

});


