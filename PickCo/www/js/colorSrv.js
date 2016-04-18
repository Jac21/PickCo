(function() {
	'use strict';
	angular.module('app').service('ColorSrvCtrl',
	[ 'colorSrvApiCtrl',ColorSrvCtrl ])
	function ColorSrvCtrl(colorSrvApiCtrl){
		var vm =this;
		vm.colors =colorSrvApiCtrl.query();
		
	}
})();