function solve(arr) {
	const singleUserIncome = Number(arr[0]);
	const usersCount = Number(arr[1]);

	let totalMoney = 0;
	let currentUser = 1;

	for (let i = 2; i < arr.length; i++) {
		let searchesOfOneUser = Number(arr[i]);
		let moneyFromOneUser = searchesOfOneUser * singleUserIncome;

		if (searchesOfOneUser > 5) {
			moneyFromOneUser *= 2;
		} else if (searchesOfOneUser === 1) {
			currentUser++;
			continue; //moneyFromOneUser = 0;
		}

		if (currentUser % 3 === 0) {
			moneyFromOneUser *= 3;
		}

		totalMoney += moneyFromOneUser;
		currentUser++;
	}

	console.log(`Total money earned: ${totalMoney.toFixed(2)}`);
}

solve(["5.5", "3", "1", "10", "5"]);
