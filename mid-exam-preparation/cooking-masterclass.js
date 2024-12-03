function solve(arr) {
	const budget = Number(arr[0]);
	const studentsCount = Number(arr[1]);
	const packageFlourPrice = Number(arr[2]);
	const oneEggPrice = Number(arr[3]);
	const singleApronPrice = Number(arr[4]);

	let apronsNeeded = singleApronPrice * Math.ceil(studentsCount * 1.2);

	let totalPrice = apronsNeeded;

	for (let i = 1; i <= studentsCount; i++) {
		let oneStudentPackagePrice = 0;

		if (i % 5 === 0) {
			oneStudentPackagePrice = 10 * oneEggPrice;
		} else {
			oneStudentPackagePrice = 10 * oneEggPrice + packageFlourPrice;
		}

		totalPrice += oneStudentPackagePrice;
	}

	if (totalPrice <= budget) {
		console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
	} else {
		console.log(`${(totalPrice - budget).toFixed(2)}$ more needed.`);
	}
}

// solve(["50", "2", "1.0", "0.10", "10.0"]);
solve(["100", "25", "4.0", "1.0", "6.0"]);
