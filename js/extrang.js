$(function() {
	$('.navbar-collapse a').click(function() {
		if($('#small-screen-menu').is(':visible')){
			$(".navbar-collapse").collapse('hide');
		}
	});



//	$(window).scroll(function() {
//		if ($(this).scrollTop() > 50) {
//			$('#back-to-top').fadeIn();
//		} else {
//			$('#back-to-top').fadeOut();
//		}
//	});
});

