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
	$('#netfirms-link').click(function() {
		$('#iframe-modal').attr('src', 'oldwebs/netfirms/netfirms.html');
		$('#modal-title').text('Mi vieja página en NetFirms');
		$('.modal-body').css('height', 500)
		$('.modal').modal({
			show : true
		});
		$('.openifrmahere').find('iframe').load(function() {
			$('.loading').hide();
		});
	});
	$('#geocities-buton').click(function() {
		$('#iframe-modal').attr('src', 'oldwebs/geocities/zzgeo-INDEX.HTML');
		$('#modal-title').text('Mi vieja página en GeoCities');
		$('.modal-body').css('height', 550)
		$('.modal').modal({
			show : true
		});
		$('.openifrmahere').find('iframe').load(function() {
			$('.loading').hide();
		});
	});
	$('#small-picture').click(function() {
		$('#iframe-modal').attr('src', 'pic-modal.html');
		$('#modal-title').text('¡Linda foto!');
		$('.modal-body').css('height', 350)
		$('.modal').modal({
			show : true
		});
		$('.openifrmahere').find('iframe').load(function() {
			$('.loading').hide();
		});
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