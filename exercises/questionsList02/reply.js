// Question 1

const num01 = 10;
const num02 = 4;
const num03 = 8;

var arrayNums = [num01, num02, num03];

console.log(
    `Sort in crescent order: ${arrayNums.sort((a, b) => {return a - b})}`
);

// Question 2

// 1. Add +2 numbers on array
const num04 = 12;
const num05 = 6;

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

const num = 0;

if (num % 2 != 0) {
    console.log("\nThis number is odd");
} else {
    console.log("This number is even");
}

// Question 6

// 1. delete 2 elements
delete arrayNums[0], arrayNums[1];

// 2. Pythagorean theorem: a^2 + b^2 = c^2

const sumSidePeccaries = (arrayNums[0] ** 2) + (arrayNums[1] ** 2);
const squareSideHipotenuse = (arrayNums[2] ** 2);

console.log(`\nThe triangle is adequate: ${(sumSidePeccaries === squareSideHipotenuse)}`);

// Question 7

const ageElector = 69;

if (ageElector >= 16 && ageElector < 18 || ageElector > 65) {
    console.log("\nEleitor Facultativo");
} else if (ageElector >= 18 && ageElector <= 65) {
    console.log("\nEleitor Obrigatorio");
} else {
    console.log("\nNão pode votar ainda!");
}
