(function($) {
	"use strict";
	//alert((ww_custom_script_pattern.template_directory_uri));
	if (ww_custom_script_options.layout_style == 'boxed') {
		if (ww_custom_script_options.use_custom_pattern) {
				jQuery('body').css('background', 'url('+ww_custom_script_pattern.pattern+') '+ww_custom_script_pattern.pattern_bg_repeat+' center center');		
	//alert(ww_custom_script_pattern.pattern);				
		} else {
			if (ww_custom_script_pattern.pattern == 'transparent') {
				jQuery('body').css('background', 'transparent');
			} else {
				jQuery('body').css('background', 'url('+ww_custom_script_pattern.template_directory_uri+'/images/patterns/'+ww_custom_script_pattern.pattern+'.png) '+ww_custom_script_pattern.pattern_bg_repeat+' center center');
			}
		}	
	}
	if(ww_custom_script_options.show_page_loader){
		jQuery(window).load(function(){
			jQuery(window).trigger('scroll');
			jQuery('#loading').css({height:0});
		});
		window.onbeforeunload = function(e) {
			e = e || window.event;
			jQuery(window).trigger('scroll');
			jQuery('#loading').css({opacity:1,height:'101%'});
		}
	}
	/*template function scrip*/
	/* jQuery('video').mediaelementplayer({
		features: ['playpause','progress','current','duration','tracks','volume']
	});
	jQuery('audio').mediaelementplayer(); */
})(jQuery);
