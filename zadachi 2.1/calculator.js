function solve(num1, operator, num2){
    let result = 0;

    if (operator === '+'){
        result = num1 + num2;
    } else if (operator === '-'){
        result = num1 - num2;
    } else if (operator === '/'){
        result = num1 / num2;
    } else {
        result = num1 * num2;
    }

    console.log(result.toFixed(2));
}

solve(5, '+', 10)