function solve(people, group, day){
    let pricePerPerson = 0;
    let totalPrice = 0;

    if (group === 'Students'){
        if (day === 'Friday') {
            pricePerPerson = 8.45;
        } else if (day === 'Saturday'){
            pricePerPerson = 9.8;
        } else if (day === 'Sunday'){
            pricePerPerson = 10.46;
        }

        totalPrice = pricePerPerson * people

        if (people >= 30){
            totalPrice *= 0.85;
        }

    } else if (group === 'Business'){
        if (day === 'Friday') {
            pricePerPerson = 10.9;
        } else if (day === 'Saturday'){
            pricePerPerson = 15.6;
        } else if (day === 'Sunday'){
            pricePerPerson = 16;
        }

        if (people >= 100) {
            people -= 10;
        }

        totalPrice = pricePerPerson * people;

    } else if (group === 'Regular') {
        if (day === 'Friday') {
            pricePerPerson = 15;
        } else if (day === 'Saturday'){
            pricePerPerson = 20;
        } else if (day === 'Sunday'){
            pricePerPerson = 22.5;
        }

        totalPrice = pricePerPerson * people

        if (people >= 10 && people <= 20){
            totalPrice *= 0.95;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

solve(15,
    "Regular",
    "Saturday"
    )