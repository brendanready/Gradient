$(function(){
    
	// Browser window scroll (in pixels) after which the "BackToTop" Button is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1000,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 550,
		//grab the "back to top" link
		$back_to_top = $('.BackToTop_Btn');

	// Hide or show the "BackToTop" Button
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('visible') : $back_to_top.removeClass('visible fade_out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('fade_out');
		}
	});

	// Smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});
