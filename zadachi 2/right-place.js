function solve(string, char, str2) {
    let str = string.replace('_', char);
    let outcome = str === str2 ? 'Matched' : 'Not Matched';

    console.log(outcome);
}

solve('Str_ng', 'I', 'StrIng')