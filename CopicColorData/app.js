$(document).ready(function() {
	// grab github gist with base data
	$.getJSON("https://gist.githubusercontent.com/smykes/b96747d2ee08292a6603/raw/24cb34d3fb790ffc7a0ef95d6cd1b18c8c0ff606/colors.json",
						function(data) {
							// for each color in the data
							data.forEach(function(color) {

								// make code variable and base arrays
								var code = color.code;
								var codeArray = code.split('');

								var familyName = [];
								var codeNumbers = [];

								// iterate through code characters
								codeArray.forEach(function(character) {
									if (character.match(/[a-z]/i)) {
										familyName.push(character);
									} else {
										codeNumbers.push(character);
									}
								});

								// append family key if existing
								if (familyName.length > 0) {
									color.family = familyName.join('');
								}

								// append saturation and brightness keys based on length
								if (codeNumbers.length > 0) {
									if (codeNumbers.length === 4) {
										color.saturation = "00"
										color.brightness = "00"
									} else if (codeNumbers.length === 2) {
										color.saturation = codeNumbers[0];
										color.brightness = codeNumbers[1];
									} else if (codeNumbers.length === 1) {
										color.saturation = codeNumbers[0];
									}
								}

								// as is owned key
								color.isOwned = "false";
							});
	
							// output to screen
							document.getElementById("colorJson").value = JSON.stringify(data, null, 2);
						});
})