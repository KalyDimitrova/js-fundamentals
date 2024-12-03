// 100/100 the easiest problem of them all

function solve(arr) {
	let learningWords = arr[0];
	let testingWords = arr[1].split(" | ");
	let command = arr[2];

	let notebook = {};

	let wordsInfo = learningWords.split(" | ");

	for (let element of wordsInfo) {
		let [word, definition] = element.split(": ");

		if (notebook.hasOwnProperty(word)) {
			notebook[word].push(definition);
		} else {
			notebook[word] = [definition];
		}
	}

	if (command === "Test") {
		for (const key in notebook) {
			if (testingWords.includes(key)) {
				console.log(`${key}:`);
				for (const definition of notebook[key]) {
					console.log(` -${definition}`);
				}
			}
		}
	} else if (command === "Hand Over") {
		let result = "";

		for (const key in notebook) {
			result += key + " ";
		}

		console.log(result);
	}
}

solve(["programmer: an animal, which turns coffee into code | developer: a magician", "fish | domino", "Hand Over"]);
// solve(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin", "care | kitchen | flower", "Test"]);
// solve(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance", "bit | code | tackle", "Test"]);
