function solve(array) {
    const username = array[0];
    const password = username.split('').reverse().join('');
    let tryCount = 1;
    

    for (let i = 1; i <= (array.length - 1); i++) {
        let tryPass = array[i];

        if (tryPass === password){
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (tryCount >= 4) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log("Incorrect password. Try again.");
            tryCount++;
        }
    }

}

solve(['momo', 'omom']);