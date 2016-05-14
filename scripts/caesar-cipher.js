/*
 *	caesar-cipher.js
 *	js code for generating caesar cipher text	
 *
 */
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
				"j", "k", "l", "m", "n", "o", "p", "q", "r",
				"s", "t", "u", "v", "w", "x", "y", "z"];

	function encryptMsg(key, msgStr) {
		var msg = msgStr.toLowerCase().split("");
		var result = "";
		var findPosition;
		for(var i = 0; i < msg.length; i++) {
			if(msg[i] === " " || alphabet.indexOf(msg[i]) === -1 ) {
				result += msg[i];
				continue;
			}	
			
			findPosition = alphabet.indexOf(msg[i]) + key;

			if(findPosition > 26) {
				findPosition = findPosition - 26;
				result = result + alphabet[findPosition];
			}
			else {
				result = result + alphabet[findPosition];	
			}
		}
		return result;
	}

	function breakCaesar(string) {
		var result;
		var position;
		// identify index
		for(var i = 0; i <= 25; i++) {
			// loop through entire string 
			result = "";
			position = "";
			for(var j = 0; j < string.length; j++) {
				if(string[j] === " " || alphabet.indexOf(string[j]) < 0 ) {
					result += string[j];
					continue;
				}

				position = alphabet.indexOf(string[j]) - i;

				if(position < 0) {
					position = position + alphabet.length;
					result += alphabet[position];
				}
				else {
					result += alphabet[position];
				}
			}
			console.log("\n\n" + i + ":" + result);
		}
	}

$(document).ready(function() {

	var key;
	do {
		key = prompt("Give me a number between 0 and 25: ");
	}
	while(isNaN(parseInt(key)) || key > 25 || key < 0);

	var num = parseInt(key);
	var message = prompt("Type your message: ");

	var encrypt = encryptMsg(num, message);
	console.log(encrypt);
	var decrypt = breakCaesar(encrypt);


});