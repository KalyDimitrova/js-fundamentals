function solve (num1, num2, num3) {
    let sum = num1 + num2 + num3;

    let type = sum % 1 === 0 ? 'Integer' : 'Float';

    console.log(`${sum} - ${type}`);
}

solve(1, 2, 3)