function solve(count) {
    let sum = 0;
    let num = 1;

    while (count >= 1) {
        console.log(num);
        sum += num;
        num += 2;
        count--;
    }

    console.log("Sum: " + sum)
}

solve(5)