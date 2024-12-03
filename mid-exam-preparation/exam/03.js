function solve(arr) {
	let list = arr[0].split("|");

	for (let i = 1; i < arr.length; i++) {
		let tokens = arr[i].split("%");
		let command = tokens[0];

		if (command === "Important") {
			const product = tokens[1];

			if (list.includes(product)) {
				const index = list.indexOf(product);
				let element = list.splice(index, 1)[0];
				list.unshift(element);
			} else {
				list.unshift(product);
			}
		} else if (command === "Add") {
			const product = tokens[1];

			if (!list.includes(product)) {
				list.push(product);
			} else {
				console.log("The product is already in the list.");
			}
		} else if (command === "Swap") {
			const product1 = tokens[1];
			const product2 = tokens[2];

			if (list.includes(product1) && list.includes(product2)) {
				const index1 = list.indexOf(product1);
				const index2 = list.indexOf(product2);

				let temp = list[index1];
				list[index1] = list[index2];
				list[index2] = temp;
			} else if (!list.includes(product1)) {
				console.log(`Product ${product1} missing!`);
			} else {
				console.log(`Product ${product2} missing!`);
			}
		} else if (command === "Remove") {
			const product = tokens[1];

			if (list.includes(product)) {
				let index = list.indexOf(product);

				list.splice(index, 1);
			} else {
				console.log(`Product ${product} isn't in the list.`);
			}
		} else if (command === "Reversed") {
			list.reverse();
		} else if (command === "Shop!") break;
	}

	console.log(list.map((item, index) => `${index + 1}. ${item}`).join("\n"));
}

solve(["apple|cheese|salt|bananas", "Remove%cheese", "Swap%salt%bananas", "Shop!"]);
