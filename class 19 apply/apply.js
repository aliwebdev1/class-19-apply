/* function culculatio(num1, num2, num3) {
    var multiply = num1 * num2;
    var add = multiply + num3;
    return add;

}

var result = culculatio(12, 10, 30);
console.log(result); */

// var calculator = 

/* let calculator = 52;
calculator = 155;
console.log(calculator);
const calculator1 = 55;
calculator1 = 60;
console.log(calculator1)
 */

var inches = 144;
var feet = inches / 12;

var mamaInches = 198;
var feet = mamaInches / 12;

var maInches = 206;
var feet = maInches / 12;
/* 
function feetToInches(inches) {
    var result = inches / 12;
    return result;

}

var inches = 206;
var feet = feetToInches(inches);
var numControl = parseInt(feet) //parseFloat(feet.toFixed(0))
console.log('feet:', numControl); */


/* function mileToKilometers(miles) {
    var kilometers = miles * 1.609344;
    return kilometers;
}
var grandfatherDistence = 5;
var output = mileToKilometers(grandfatherDistence);
console.log(output) */




// 5%2= 0;
// 8%2=0

// const number = 2;
// const result = number % 2;
// console.log(result == 0)

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 145;
// const isMyNumberEven = isEven(myNumber);
// console.log('my number is even: ', isMyNumberEven)

// const unarNumber = 1452;
// const isUnarNumberEven = isEven(unarNumber);
// console.log(isUnarNumberEven)

/* function oddNmber(y) {
    if (y % 2 != 0) {  //y % 2 == 1
        return true;
    }
    return false;

}

const isMyNumberOdd = oddNmber(7845);
console.log(isMyNumberOdd) */

/* function isLeepYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const presentYear = 2100;
const leepYear = isLeepYear(presentYear);
console.log(leepYear) */


/* 
3! = 3 X 2 x 1
4! = 4 x 3 X 2 x 1
5! = 5 x 4 x 3 X 2 x 1
6! = 6 x 5 x 4 x 3 X 2 x 1
7! = 7 x 6 x 5 x 4 x 3 X 2 x 1
*/
/* let factorial = 1;
for (let i = 1; i <= 8; i++) {
    factorial = factorial * i;
    console.log(factorial);
}
 */

/* function factorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}
const uncle = 20;
const result = factorial(uncle);
console.log(result); */

/* function factorial(number) {
    let fact = 1;
    let i = 1;
    while (i <= number) {
        fact = fact * i;
        i++;
    }
    return fact;
}

const myFactorial = factorial(9);
console.log(myFactorial) */

/* 
function getFactorial(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial = factorial * i;
        i--;

    }
    return factorial;
}

const irfanFactorial = getFactorial(0);
console.log(irfanFactorial) */
