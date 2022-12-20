// Question 1

var num01 = 10;
var num02 = 4;
var num03 = 8;

var arrayNums = [num01, num02, num03];

console.log(
    `Sort in crescent order: ${arrayNums.sort((a, b) => {return a - b})}`
);

// Question 2

// 1. Add +2 numbers on array
var num04 = 12;
var num05 = 6;

arrayNums.push(num04, num05);

// 2. for simplify our work
var temp = 0;

function showBigNum(value) {
    if (value > temp) {
        temp = value;
    }
};

arrayNums.forEach(showBigNum);

console.log(`\nlist current: ${arrayNums}`);

console.log(`The largest number: ${temp}`);

// Question 3

temp = arrayNums[0];

function showSmallNum(value) {
    if (value < temp) {
        temp = value;
    }
};

arrayNums.forEach(showSmallNum);

console.log(`\nlist current: ${arrayNums}`);

console.log(`The smallest number: ${temp}`);

// Question 4

// i'll use the array with 5 elements for resolve this question

// 1. lets sort the array
arrayNums.sort((a, b) => {a - b});

// 2. show the middle element
console.log(`\nThe middle element: ${arrayNums[2]}`);

// Question 5

var num = 0;

if (num % 2 != 0) {
    console.log("\nThis number is odd");
} else {
    console.log("\nThis number is even");
}

// Question 6

// 1. delete 2 elements
delete arrayNums[0], arrayNums[1];

// 2. Pythagorean theorem: a^2 + b^2 = c^2

var sumSidePeccaries = (arrayNums[0] ** 2) + (arrayNums[1] ** 2);
var squareSideHipotenuse = (arrayNums[2] ** 2);

console.log(`\nThe triangle is adequate: ${(sumSidePeccaries === squareSideHipotenuse)}`);

// Question 7

var ageElector = 69;

if (ageElector >= 16 && ageElector < 18 || ageElector > 65) {
    console.log("\nEleitor Facultativo");
} else if (ageElector >= 18 && ageElector <= 65) {
    console.log("\nEleitor Obrigatorio");
} else {
    console.log("\nNão pode votar ainda!");
}

// Question 12

num = 11;

if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0) {
    console.log("\nNot Prime!");
} else {
    console.log("\nPrime!");
}

// Question 13

num01 = 17;
num02 = 19;

if (num01 % 2 != 0 || num01 % 3 != 0 || num02 % 5 != 0) {
    if (num02 % 2 != 0 || num02 % 3 != 0 || num02 % 5 != 0) {
        if (num02 - num01 === 2) {
            console.log("\nTwin Prime!");
        }
    } else { console.log("\nNot Twin Prime!"); }
} else {
    console.log("\nPrime!");
}

// I'll stop here. The degree of mathematical difficulty has gone up a lot