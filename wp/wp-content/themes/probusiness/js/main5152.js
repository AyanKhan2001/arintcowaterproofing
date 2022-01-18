/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/*-------------------------------------------------------------------------*/
function wheel(event) {
	if (event.wheelDelta) delta = event.wheelDelta / 120; 
	else if (event.detail) delta = -event.detail / 3;
	handle(270,500);
	if (event.preventDefault){event.preventDefault()};
	event.returnValue = false;
}
function handle(distance,time) {
	jQuery('html, body').stop().animate({
		scrollTop: jQuery(window).scrollTop() - (distance * delta)
	}, time);
}
function fullWidth(){
    var windowWidth = jQuery(window).width();
    jQuery('.stripe').each(function(){
        var $bgobj = jQuery(this);
        var width = $bgobj.width();
        var v = (windowWidth - width)/2;
        $bgobj.css({
            marginLeft:-v,
            paddingLeft:v,
            paddingRight:v
        });
    })
}
function boxed(){
    var windowWidth = jQuery(window).width();
    jQuery('.stripe').each(function(){
        jQuery(this).css({
            marginLeft:0,
            paddingLeft:0,
            paddingRight:0
        });
    })
}
function calcToTopColor(){
	var $scrollTop = jQuery(window).scrollTop();
	var $windowHeight = jQuery(window).height();
	if($scrollTop > $windowHeight){
		jQuery('#to-top').fadeIn();
	}
	else {
		jQuery('#to-top').fadeOut();
	}
}
jQuery(document).ready(function($){
	"use strict";
    $(window).resize(function(){
        fullWidth();
    })
    /* Menu */
	var depth = 0;
	var el = null;
	var w_width = jQuery(window).width();
	jQuery('li.menu-item').hover(function(){
		el = jQuery('.sub-menu:first',this);
		if(el.length > 0){
			var el_width = el.outerWidth();
			var el_left = el.offset().left;
			console.log(el_left);
			if(w_width < (el_left+el_width)){
				el.addClass('autodrop_left');
			}else if(el_left<=0){
				el.addClass('autodrop_right');
			}
		}
	},function(){
		if(el){
			el.removeClass('autodrop_left');
			el.removeClass('autodrop_right');
			el = null;
		}
	})
	/* End Menu */ 
    $(window).scroll(function() {        
        var offsetTop = $(this).scrollTop();
        var headerHeight = $('#ww_header').height();
        var headerOffset = $('#ww_header').offset();
        if (offsetTop > (headerHeight/2) + headerOffset.top) { 
            $('#stripe-style-header-wrapper').hide();
            $('#ww_stick_header').show();
            $('.ww-stick-header-wrapper').stop().animate({
                top: 0
            }, 400);
        } else {
            $('#stripe-style-header-wrapper').show();
            $('#ww_stick_header').hide();
            $('.ww-stick-header-wrapper').stop().animate({
                top: -100
            }, 100);
        }
    });
	
	/***************** Superfish ******************/
    function initSF() {
        $(".sf-menu").superfish({
            delay: 0,
            autoArrows: true,
            speed: 'fast',
            animation: {
                opacity: 'show'
            }
        });
    }
    function addOrRemoveSF() {
        if ($(window).width() < 940 && $('body').attr('data-responsive') == '1') {
            $('body').addClass('mobile');
            $('.ww-header-wrapper nav').hide();
        }
        else {
            $('body').removeClass('mobile');
            $('.ww-header-wrapper nav').show();
            //$('.mobile-menu').hide();
            $('.ww-submenu-mobile').hide();
            $('.ww-submenu-mobiles').hide();
            $('.ww-nav-stick').hide();
            $('.sf-sub-indicator').css('height', $('a.sf-with-ul').height());
        }
    }
    $('nav > ul.ww-menu > li.has-sub-menu').each(function() {
        $(this).find(' > a').append('<span class="sf-sub-indicator"><i class="fa fa-caret-down"></i></span>');
    });
    
    $('#menu-top-menu li').each(function() {
        $(this).find(' > a').append('<span class="menusys_name"><i class="fa fa-home left"></i></span>');
    });
    
    /* Hover on Verticla and Accordion menu */
    $('.ww-menu-vertical .level-0 > li:has(">ul")').mouseover(function() {
        $(this).find('.sf-sub-indicator').html('<i class="fa fa-caret-right"></i>');
    });
    $('.ww-menu-vertical .level-0 > li:has(">ul")').mouseout(function() {
        $(this).find('.sf-sub-indicator').html('<i class="fa fa-caret-down"></i>');
    });
    /* Responsive nav */
    $('#toggle-nav').click(function() {
        $('.ww-submenu-mobile').stop(true, true).slideToggle(500);
        return false;
    }); 
	$('#toggle-nav-mobiles').click(function() {
        $('.ww-submenu-mobiles').stop(true, true).slideToggle(500);
        return false;
    });
	$('#toggle-nav-stick').click(function() {
        $('.ww-nav-stick').stop(true, true).slideToggle(500);
        return false;
    });
    /* Append dropdown indicators / give classes */
    $('.ww-submenu-mobile ul li').each(function() {
        if ($(this).find('> ul').length > 0) {
            $(this).addClass('has-ul');
            $(this).find('> a').append('<span class="sf-sub-indicator"><i class="fa fa-angle-down"></i></span>');
        }
    });
	/* Append dropdown indicators / give classes */
    $('.ww-submenu-mobiles ul li').each(function() {
        if ($(this).find('> ul').length > 0) {
            $(this).addClass('has-ul');
            $(this).find('> a').append('<span class="sf-sub-indicator"><i class="fa fa-angle-down"></i></span>');
        }
    });
	$('.ww-nav-stick ul li').each(function() {
        if ($(this).find('> ul').length > 0) {
            $(this).addClass('has-ul');
            $(this).find('> a').append('<span class="sf-sub-indicator"><i class="fa fa-angle-down"></i></span>');
        }
    });
    /* Events */
    $('.ww-submenu-mobile ul li:has(">ul") > a .sf-sub-indicator').click(function() {
        $(this).parent().parent().toggleClass('open');
        $(this).parent().parent().find('> ul').stop(true, true).slideToggle();
        return false;
    });
	$('.ww-submenu-mobiles ul li:has(">ul") > a .sf-sub-indicator').click(function() {
        $(this).parent().parent().toggleClass('open');
        $(this).parent().parent().find('> ul').stop(true, true).slideToggle();
        return false;
    }); 
	$('.ww-nav-stick ul li:has(">ul") > a .sf-sub-indicator').click(function() {
        $(this).parent().parent().toggleClass('open');
        $(this).parent().parent().find('> ul').stop(true, true).slideToggle();
        return false;
    }); 	
	
    /* End Horizontal Menu */
	
	if ( $.browser.webkit ) {
		if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
		window.onmousewheel = document.onmousewheel = wheel;
		var time = 500;
		var distance = 270;
		$(document).keydown(function (e) {
			switch (e.which) {
				/* up */
				case 38:
					$('html, body').stop().animate({
						scrollTop: $(window).scrollTop() - distance
					}, time);
					break;
				/* down */
				case 40:
					$('html, body').stop().animate({
						scrollTop: $(window).scrollTop() + distance
					}, time);
					break;
			}
		})
	}
	/*-------------------------------------------------------------------------*/
	/* Scroll to top
	/*-------------------------------------------------------------------------*/
	var $scrollTop = $(window).scrollTop();
    
    /* starting bind */
    if( $('#to-top').length > 0 && $(window).width() > 1000) {	
        if($scrollTop > 350){
            $(window).bind('scroll',hideToTop);
        }
        else {
            $(window).bind('scroll',showToTop);
        }
    }
    function showToTop(){
        if( $scrollTop > 350 ){
            $('#to-top').stop(true,true).animate({
                'bottom' : '5px'
            },350,'easeInOutCubic');			
            $(window).unbind('scroll',showToTop);
            $(window).bind('scroll',hideToTop);
        }
    }
    function hideToTop(){
        if( $scrollTop < 350 ){
            $('#to-top').stop(true,true).animate({
                'bottom' : '-30px'
            },350,'easeInOutCubic');	
		
            $(window).unbind('scroll',hideToTop);
            $(window).bind('scroll',showToTop);			
        }
    }
    /* to top color */
    if( $('#to-top').length > 0 ) {	
        /* calc on scroll */
        $(window).scroll(calcToTopColor);
	
        /* calc on resize */
        $(window).resize(calcToTopColor);
    }
    /* scroll up event */
    $('#to-top').click(function(){
        $('body,html').stop().animate({
            scrollTop:0
        },800,'easeOutCubic')
        return false;
    });
	
	$('.alert a').click(function(){
        var $p =$(this).parent();
        $p.parent().slideUp(500);
    })
	
    /* Parallax Section */
    var windowHeight = jQuery(window).height();
    fullWidth();
    jQuery('.stripe-parallax-bg').each(function(){
        var $bgobj = jQuery(this); // assigning the object
    
        jQuery(window).scroll(function() {
            var scrollTop = jQuery(window).scrollTop();
            var offset = $bgobj.offset().top;
            var height = $bgobj.height();
            /* Check if above or below viewport */
            if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
            /* return; */
            }
            
            var yPos = Math.round((offset - scrollTop) * 0.5);
             
            /* Put together our final background position */
            var coords = 'center '+ (-yPos) + 'px';
 
            /* Move the background */
            $bgobj.css({
                backgroundPosition: coords
            });
        });
    })
	/* Video Section */
    if(jQuery(window).width() > 767){
        jQuery('.stripe-video-bg video.video-parallax').each(function(){
            var $bgobj = jQuery(this);
			var p_offsetTop = $bgobj.parents('.stripe-video-bg').offset().top;
			var p_Height = $bgobj.parents('.stripe-video-bg').height();
			var p_paddingTop = parseInt($bgobj.parent().css('paddingTop'));
			var p_paddingBottom = parseInt($bgobj.parent().css('paddingBottom'));
			var height = p_Height+p_paddingTop+p_paddingBottom;
			$bgobj.attr('data-offset',height+p_offsetTop);
			$bgobj.css({ 
				 top: p_offsetTop
			});
            jQuery(window).scroll(function() {
                var scrollTop = jQuery(window).scrollTop();
                var offsetTop = $bgobj.offset().top;
                var p_offsetTop = $bgobj.parents('.stripe-video-bg').offset().top;
                var p_Height = $bgobj.parents('.stripe-video-bg').height();
                var p_paddingTop = parseInt($bgobj.parent().css('paddingTop'));
                var p_paddingBottom = parseInt($bgobj.parent().css('paddingBottom'));
				var height = p_Height+p_paddingTop+p_paddingBottom;
				var yPos = p_offsetTop-scrollTop;
				$bgobj.css({ 
					 top: yPos
				});
				if(p_offsetTop<scrollTop&&(p_offsetTop+p_Height+p_paddingTop+p_paddingBottom)>scrollTop){
					$bgobj.css({ 
						 top: 0
					});
				}
				if((p_offsetTop+p_Height+p_paddingTop+p_paddingBottom)<scrollTop){
					//$bgobj.hide();
				}
            }); 
        });
    }
    jQuery('.tabs-wrapper').each(function() {
        jQuery(this).find(".tab_content").hide(); //Hide all content
        jQuery(this).find("ul.tabs li:first").addClass("active").show(); //Activate first tab
        jQuery(this).find(".tab_content:first").show(); //Show first tab content
    });
	
    /* On Click Event */
    jQuery("ul.tabs li").click(function(e) {
        jQuery(this).parents('.tabs-wrapper').find("ul.tabs li").removeClass("active");
		/* Remove any "active" class */
        jQuery(this).addClass("active"); //Add "active" class to selected tab
        jQuery(this).parents('.tabs-wrapper').find(".tab_content").hide();
		/* Hide all tab content */
        var activeTab = jQuery(this).find("a").attr("href");
		/* Find the href attribute value to identify the active tab + content */
        jQuery(this).parents('.tabs-wrapper').find(activeTab).fadeIn();
		/* Fade in the active ID content */
		
        e.preventDefault();
    });
	
    jQuery("ul.tabs li a").click(function(e) {
        e.preventDefault();
    });
	
	jQuery('.es-carousel-wrapper').each(function() {
        jQuery(this).elastislide({
            imageW: 190,
            minItems: 1,
            margin: 30,
            border: 0,
            current:10
        });
    });
    
    /* Fix to adjust on windows resize */
    jQuery(window).triggerHandler('resize.elastislide');
});
jQuery(window).load(function($) {
	var dataFixedFooter = jQuery('body').data('fixed-footer');
	if(dataFixedFooter == 1){
	if (jQuery(window).width() >= 768) {
		jQuery('#ww_footer').prevAll('section').css({
			position: 'relative',
			zIndex: 1
		});
		jQuery('#ww_footer').prev().css({
			marginBottom: (jQuery('#ww_footer').height()) + 'px'
		});
		jQuery('#ww_footer').css({
			bottom: 0
		});
		jQuery('#ww_footer').css({
			position: 'fixed',
			width: '100%'
		});
	}
	
	jQuery(window).resize(function() {
		if (jQuery(window).width() >= 768) {
			setTimeout(function() {
				fixedfooter()
			}, 500);
		} else {
			normalfooter();
		}
	});
	
	function fixedfooter() {
		jQuery('#ww_footer').prevAll('section').css({
			position: 'relative',
			zIndex: 1
		});
		jQuery('#ww_footer').prev().css({
			marginBottom: (jQuery('#ww_footer').height()) + 'px'
		});
		jQuery('#ww_main_body').css({
			bottom: (jQuery('#ww_footer').height()) + 'px'
		});
		jQuery('#ww_footer').css({
			bottom: 0
		});
		jQuery('#ww_footer').css({
			position: 'fixed',
			width: '100%'
		});
	}
	function normalfooter() {
		jQuery('#ww_footer').prev().css({
			marginBottom: 0
		});
		jQuery('#ww_footer').css({
			position: 'relative'
		});
		jQuery('#ww_footer').css({
			marginBottom: 0,
			bottom: 0
		});
	}
	
	}
	
	jQuery('.wpb_row').each(function(){
        if(jQuery(this).hasClass('ww-same-height')){
            var height = jQuery(this).height();
             jQuery(this).find(".vc_style").each(function(){
                jQuery(this).css('min-height', height);
            });
        }
        
    });
     var windowWidth = jQuery(window).width();
    jQuery('.stripe').each(function(){
        var $bgobj = jQuery(this);
		var width = $bgobj.width();
		var v = (windowWidth - width)/2;
		$bgobj.css({marginLeft:-v,paddingLeft:v,paddingRight:v});
    })
});