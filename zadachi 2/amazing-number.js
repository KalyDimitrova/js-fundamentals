function solve(num) {
    let strNum = String(num);
    let sum = 0;

    for (let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i]);        
    }

    let result = String(sum). includes('9');
    console.log (result ? `${num} Amazing? True` : `${num} Amazing? False`);
}

solve(1233);
solve(999)