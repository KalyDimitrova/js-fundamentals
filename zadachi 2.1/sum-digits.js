function solve(number){
    let strNum = number.toString();

    let sum = 0;

    for (let i = 0; i < strNum.length; i++){
        let currentDigit = +strNum[i];
        sum += currentDigit;
    }

    console.log(sum);
}

solve(245678)