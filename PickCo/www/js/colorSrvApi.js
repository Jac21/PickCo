(function() {
	'use strict';
	angular.module('app').service('colorSrvApiCtrl', ['$resource', colorSrvApiCtrl])
	function colorSrvApiCtrl($resource){
		var domain = "159.203.93.46:3000";
		return $resource('https://' + domain + '/api/colors/:id',
			{ id: '@_id' }, {
				update: {
				method: 'PUT' // this method issues a PUT request
			}
		});
	}
})();