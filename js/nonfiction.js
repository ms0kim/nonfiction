$(document).ready(function(){


  /* load */
  setTimeout(function() {
    $(".load").fadeOut();
  }, 3000);
  setTimeout(function() {
    $(".load_text").fadeOut();
  }, 3000);


  /* left menu */
  let menu = $('.lt_gnb_menu');
  let btn = $('.menu_icon');

  btn.on('click',function(){
    menu.show().animate({left:0});
  });

  $(document).mouseup(function(e){
    if(menu.has(e.target).length===0){
      menu.animate({left: '-' + 50 + '%'});
    }
  });


  /* right menu */
  $('.title1').hover(function(){
    $('.sub1').stop().slideDown();
  }, function(){
    $('.sub1').stop().slideUp();
  });

  $('.title2').hover(function(){
    $('.sub2').stop().slideDown();
  }, function(){
    $('.sub2').stop().slideUp();
  });


  /* scroll menu, fix menu */
  $(window).scroll(function(){
    let docuTop = $(document).scrollTop();
    if(docuTop > 200){
      $(".scroll_nav").fadeIn().css({"position":"fixed", "width":"100%", "z-index":999})
      $(".fix_menu div").fadeIn().css({"position":"fixed", "z-index":999});
    }else{
      $(".scroll_nav").fadeOut();
      $(".fix_menu div").fadeOut();
    }
  });
  $('.fix_top').on('click', function(){
    let offset = $('#wrap').offset();
    $('html').animate({scrollTop : offset.top});
  });
  $('.fix_bottom').on('click', function(){
    let offset = $('#bottom').offset();
    $('html').animate({scrollTop : offset.top});
  });


  /* main slide */
  let $img = $('.slide li');
  let $btn = $('.slide_btn ul li');
  let oldidx = 0;
  let idx = 0;
  let img_n = $img.length;

  function changeImg(idx){
    if(oldidx != idx){
      $btn.eq(oldidx).removeClass('active');
      $btn.eq(idx).addClass('active');
      $img.eq(oldidx).stop().fadeOut(800);
      $img.eq(idx).stop().fadeIn(800);
    }
    oldidx = idx;
  }
  
  function changeAuto(){
    idx++;
    if(idx>img_n-1){idx = 0;}
    changeImg(idx);
  }

  timer = setInterval(changeAuto,7000);

  $btn.click(function(){
    clearInterval(timer);
    idx = $(this).index();
    changeImg(idx);
    timer = setInterval(changeAuto,7000);
  });


  /* sub slide */
  let subImg = $('.sub_slide_img li');
  let subOldidx = 0;
  let subIdx = 0;
  let subImg_n = subImg.length;
  let subBar = $('.bar_active')

  function subSlideImg(subIdx){
    if(subOldidx != subIdx){
      $('.sub_slide_img li').eq(subOldidx).stop().fadeOut(500);
      $('.sub_slide_img li').eq(subIdx).stop().fadeIn(500);
      $('.slide_text li').eq(subOldidx).stop().fadeOut(500);
      $('.slide_text li').eq(subIdx).stop().fadeIn(500);
      $('.bar_active').eq(subOldidx).stop().hide();
      $('.bar_active').eq(subIdx).stop().show();
    }
    subOldidx = subIdx;
  }

  function subAuto(){
    subIdx++;
    if(subIdx>subImg_n-1){subIdx = 0;}
    subSlideImg(subIdx);
  }

  subTimer = setInterval(subAuto,5000);
  subBar.animate({'width':'700px'},5000);

  $('.lbtn').click(function(){
    clearInterval(subTimer);
    subIdx--;
    if(subIdx<0){subIdx=4;}
    subSlideImg(subIdx);
    subTimer = setInterval(subAuto,5000);
  });

  $('.rbtn').click(function(){
    clearInterval(subTimer);
    subIdx++;
    if(subIdx>4){subIdx=0;}
    subSlideImg(subIdx);
    subTimer = setInterval(subAuto,5000);
  });


  /* content2 scroll */
  $(window).scroll(function(){
      let scroll = $(this).scrollTop();
      let itemScroll = 80-scroll/3

      if (scroll>100) {
      $('.product_item').css({'transform' : 'translate3d(0,'+ itemScroll +'px,0)'});
      }
      if (scroll>4244) {
        $('.end_items').css({'transform' : 'translate3d(0,'+ itemScroll +'px,0)'});
      }
  });


  /* gift scroll */
  $('.gift_item').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 3000,
    dots: false,
    speed: 500,
    fade: false,
    cssEase: 'linear',
    draggable : true,
    pauseOnHover : false
  });

  
});
