function solve(startingYeild){
    let totalSpice = 0;
    let days = 0;

    for (let spice = startingYeild; spice >= 100; spice -= 10){
        totalSpice += spice;
        totalSpice -= 26;
        days++;
    }

    if (startingYeild >= 100){
        totalSpice -= 26;
    }
    console.log(days);
    console.log(totalSpice);
}

solve(5)