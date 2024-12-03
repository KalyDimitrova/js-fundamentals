// Every second lost game, his helmet is broken.
// Every third lost game, his sword is broken.
// When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// Every second time, when his shield brakes, his armor also needs to be repaired. 

function solve(totalLostFights, helmetPrice, swordPrice, sheildPrice, armorPrice){
    let totalMoney = 0;
    let sheildBroke = 0;

    for (let currentFight = 1; currentFight <= totalLostFights; currentFight++){

        if (currentFight % 2 === 0){
            totalMoney += helmetPrice;
        }

        if (currentFight % 3 === 0){
            totalMoney += swordPrice;
        }

        if (currentFight % 6 === 0){
            totalMoney += sheildPrice;
            sheildBroke++;

            if (sheildBroke % 2 === 0){
                totalMoney += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${totalMoney.toFixed(2)} aureus`)
}

solve(23,
    12.50,
    21.50,
    40,
    200)