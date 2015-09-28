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
			iconAlt : "@iconAlt",
			html : "@html"

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
						'{{html}}',
					'</div>', 
				'</div>', 
			'</div>' ].join()
	};
}

angular.module('myWebApp', [])
	.directive('uiLink', uiLink)
	.directive('uiSocialYes', uiSocialYes)
	;
