function solve(day, age) {
    if (day === "Weekday") {
        if (age < 0) {
            console.log("Error!");
        } else if (age <= 18) {
            console.log("12$");
        } else if (age <= 64) {
            console.log("18$");
        } else if (age <= 122) {
            console.log("12$");
        } 
    } else if (day === "Weekend") {
        if (age < 0) {
            console.log("Error!");
        } else if (age <= 18) {
            console.log("15$");
        } else if (age <= 64) {
            console.log("20$");
        } else if (age <= 122) {
            console.log("15$");
        }
    } else if (day === "Holiday") {
        if (age < 0) {
            console.log("Error!");
        } else if (age <= 18) {
            console.log("5$");
        } else if (age <= 64) {
            console.log("12$");
        } else if (age <= 122) {
            console.log("10$");
        }
    }
}

solve('Weekday', 42);
solve('Holiday', -12)
solve('Weekend', 150);