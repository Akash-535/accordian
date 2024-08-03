
$(".sliderbox").slick({
    dots: true,
    infinite: true,
    speed: 300,
    nextArrow: ".next",
    prevArrow: ".prev",
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
   
    autoplaySpeed: 2000,
    infinite: true,
    variableWidth: true,
   
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                dots: true,
            }
        }
    ]
});
 
$(".sliderboxs").slick({
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '60px',
 
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                dots: true,
            }
        }
    ]
});

$('.slider-boxthree').slick({
    dots: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true
  });
  window.sliderOne=function(){
    $('.sliderboxs').slick({
    autoplay:true,
    autoplaySpeed:1500,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    centerMode:true,
    slidesToShow:3,
    slidesToScroll:1
    });
  };
  