'use strict';

var markerModule = (function() {

	// private fields
	var markers = [];
	var ownedMarkers = [];
	var markerTypeResults = [];

	// return object exposed to public
	return {
		addMarker: function(marker) {
			markers.push(marker);
		},

		addOwnedMarker: function(ownedMarker) {
			ownedMarkers.push(ownedMarker);
		},

		getMarkerCount: function() {
			return markers.length;
		},

		getOwnedMarkerCount: function() {
			return ownedMarkers.length;
		},

		getOwnedRatio: function() {
			return getOwnedMarkerCount()/getMarkerCount();
		},

		getMarkerTypeResults: function() {
			return markerTypeResults;
		},

		filterMarkerByCode: function(dataArray, markerCode) {
			dataArray.filter(function(color) {
				return color.code === markerCode;
			});
		},

		filterMarkerByName: function(dataArray, markerName) {
			dataArray.filter(function(color) {
				return color.name === markerName;
			});
		},

		filterMarkerByType: function(dataArray, markerType) {
		  dataArray.filter(function(color) { 
		    for (var i = 0; i < color.types.length; i++) { 
		        markerTypeResults.push(color.types[i] === markerType)
		     } 
		 	});
		}

	};

})();