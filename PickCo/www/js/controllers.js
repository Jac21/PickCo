angular.module('app.controllers', [])
  
.controller('pickCoCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('copicSketchColorChartCtrl', function(ColorSrvCtrl, $http, $scope) {
	// use static json data for quick debugging for now, rather than spinning up server
	// and making queries

 	//this.colors = ColorSrvCtrl.colors;
 	
 $http.get('data/pickCoCopicData.json').success(function(colorData) {
		
		// set da colors in scope from out data array
		$scope.colors = colorData;

		// Approach appropriated from:
		// https://stackoverflow.com/questions/18918458/dynamically-change-a-css-class-properties-with-angularjs
		 $scope.style = function(value) {
          return { "background-color": value };
     }
	});

	// Joanne to place white circle fill around code text on card
	// Joanne to make search bar sticky on screen
	// Joanne to place loading icon/gif while query and loading takes places

	// Jeremy to get user auth and "ownership" flag working, as well as filtering
})
   
.controller('chooseMarkerTypeCtrl', function($scope) {

})
 