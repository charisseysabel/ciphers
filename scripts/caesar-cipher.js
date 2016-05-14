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

$(document).ready(function() {

	var key;
	do {
		key = prompt("Give me a number: ");
	}
	while(isNaN(parseInt(key)));

	var num = parseInt(key);
	var message = prompt("Type your message: ");

	var encrypt = encryptMsg(num, message);

	console.log(encrypt);

});