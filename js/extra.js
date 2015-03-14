$(function(){
	$('#netfirms-link').click(function(){
	    $('#iframe-modal').attr('src','oldwebs/netfirms/netfirms.html');
	    $('#modal-title').text('Mi vieja página en NetFirms');
	    $('.modal').modal({show:true});
	    $('.openifrmahere').find('iframe').load(function() {
	        $('.loading').hide();
	    });
	})
});