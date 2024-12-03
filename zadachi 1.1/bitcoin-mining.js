function solve(array) {
    const BITCOIN_PRICE = 11949.16;
    const GRAM_OF_GOLD_PRICE = 67.51;

    let money = 0;
    let day = 1;
    let bitcoinBought = 0;
    let dayOfFirstBitcoin = 0;    

    for (let goldPerDay of array) {
        if (day % 3 === 0) {
            goldPerDay *= 0.7;
        }

        let moneyPerDay = goldPerDay * GRAM_OF_GOLD_PRICE;
        money += moneyPerDay;

        while (money >= BITCOIN_PRICE) {
            if (bitcoinBought === 0) {
                dayOfFirstBitcoin = day;
            }
            bitcoinBought++;
            money -= BITCOIN_PRICE;
        }


        day++;
    }

    console.log('Bought bitcoins: ' + bitcoinBought);

    if (bitcoinBought > 0) {
        console.log('Day of the first purchased bitcoin: ' + dayOfFirstBitcoin);
    }
    
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}

solve([100, 200, 300])