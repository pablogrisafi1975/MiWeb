$(function() {
	$('#netfirms-link').click(function() {
		$('#iframe-modal').attr('src', 'oldwebs/netfirms/netfirms.html');
		$('#modal-title').text('Mi vieja página en NetFirms');
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
		$('.modal').modal({
			show : true
		});
		$('.openifrmahere').find('iframe').load(function() {
			$('.loading').hide();
		});
	});
	$('#menu-tab a[data-toggle="pill"]').on('shown.bs.tab', function(e) {
		window.location.hash = 'tab=' + e.target.href.substr(e.target.href.indexOf('#') + 1);
	});
	$("a[href*='#tab=']").click(function(e){
		var selectedTabIndex = this.href.indexOf('=');
		var selectedTab = this.href.substr(selectedTabIndex + 1);
		$('#menu-tab a[href="#' + selectedTab + '"]').tab('show');
		e.preventDefault();
		return false;
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