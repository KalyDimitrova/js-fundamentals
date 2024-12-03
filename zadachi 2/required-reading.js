function solve(totalPages, pagesPerHour, daysLeft){
    let totalTime = totalPages / pagesPerHour;
    let dailyTime = totalTime / daysLeft;

    console.log(dailyTime);
}

solve(212, 20, 2)