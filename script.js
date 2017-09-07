$(document).ready(function () {
    $slider = $('#slider');
    $slider.addClass('owl-carousel owl-theme');
    $slider.owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        loop: true,
        navText: ["<i class=\"fa fa-angle-left fa-lg\"></i>", "<i class=\"fa fa-angle-right fa-lg\"></i>"]
    });

    $sliderFooter = $('#sliderFooter');
    $sliderFooter.addClass('owl-carousel owl-theme');
    $sliderFooter.owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i class=\"fa fa-angle-left fa-lg\"></i>", "<i class=\"fa fa-angle-right fa-lg\"></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $sliderFooter2 = $('#sliderFooter2');
    $sliderFooter2.addClass('owl-carousel owl-theme');
    $sliderFooter2.owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: ["<i class=\"fa fa-angle-left fa-lg\"></i>", "<i class=\"fa fa-angle-right fa-lg\"></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});
$(document).ready(function () {
    $slider = $('#slider');
    $slider.addClass('owl-carousel owl-theme');
    $slider.owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        loop: true,
        navText: ["<i class=\"fa fa-angle-left fa-lg\"></i>", "<i class=\"fa fa-angle-right fa-lg\"></i>"]
    });

    $sliderCource = $('#slider-cource');
    $sliderCource.addClass('owl-carousel owl-theme');
    $sliderCource.owlCarousel({
        items: 1,
        loop: false,
        center: true,
        margin: 10,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash'
    });
});
// Script for top Navigation Menu
jQuery(window).bind('scroll', function () {
    if (window.innerWidth > 768) {
        if (jQuery(window).scrollTop() > 50) {
            jQuery('#header-2').removeClass('hidden');
            jQuery('#header-2 li').removeClass('open');
            jQuery('#header-1').addClass('hidden');
            jQuery('#header-2').addClass('navbar-fixed-top').removeClass('topnavbar');
            jQuery('body').addClass('bodytopmargin').removeClass('bodynomargin');
        } else {
            jQuery('#header-1').removeClass('hidden');
            jQuery('#header-1 li').removeClass('open')
            jQuery('#header-2').addClass('hidden');
            jQuery('#header-2').removeClass('navbar-fixed-top').addClass('topnavbar');
            jQuery('body').removeClass('bodytopmargin').addClass('bodynomargin');
        }
    }
    if (jQuery(window).scrollTop() > 150 && jQuery(window).scrollTop() < 300) {
        jQuery('.content-course img').animateCss('bounce');
    }
    if (jQuery(window).scrollTop() > 600 && jQuery(window).scrollTop() < 800) {
        jQuery('.register img').animateCss('tada');
    }
});
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});