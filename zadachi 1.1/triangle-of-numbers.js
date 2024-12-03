// function solve(num) {
//     for (let i = 1; i <= num; i++){
//         console.log((String(i) + ' ').repeat(i));
//     }
// }

// solve(5)


function triangle(num) {
    for (let i = 1; i <= num; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += i + ' ';
        }

        console.log(str);
    }

}

triangle(5)