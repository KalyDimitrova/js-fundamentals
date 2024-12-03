// 100/100 with a lil help from claude with identifying the errors

function solve(arr) {
	let message = arr.shift();

	for (const input of arr) {
		let tokens = input.split(" ");
		let command = tokens[0];

		if (command === "Finalize") {
			break;
		} else if (command === "Encrypt") {
			message = message.split("").reverse().join("");
			console.log(message);
		} else if (command === "Decrypt") {
			message = message.split("");

			// create a result variable
			let decrypted = "";
			for (let letter of message) {
				if (letter === letter.toLowerCase()) {
					decrypted += letter.toUpperCase();
				} else {
					decrypted += letter.toLowerCase();
				}
			}
			message = decrypted;
			console.log(message);
		} else if (command === "Substitute") {
			let oldChar = tokens[1];
			let newChar = tokens[2];
			let messageArr = message.split("");

			if (messageArr.includes(oldChar)) {
				// use while loop instead of for...in
				while (messageArr.includes(oldChar)) {
					let index = messageArr.indexOf(oldChar);
					messageArr.splice(index, 1, newChar);
				}
				message = messageArr.join("");
				console.log(message);
			} else {
				console.log("Character not found.");
			}
		} else if (command === "Scramble") {
			let index = Number(tokens[1]);
			let char = tokens[2];

			let messageArr = message.split("");

			if (index >= 0 && index < message.length) {
				messageArr.splice(index, 1, char);
				message = messageArr.join("");
				console.log(message);
			} else {
				console.log("Index out of bounds.");
			}
		} else if (command === "Remove") {
			let subStr = tokens[1];

			while (message.includes(subStr)) {
				let temp = message;
				let index = temp.indexOf(subStr);

				let tempArr = temp.split("");
				tempArr.splice(index, subStr.length);

				message = tempArr.join("");
			}
			console.log(message);
		} else {
			console.log("Invalid command detected!");
		}
	}
}

solve(["GalacticMission", "Decrypt", "Scramble 5 Z", "Remove S", "Substitute G X", "Encrypt", "Finalize"]);

// gALACTICmISSION
// gALACZICmISSION
// gALACZICmIION
// Character not found.
// NOIImCIZCALAg
