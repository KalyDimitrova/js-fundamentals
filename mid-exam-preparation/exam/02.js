function solve(arr) {
	const targets = arr[0].split("|").map((x) => Number(x));
	let points = 0;

	function shootLeft(startIndex, length) {
		if (startIndex < 0 || startIndex >= targets.length) return;

		let currentIndex = startIndex;
		let remainingLength = length;

		while (remainingLength > 0) {
			currentIndex--;
			if (currentIndex < 0) currentIndex = targets.length - 1;
			remainingLength--;
		}

		if (targets[currentIndex] >= 5) {
			points += 5;
			targets[currentIndex] -= 5;
		} else if (targets[currentIndex] > 0) {
			points += targets[currentIndex];
			targets[currentIndex] = 0;
		}
	}

	function shootRight(startIndex, length) {
		if (startIndex < 0 || startIndex >= targets.length) return;

		let currentIndex = startIndex;
		let remainingLength = length;

		while (remainingLength > 0) {
			currentIndex++;
			if (currentIndex >= targets.length) currentIndex = 0;
			remainingLength--;
		}

		if (targets[currentIndex] >= 5) {
			points += 5;
			targets[currentIndex] -= 5;
		} else if (targets[currentIndex] > 0) {
			points += targets[currentIndex];
			targets[currentIndex] = 0;
		}
	}

	for (let i = 1; i < arr.length; i++) {
		let tokens = arr[i].split("@");
		let command = tokens[0];

		if (command === "Shoot Left") {
			const startIndex = Number(tokens[1]);
			const length = Number(tokens[2]);

			shootLeft(Number(startIndex), Number(length));
		} else if (command === "Shoot Right") {
			const startIndex = Number(tokens[1]);
			const length = Number(tokens[2]);

			shootRight(Number(startIndex), Number(length));
		} else if (command === "Reverse") {
			targets.reverse();
			continue;
		} else if (command === "Game over") break;
	}

	console.log(targets.join(" - "));
	console.log(`John finished the archery tournament with ${points} points!`);
}

solve(["10|10|10|10|10", "Shoot Left@0@2", "Shoot Right@4@5", "Shoot Right@6@5", "Reverse", "Game over"]);
