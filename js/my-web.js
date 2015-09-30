function router ($routeProvider, $locationProvider) {
	  $routeProvider
	  	.when('/bienvenido', {templateUrl: 'views/bienvenido.html'})
	  	.when('/contacto', {templateUrl: 'views/contacto.html'})
	  	.when('/experiencia', {templateUrl: 'views/experiencia.html'})
	  	.when('/proyectos', {templateUrl: 'views/proyectos.html'})
	  	.when('/redes-sociales', {templateUrl: 'views/redes-sociales.html'})
	  	.when('/presencia-web', {templateUrl: 'views/presencia-web.html'})
	  	.when('/el-pasado', {templateUrl: 'views/el-pasado.html'})
	  	.otherwise({
	  		redirectTo: '/bienvenido'
	  	});
	
};
function uiLink() {
	return {
		restrict : 'E',
		replace : true,
		transclude : true,
		scope : {
			url : "@url"
		},
		controller : function() {

		},
		link : function($scope, $element, $attrs) {
		},
		template : '<a href="{{url}}" target="_blank" ng-transclude></a>',
	};
}
function uiSocialYes() {
	return {
		restrict : 'E',
		replace : true,
		transclude : true,
		scope : {
			url : "@url",
			iconSrc : "@iconSrc",
			iconAlt : "@iconAlt"
		},
		controller : function() {

		},
		link : function($scope, $element, $attrs) {
		},
		template : [
			'<div class="col-md-6">',
				'<div class="panel panel-info">',
					'<div class="panel-body">',
						'<ui-link url="{{url}}">',
							'<img src="{{iconSrc}}" alt="{{iconAlt}}" title="{{url}}" class="pull-left">',
						'</ui-link>',
						'<span ng-transclude></span>',
					'</div>', 
				'</div>', 
			'</div>' ].join('')
	};
}
function uiSocialNo() {
	return {
		restrict : 'E',
		replace : true,
		transclude : true,
		scope : {
			url : "@url",
			iconSrc : "@iconSrc",
			iconAlt : "@iconAlt"
		},
		controller : function() {
			
		},
		link : function($scope, $element, $attrs) {
		},
		template : [
	        '<div class="col-md-4">',
	        	'<div class="panel panel-warning">',
	        		'<div class="panel-body">',
	        			'<img src="{{iconSrc}}" alt="{{iconAlt}}" class="pull-left">',
	        			'<span ng-transclude></span>',
	        		'</div>',
	        	'</div>',
	        '</div>'].join('')
	};
}

function uiProject() {
	return {
		restrict : 'E',
		replace : true,
		transclude : true,
		scope : {
			url : "@url",
			title : "@title"
		},
		controller : function() {
			
		},
		link : function($scope, $element, $attrs) {
		},
		template : [
		    '<div class="col-md-6 ">' +
		       '<div class="panel panel-info">' +
		           '<div class="panel-heading">' +
		             '<ui-link url="{{url}}" class="panel-title">{{title}}</ui-link>' +
		           '</div>' +
		        '<div class="panel-body">' +
		           '<span ng-transclude></span>' +
		        '</div>' +
		    '</div>' ].join('')
	};
}

function TabHeaderController($location) {
	this.isActive = function(viewLocation) {
		return viewLocation === $location.path();
	};
}

function DialogController($location) {
	this.netfirms = function(){
		$('#iframe-modal').attr('src', 'oldwebs/netfirms/netfirms.html');
		$('#modal-title').text('Mi vieja página en NetFirms');
		$('.modal-body').css('height', 500)
		$('.modal').modal({
			show : true
		});
		$('.openifrmahere').find('iframe').load(function() {
			$('.loading').hide();
		});
		return false;
	};
	
	this.geocities = function(){
		$('#iframe-modal').attr('src', 'oldwebs/geocities/zzgeo-INDEX.HTML');
		$('#modal-title').text('Mi vieja página en GeoCities');
		$('.modal-body').css('height', 550)
		$('.modal').modal({
			show : true
		});
		$('.openifrmahere').find('iframe').load(function() {
			$('.loading').hide();
		});
	};
	
	this.foto = function(e) {
		$('#iframe-modal').attr('src', 'pic-modal.html');
		$('#modal-title').text('¡Linda foto!');
		$('.modal-body').css('height', 350)
		$('.modal').modal({
			show : true
		});
		$('.openifrmahere').find('iframe').load(function() {
			$('.loading').hide();
		});
	};
}

angular.module('myWebApp', ['ngRoute'])
	.directive('uiLink', uiLink)
	.directive('uiSocialYes', uiSocialYes)
	.directive('uiSocialNo', uiSocialNo)
	.directive('uiProject', uiProject)
	.controller('TabHeaderController', TabHeaderController)
	.controller('DialogController', DialogController)
	.config(router)
	;
