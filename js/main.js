$(function(){


  $('.slider__head').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__nav'
  });
  $('.slider__nav').slick({

    asNavFor: '.slider__head',
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  
  });

  $('.header__menu-btn').on('click', function(){
    $('.header__menu > ul').slideToggle();
  });


});