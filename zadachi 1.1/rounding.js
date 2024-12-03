function solve(numToRound, precision) {
    if (precision > 15) {
        precision = 15;
    }

    const roundedNum = numToRound.toFixed(precision);
    const finalNum = parseFloat(roundedNum);

    console.log(finalNum);
}

solve(10.5,3)