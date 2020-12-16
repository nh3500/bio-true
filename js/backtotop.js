jQuery(document).ready(function() {
	var offset = 220;
	var duration = 500;
	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.back-to-top').fadeIn(duration);
		} else {
			jQuery('.back-to-top').fadeOut(duration);
		}
	});
	
	jQuery('.back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	})
	// jQuery('a[href=#section1]').click(function(event) {
		// event.preventDefault();
		// jQuery('html, body').animate({scrollTop:$(��#section1��).offset().top }, duration);
		// return false;
	// })
	// jQuery('a[href=#section2]').click(function(event) {
		// event.preventDefault();
		// jQuery('html, body').animate({scrollTop:$(��#section2��).offset().top }, duration);
		// return false;
	// })
	  $(function () {
           $('a[href*=#]:not([href=#])').click(function() {
               var target = $(this.hash);
               $('html,body').animate({
                   scrollTop: target.offset().top
               }, 1000);
               return false;
           });
       });
});