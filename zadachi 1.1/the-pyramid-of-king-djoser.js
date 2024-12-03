
// array-> base width and lenght, height of each step
// base - 2 is the next row (11, 9, 7, 5...)
// bulk is stone, outer layer is marble
// every 5th step is lapis lazuli instead of marble
// final step is gold

function solve(base, increment) {
    let currentRow = 1;

    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    let height = 0;

    for (let i = base; i > 0; i -= 2) {
        height += increment;
        let totalArea = i ** 2;

        if (i <= 2) {
            gold = totalArea * increment;
        } else {
            let stoneArea = (i - 2) ** 2;
            stone += stoneArea * increment;

            if (currentRow % 5 === 0) {
                let lapisLazuliArea = totalArea - stoneArea;
                lapisLazuli += lapisLazuliArea * increment;
            } else {
                let marbleArea = totalArea - stoneArea;
                marble += marbleArea * increment;
            }

        }

        currentRow++;
    }

    console.log('Stone required: ' + Math.ceil(stone));
    console.log('Marble required: ' + Math.ceil(marble));
    console.log('Lapis Lazuli required: ' + Math.ceil(lapisLazuli));
    console.log('Gold required: ' + Math.ceil(gold));
    console.log('Final pyramid height: ' + Math.floor(height));

}

solve(12,1)