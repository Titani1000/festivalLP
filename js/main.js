// ページスクロールによって引き出す関数
$(window).scroll(function (){
  TriggerAnime();
  ScrollAnime();
  slideAnime();
  fadeAnime();
});


// スクロール動作で動く用
function TriggerAnime() {

  $('.LineTrigger').each(function() {
    var elemPos = $(this).offset().top-100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('lineanime');
    } else {
      $(this).removeClass('lineanime');
    }
  });
}

function fadeAnime() {
  $('.fadeTrigger').each(function() {
    var elemPos = $(this).offset().top-100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
}

// 下にスクロールするとヘッダーが消え、上にスクロールするとヘッダーが現れるjavascript
var beforePos=0;

function ScrollAnime() {
  var elemTop = $('#about').offset().top;
  var scroll = $(window).scrollTop();

  if(scroll == beforePos) {
  } else if (elemTop > scroll || 0 >scroll - beforePos) {
    $('#header').removeClass('UpMove');
    $('#header').addClass('DownMove');
  } else {
    $('#header').removeClass('DownMove');
    $('#header').addClass('UpMove');
  }

  beforePos = scroll;
}

// テキスト左から現れる要素
function slideAnime() {
  $('.leftAnime').each(function() {
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('slideAnimeLeftRight');
      $(this).children('.leftAnimeInner').addClass('slideAnimeRightLeft');
    } else {
      $(this).removeClass('slideAnimeLeftRight');
      $(this).children('.leftAnimeInner').removeClass('slideAnimeRightLeft')
    }
  });
}

// リンク先のIDまでスムーススクロール

$('.page_link a[href*="#"]').click(function() {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top-70;
  $('body,html').animate({scrollTop: pos},1000);
  return false;
})