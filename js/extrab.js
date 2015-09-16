$(function() {
	$('.navbar-collapse a').click(function(){
	    $(".navbar-collapse").collapse('hide');
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
		$('#modal-title').text('Linda foto, eh!');
		$('.modal-body').css('height', 250)
		$('.modal').modal({
			show : true
		});
		$('.openifrmahere').find('iframe').load(function() {
			$('.loading').hide();
		});
	});
	$('#menu-tab a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
		window.location.hash = 'tab=' + e.target.href.substr(e.target.href.indexOf('#') + 1);
	});
	$("a[href*='#tab=']").click(function(e){
		var selectedTabIndex = this.href.indexOf('=');
		var selectedTab = this.href.substr(selectedTabIndex + 1);
		console.log('selectedTab:' + selectedTab);
		$('#menu-tab a[href="#' + selectedTab + '"]').tab('show');
		e.preventDefault();
		return false;
	});
	$(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
	var selectedTabIndex = window.location.hash.indexOf('=');
	if (selectedTabIndex !== -1) {
		var selectedTab = window.location.hash.substr(selectedTabIndex + 1);
		$('#menu-tab a[href="#' + selectedTab + '"]').tab('show');
	}else{
		window.location.hash = 'tab=bienvenido';
	}
});

function closeModal() {
	$('.modal').modal('hide');
}