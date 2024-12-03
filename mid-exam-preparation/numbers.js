function solve(arr) {
	let numbers = arr[0].split(" ").map((x) => Number(x));

	for (let i = 1; i < arr.length; i++) {
		let tokens = arr[i].split(" ");
		let command = tokens[0];

		if (command === "Finish") {
			break;
		} else if (command === "Add") {
			let numToAdd = Number(tokens[1]);

			numbers.push(numToAdd);
		} else if (command === "Remove") {
			let numToRemove = Number(tokens[1]);
			let index = numbers.indexOf(numToRemove);

			numbers.splice(index, 1);
		} else if (command === "Replace") {
			let numToChange = Number(tokens[1]);
			let index = numbers.indexOf(numToChange);
			let replacement = Number(tokens[2]);

			numbers[index] = replacement;
		} else if (command === "Collapse") {
			let num = Number(tokens[1]);

			numbers = numbers.filter((x) => x >= num);
		}
	}

	console.log(numbers.join(" "));
}

solve(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
