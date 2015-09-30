$(function() {
	$('.navbar-collapse a').click(function() {
		$(".navbar-collapse").collapse('hide');
	});
	$("a[href='#top']").click(function() {
		$("html, body").animate({
			scrollTop : 0
		}, "slow");
		return false;
	});


	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
});

function closeModal() {
	$('.modal').modal('hide');
}