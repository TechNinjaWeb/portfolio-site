var app = angular.module('tnApp'
	, [
		'ui.router'
		, 'ngResource'
		, 'ngTable'
		, 'tnApp.controllers'
		, 'tnApp.services'
		, 'highcharts-ng'
		, 'ngAnimate'
		, 'ParseServices'
		, 'tnApp.webrtc'
	])

app.services = angular.module('tnApp.services', [])

app.controllers = angular.module('tnApp.controllers', ['tnApp.services'])

app.parse = angular.module('ParseServices', [])

app.webrtc = angular.module('tnApp.webrtc', ['tnApp.services'])

app.fbLogin = angular.module('FacebookLogin', [])

app.phonecatFilter = angular.module('phonecatFilters', [])

