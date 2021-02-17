$(document).ready(function(){
    (function() {
        'use strict';
  
        // breakpoint where swiper will be destroyed
        // and switches to a dual-column layout
        const breakpoint = window.matchMedia( '(min-width: 992px)' );
  
        // keep track of swiper instances to destroy later
        let mySwiper;
  
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
  
        const breakpointChecker = function() {
  
          // if larger viewport and multi-row layout needed
          if ( breakpoint.matches === true ) {
  
            // clean up old instances and inline styles when available
            if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
  
            // or/and do nothing
            return;
  
            // else if a small viewport and single column layout needed
            } else if ( breakpoint.matches === false ) {
  
              // fire small viewport version of swiper
              return enableSwiper();
  
            }
  
        };
  
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
  
        const enableSwiper = function() {
  
            mySwiper = new Swiper('.swiper-container--works', {
            slidesPerView: 1,
            simulateTouch: true,
            watchOverflow: true,
            watchSlidesVisibility: true,
            cssMode: false,
            loop: false,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '',
                prevEl: '',
            },
                pagination: {
                el: '#disc-works',
                clickable: true,
            },
                mousewheel: {
                forceToAxis: true,
            },
            touchReleaseOnEdges: true,
            keyboard: false,
                breakpoints: {
                    350: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                }
            });
  
        };
  
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////
  
        // keep an eye on viewport size changes
        breakpoint.addListener(breakpointChecker);
  
        // kickstart
        breakpointChecker();
  
  
  
      })(); /* IIFE end */
        
    // Open/close
    $(document).on('click', '.dropdown-select', function (event) {
        if($(event.target).hasClass('dd-searchbox')){
            return;
        }
        $('.dropdown-select').not($(this)).removeClass('open');
        $(this).toggleClass('open');
        if ($(this).hasClass('open')) {
            $(this).find('.option').attr('tabindex', 0);
            $(this).find('.selected').focus();
        } else {
            $(this).find('.option').removeAttr('tabindex');
            $(this).focus();
        }
    });

    // aniamte scroll
    $(function() {
        $('a[href*=\\#]:not([href=\\#])').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
    });

    $(".scrollbar").niceScroll({
        railpadding: {top:20,right:10,left:7,bottom:20},
        railoffset: true,
        cursorcolor:"rgba(0, 0, 0, 0.17)",
        background:"rgba(0, 0, 0, 0)",
        cursorborder:"0",
        cursorwidth: 3,
        cursorborderradius:7,
        cursoropacitymin: 1,
        cursoropacitymax: 1,
        scrollspeed: 120
    });
    
    // quantity buttons
    $('.quantity__button--minus').click(function () {
		var $input = $(this).parents('.quantity').find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.quantity__button--plus').click(function () {
		var $input = $(this).parents('.quantity').find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
    });
    
    // menu responsive
    $('[data-target]').on('click', function(){
        var target = $(this).data("target");
        if($(this).hasClass('target-absolute')) {
            $(this).toggleClass('active');
            $(target).toggleClass('active');
            $(target).siblings('.overlay').addClass('active');
            if($(this).hasClass('overlay')) {
                $(this).removeClass('active');
                $('.header__icons-icon--hamburger').removeClass('active');
            }
        }
        else if($(this).hasClass('css-toggle')) {
            $(this).toggleClass('active').siblings(target).toggleClass('active');
        }
        else if($(this).hasClass('faq__button')) {
            $(this).toggleClass('active').siblings(target).slideToggle().toggleClass('active');
            $(this).parent('.faq__block').toggleClass('active');
        }
        else {
            $(this).toggleClass('active').siblings(target).slideToggle();
        }
        
    });


    // carousel
    var swiper = new Swiper('.swiper-container--intro', {
        slidesPerView: 1,
        simulateTouch: false,
        spaceBetween: 0,
        watchSlidesVisibility: true,
        effect: 'fade',
        pagination: {
            el: '#disc-intro, #disc-num',
            clickable: true,
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        mousewheel: {
            forceToAxis: true,
        },
        on: {
            slideChangeTransitionStart: function () {
                $('.intro__picture').hide(0);
                $('.intro__picture').removeClass('aos-init').removeClass('aos-animate');
              },
            slideChangeTransitionEnd: function () {
                $('.intro__picture').show(0);
                AOS.init();
            },
        },
        keyboard: false,
    });
    mySwiper = new Swiper('.swiper-container--services-block', {
        slidesPerView: 1,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-services-block',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            350: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 2,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--master', {
        slidesPerView: 1,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-master',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            350: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--reviews', {
        slidesPerView: 1,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-reviews',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            575: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 1,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--gallery', {
        slidesPerView: 1,
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-gallery',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            350: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
        }
    });
    mySwiper = new Swiper('.swiper-container--reviews-block', {
        slidesPerView: 'auto',
        simulateTouch: false,
        watchOverflow: true,
        watchSlidesVisibility: true,
        cssMode: false,
        loop: false,
        navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
        pagination: {
        el: '#disc-reviews-block',
        clickable: true,
    },
        mousewheel: {
        forceToAxis: true,
    },
        touchReleaseOnEdges: true,
        keyboard: false,
        breakpoints: {
            575: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
        }
    });
    
    // show more
    $(".show-more-btn").click(function(e){
        $(".swiper-slide--directions:hidden").fadeIn();
        $(this).fadeOut();
    })
    
    // AOS aniamte
    $(function () {
        AOS.init();
    });
    
    // Form validate
    $('form').each(function() {
        $(this).validate({
            highlight: function(element) {
                $(element).parents('.form-block__group-wrapper, .form__group').addClass('error');
            },
            unhighlight: function(element) {
                $(element).parents('.form-block__group-wrapper, .form__group').removeClass('error');
            },
            errorPlacement: function(error,element) {
                return true;
            },
            errorClass: 'form__error',
            errorElement: 'div',
            rules: {
                userName: {
                    required: true,
                },
                userTel: {
                    required: true,
                },
                userEmail: {
                    required: true,
                },
                userMsg: {
                    required: true,
                }
            },
            messages: {
                userName: {
                    required: '',
                },
                userTel: {
                    required: '',
                },
                userEmail: {
                    required: '',
                },
                userMsg: {
                    required: '',
                }
            }
        });
    });
    
    // mask
    $('input[type="tel"]').mask('+7 (999) 999-99-99');
});