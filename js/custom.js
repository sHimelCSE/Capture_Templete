$(document).ready(function(){
    $('.banner_slide1').owlCarousel({
        margin: 0,
        loop: true,
        stagePadding: 0,
        nav: true,
        navText: ["<div class='left_indt'><a href='#'><i class='fas fa-angle-left'></i></a></div>","<div class='right_indt'><a href='#'><i class='fas fa-angle-right'></i></a></div>"],
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        dots: true,
        responsive:{
            480:{
                items: 1
            },
            1000:{
                items: 1
            },
            1200:{
                items: 1
            }
        }
    });
    $('.testimonial_slide').owlCarousel({
        margin: 0,
        loop: true,
        stagePadding: 0,
        nav: true,
        navText: ["<i class='fas fa-arrow-circle-left tst_left_arrow'></i>","<i class='fas fa-arrow-circle-right tst_right_arrow'></i>"],
        slideBy: 1,
        autoplay: false,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        // animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        dots: false,
        responsive:{
            480:{
                items: 1
            },
            1000:{
                items: 1
            },
            1200:{
                items: 1
            }
        }
    });
});








