// 100/100 took me a bit to make the pattern

function solve(text) {
	let pattern = /[@#]+([a-z]{3,})[@#]+[^\w]*\/+([0-9]+)\/+/g;
	//            /[@#]+([a-z]{3,})[@#]+[^A-Za-z0-9]*\/+([0-9]+)\/+/g
	// in () because this way it is a group!!
	// works with both [^A-Za-z0-9] and [^\w]

	let match;
	while ((match = pattern.exec(text)) !== null) {
		let color = match[1];
		let amount = match[2];

		console.log(`You found ${amount} ${color} eggs!`);
	}
}

solve(["@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/"]);
