function lowestNumber(number1, number2, number3) {
    let lowestNumber = 0;
    if (number1 < number2) {
        if (number1 < number3) {
            lowestNumber = number1;
        }
        else {
            lowestNumber = number3;
        }
    }
    else {
        if (number2 < number3) {
            lowestNumber = number2;
        }
        else {
            lowestNumber = number3
        }
    }
    return lowestNumber;
}

let number1 = 12;
let number2 = 10;
let number3 = 32;

let result = lowestNumber(number1, number2, number3);
console.log(result);