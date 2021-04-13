$('.owl-carousel').owlCarousel({
    loop:false,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1200:{
            items:5
        }
    }
})

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("headerTransition");
      }
      else{
        $('header').removeClass("headerTransition");
      }
    });