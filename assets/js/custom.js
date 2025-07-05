(function () {
    'use strict';
    
    // Preloader
	jQuery("#preloader").fadeOut(900);
	jQuery(".preloader-bg").delay(800).fadeOut(900);
	var wind = jQuery(window);
    
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        }
        , BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        }
        , iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
        , Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        }
        , Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        }
        , any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    // Full Height
    var fullHeight = function () {
        if (!isMobile.any()) {
            jQuery('.js-fullheight').css('height', jQuery(window).height());
            jQuery(window).resize(function () {
                jQuery('.js-fullheight').css('height', jQuery(window).height());
            });
        }
    };
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        jQuery('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !jQuery(this.element).hasClass('animated')) {
                i++;
                jQuery(this.element).addClass('item-animate');
                setTimeout(function () {
                    jQuery('body .animate-box.item-animate').each(function (k) {
                        var el = jQuery(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated');
                            }
                            else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated');
                            }
                            else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated');
                            }
                            else {
                                el.addClass('fadeInUp animated');
                            }
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    // Burger Menu 
    var burgerMenu = function () {
        jQuery('.js-gorman-nav-toggle').on('click', function (event) {
            event.preventDefault();
            var $this = jQuery(this);
            if (jQuery('body').hasClass('offcanvas')) {
                $this.removeClass('active');
                jQuery('body').removeClass('offcanvas');
            }
            else {
                $this.addClass('active');
                jQuery('body').addClass('offcanvas');
            }
        });
    };
    // Click outside of offcanvass
    var mobileMenuOutsideClick = function () {
        jQuery(document).click(function (e) {
            var container = jQuery(".gorman-aside, .js-gorman-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if (jQuery('body').hasClass('offcanvas')) {
                    jQuery('body').removeClass('offcanvas');
                    jQuery('.js-gorman-nav-toggle').removeClass('active');
                }
            }
        });
        jQuery(window).scroll(function () {
            if (jQuery('body').hasClass('offcanvas')) {
                jQuery('body').removeClass('offcanvas');
                jQuery('.js-gorman-nav-toggle').removeClass('active');
            }
        });
    };
    // menu active code
    jQuery('.gorman-main-menu a').click(function () {
    jQuery('.gorman-main-menu a.active').removeClass('active');
    jQuery(this).addClass('active');});
    jQuery(window).scroll(function () {
    var href = jQuery(this).scrollTop();
    jQuery('.link').each(function (event) {
        if (href >= jQuery(jQuery(this).attr('href')).offset().top - 1) {
            jQuery('.gorman-main-menu a.active').removeClass('active');
            jQuery(this).addClass('active');
        }
    });
});
    
    // Sections background image from data background
    var pageSection = jQuery(".bg-img, section");
    pageSection.each(function(indx){
        
        if (jQuery(this).attr("data-background")){
            jQuery(this).css("background-image", "url(" + jQuery(this).data("background") + ")");
        }
    });
    
    // Blog Home owlCarousel
    jQuery('.gorman-blog .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 2
            }
            , 1000: {
                items: 2
            }
        }
    });

    jQuery('.rooms2 .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
                , dots: false

            , }
            , 600: {
                items: 2
                , dots: false
  
            }
            , 1000: {
                items: 3
            }
        }
    });
    
    // Clients owlCarousel
    jQuery('.clients .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: true
        , dots: false
        , responsiveClass: true
        , responsive: {
            0: {
                margin: 10
                , items: 3
            }
            , 600: {
                items: 3
            }
            , 1000: {
                items: 4
            }
        }
    });
    // Testimonials owlCarousel
    jQuery('.testimonials .owl-carousel').owlCarousel({
        loop: true
        , margin: 30
        , mouseDrag: true
        , autoplay: false
        , dots: true
        , nav: false
        , navText: ["<span class='lnr ti-angle-left'></span>", "<span class='lnr ti-angle-right'></span>"]
        , responsiveClass: true
        , responsive: {
            0: {
                items: 1
            , }
            , 600: {
                items: 1
            }
            , 1000: {
                items: 1
            }
        }
    });
    //  YouTubePopUp
    jQuery("a.vid").YouTubePopUp();
	
    // MagnificPopup
    jQuery(".img-zoom").magnificPopup({
        type: "image"
        , closeOnContentClick: !0
        , mainClass: "mfp-fade"
        , gallery: {
            enabled: !0
            , navigateByImgClick: !0
            , preload: [0, 1]
        }
    })
    jQuery('.magnific-youtube, .magnific-vimeo, .magnific-custom').magnificPopup({
        disableOn: 700
        , type: 'iframe'
        , mainClass: 'mfp-fade'
        , removalDelay: 300
        , preloader: false
        , fixedContentPos: false
    });
    // Slider
    var sliderMain = function () {
        jQuery('.gorman-hero .flexslider').flexslider({
            animation: "fade"
            , slideshowSpeed: 5000
            , directionNav: true
            , start: function () {
                setTimeout(function () {
                    jQuery('.slider-text').removeClass('animated fadeInUp');
                    jQuery('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            }
            , before: function () {
                setTimeout(function () {
                    jQuery('.slider-text').removeClass('animated fadeInUp');
                    jQuery('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            }
        });
    };
    // Document on load.
    jQuery(function () {
        fullHeight();
        contentWayPoint();
        burgerMenu();
        mobileMenuOutsideClick();
        sliderMain();
    });
    // Smooth Scrolling
    jQuery('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .not('.no-scroll')
    .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        jQuery('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = jQuery(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    // Progress-wrap
     var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
        var scroll = jQuery(window).scrollTop();
        var height = jQuery(document).height() - jQuery(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    jQuery(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on('scroll', function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.progress-wrap').addClass('active-progress');
        } else {
            jQuery('.progress-wrap').removeClass('active-progress');
        }
    });
    jQuery('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    })
    // Button
    var buttons = document.querySelectorAll(".btn");
    for(var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      button.addEventListener("click", function() {
        if(!button.classList.contains("active"))
          button.classList.add("active");
        else
          button.classList.remove("active");
      });
    }
    
    document.addEventListener('DOMContentLoaded', function () {
        document.body.addEventListener('click', function (e) {
            const minusBtn = e.target.closest('.qty-minus');
            const plusBtn = e.target.closest('.qty-plus');
            
            if (minusBtn) {
                e.preventDefault();
                const quantityDiv = minusBtn.closest('.quantity');
                const input = quantityDiv.querySelector('.qty');
                let currentVal = parseFloat(input.value) || 0;
                const step = parseFloat(input.step) || 1;
                const min = parseFloat(input.min) || 0;
                input.value = Math.max(currentVal - step, min);
                jQuery(input).trigger('input').trigger('change');
            } else if (plusBtn) {
                e.preventDefault();
                const quantityDiv = plusBtn.closest('.quantity');
                const input = quantityDiv.querySelector('.qty');
                let currentVal = parseFloat(input.value) || 0;
                const step = parseFloat(input.step) || 1;
                const max = parseFloat(input.max) || Infinity;
                input.value = Math.min(currentVal + step, max);
                jQuery(input).trigger('input').trigger('change');
            }
        });
    });
    
    // Gallery Slider
    document.addEventListener("DOMContentLoaded", function () {
        const galleryThumbs = document.querySelector('.gallery-thumbs');
        const galleryMain = document.querySelector('.gallery-main');
        
        if (galleryThumbs && galleryMain && typeof Swiper !== 'undefined') {
            const thumbsSwiper = new Swiper(galleryThumbs, {
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
            });
    
            const mainSwiper = new Swiper(galleryMain, {
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: thumbsSwiper,
                },
            });
        }
    });
    
    // Modal Product Slider
    jQuery(document).ready(function($) {
        $('.icon-btn').on('click', function() {
            var targetModal = $(this).data('target');
            var $modalElement = $(targetModal);
    
            if (!$modalElement.data('modal-initialized')) {
                $modalElement.modal({ show: false });
                $modalElement.data('modal-initialized', "true");
            }
    
            var mainSlider = $modalElement.find('.product-main-slider')[0];
            var thumbSlider = $modalElement.find('.product-thumbnail-slider')[0];
    
            if (!mainSlider || !thumbSlider) {
                $modalElement.modal('show');
                return;
            }
    
            var mainSwiper = $modalElement.data('mainSwiper');
            var thumbSwiper = $modalElement.data('thumbSwiper');
    
            function showModal() {
                $modalElement.modal('show');
            }
    
            if (!mainSwiper || !thumbSwiper) {
                if (typeof Swiper !== 'undefined') {
                    thumbSwiper = new Swiper(thumbSlider, {
                        loop: true,
                        spaceBetween: 10,
                        slidesPerView: 4,
                        freeMode: true,
                        watchSlidesVisibility: true,
                        watchSlidesProgress: true,
                    });
    
                    mainSwiper = new Swiper(mainSlider, {
                        loop: true,
                        spaceBetween: 10,
                        navigation: {
                            nextEl: mainSlider.querySelector('.swiper-button-next'),
                            prevEl: mainSlider.querySelector('.swiper-button-prev'),
                        },
                        pagination: {
                            el: mainSlider.querySelector('.swiper-pagination'),
                            clickable: true,
                        },
                        thumbs: {
                            swiper: thumbSwiper
                        }
                    });
    
                    $modalElement.data({
                        mainSwiper: mainSwiper,
                        thumbSwiper: thumbSwiper
                    });
    
                    mainSwiper.on('init', function() {
                        showModal();
                    });
    
                    mainSwiper.init();
                } else {
                    showModal();
                }
            } else {
                mainSwiper.update();
                thumbSwiper.update();
                showModal();
            }
        });
    
        $(document).on('click', '[data-dismiss="modal"]', function() {
            var modal = $(this).closest('.modal');
            modal.modal('hide');
        });
    });
	
}());


jQuery('.gorman-main-menu li.has-sub>a').on('click', function () {
    jQuery(this).removeAttr('href');
    var element = jQuery(this).parent('li');
    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp();
    }
    else {
        element.addClass('open');
        element.children('ul').slideDown();
        element.siblings('li').children('ul').slideUp();
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp();
    }
});
jQuery('.gorman-main-menu>ul>li.has-sub>a').append('<span class="holder"></span>');