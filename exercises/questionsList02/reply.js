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

console.log(`list current: ${arrayNums}`);

console.log(`The largest number: ${temp}`);

// Question 3

temp = arrayNums[0];

function showSmallNum(value) {
    if (value < temp) {
        temp = value;
    }
};

arrayNums.forEach(showSmallNum);

console.log(`list current: ${arrayNums}`);

console.log(`The smallest number: ${temp}`);

// Question 4
