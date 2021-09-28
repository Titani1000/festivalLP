$('.slider').slick({
  fade:true,
  autoplay:true,
  autoplaySpeed:5000,
  speed:1000,
  infinite:true,
  slidesToShow:1,
  slidesToScroll:1,
  arrows:false,
  dots:false,
  pauseOnFocus:false,
  pauseOnHover:false,
  pauseOnDotsHover: false,
});


// ギャラリースライダー要素

$('.gallery_slider').slick({
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [
    {
    breakpoint: 769,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 426,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
]
});