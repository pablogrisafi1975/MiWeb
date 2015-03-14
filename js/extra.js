$(function(){
	$('#netfirms-link').click(function(){
	    $('#iframe-modal').attr('src','oldwebs/netfirms/netfirms.html');
	    $('#modal-title').text('Mi vieja página en NetFirms');
	    $('.modal').modal({show:true});
	    $('.openifrmahere').find('iframe').load(function() {
	        $('.loading').hide();
	    });
	});
	$('#geocities-buton').click(function(){
		$('#iframe-modal').attr('src','oldwebs/geocities/zzgeo-INDEX.HTML');
		$('#modal-title').text('Mi vieja página en GeoCities');
		$('.modal').modal({show:true});
		$('.openifrmahere').find('iframe').load(function() {
			$('.loading').hide();
		});
	});
});