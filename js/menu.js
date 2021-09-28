// ハンバーガーメニュー用
$('.open_menu').click(function () {
  $(this).toggleClass('active');
  $('#list').toggleClass('panel_active');
  $('.circle').toggleClass('circle_active');
});

$('#list a').click(function () {
  $('.open_menu').removeClass('active');
  $('#list').removeClass('panel_active');
  $('.circle').removeClass('circle_active');
});

// ヘッダーの高さぶん下がるscript要素
$(function() {
  var height = $('#header').height();
  $('body').css('margin-top', height + 5);
});