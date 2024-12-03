function solve(n) {
    
    for (let let1 = 0; let1 < n; let1++) {
        let letter1 = String.fromCharCode(97 + let1);

        for (let let2 = 0; let2 < n; let2++) {
            let letter2 = String.fromCharCode(97 + let2);

            for (let let3 = 0; let3 < n; let3++) {
                let letter3 = String.fromCharCode(97 + let3);

                console.log(letter1 + letter2 + letter3);

            }
        }
    }
}

solve('3')