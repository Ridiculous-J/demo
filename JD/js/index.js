  var mySwiper = new Swiper ('.lunbo1', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,  
    },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
  })
  for(i=0;i<mySwiper.pagination.bullets.length;i++){
  mySwiper.pagination.bullets[i].index=i
  mySwiper.pagination.bullets[i].onmouseover=function(){
    mySwiper.slideTo(this.index);
  };
}
  

  var mySwiper2 = new Swiper ('.lunbo2', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
    
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  
  
  var mySwiper3 = new Swiper ('.lunbo3', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,  
    }, 
  })
  
  var mySwiper4 = new Swiper ('.lunbo4', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,  
    }, 
  })
  
  
var mySwiper5 = new Swiper ('.lunbo5', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,  
    },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
  })
  for(i=0;i<mySwiper5.pagination.bullets.length;i++){
  mySwiper5.pagination.bullets[i].index=i
  mySwiper5.pagination.bullets[i].onmouseover=function(){
    mySwiper5.slideTo(this.index);
  };
}
  
  var mySwiper6 = new Swiper ('.lunbo6', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,  
    }, 
  })
  
var mySwiper7 = new Swiper ('.lunbo7', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,  
    },
      navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
  })
  for(i=0;i<mySwiper7.pagination.bullets.length;i++){
  mySwiper7.pagination.bullets[i].index=i
  mySwiper7.pagination.bullets[i].onmouseover=function(){
  mySwiper7.slideTo(this.index);
  };
}