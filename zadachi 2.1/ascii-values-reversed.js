function solve(char1, char2, char3) {
    console.log(`${char3}${char2}${char1}`);

    let ascii1 = char1.charCodeAt();
    let ascii2 = char2.charCodeAt();
    let ascii3 = char3.charCodeAt();

    console.log(`${ascii3} ${ascii2} ${ascii1}`);
}

solve('a', 'b', 'c')