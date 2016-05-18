/*
 *	transposition-cipher.js
 *	
 */

function matrix(key, text) {
	var array = [];
	var string = "";
	var letters = text.split("");

	while(letters.length !== 0) {
		var tempArray = [];
		for(var j = 0; j < key; j++) {
			var temp = letters.shift();
			if(temp === undefined) {
				continue;
			}
			else {
			tempArray.push(temp);	
			}
		}
		array.push(tempArray);
	}
	
	// loop through array of arrays to generate ciphertext
	for(var i = 0; i < key; i++) {
		for(var a = 0; a < array.length; a++) {
			if(array[a][i] === undefined) {
				break;
			}
			else {
				string += array[a][i];
			}
		}
	
	}
	console.log("message: " + text + "\n" + "ciphertext: " + string);

}


$(document).ready(function() {
	// ask for a key
	var key;
	do {
		key = prompt("Give me a number: ");
	}
	while(isNaN(parseInt(key)));
	var num = parseInt(key);

	// ask for a text
	var message = prompt("Type your message: ");

	// call function
	var call = matrix(key, message);
	
}); 

