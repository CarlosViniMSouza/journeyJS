// Methods for array iteration

// 1. forEach() -> calls a function once for each array element.

var numsArray = [1, 2, 3, 4, 5];
var txt = "";

function forEachFunction(values) {
    txt += values + " ";
}

numsArray.forEach(forEachFunction);

console.log(txt);

// 2. map() -> create a new array, performing a function on each array element.

var numsArray01 = [1, 2, 3, 4, 5];
var numsArray02 = numsArray01.map(mapFunction);

function mapFunction(values) {
    return values * 2;
}

console.log(numsArray02);

// 3. filter() -> create a new array with array elements that pass a test. 
// (similar to map() method)

var numsArray01 = [10, 20, 30, 40, 50];
var numsArray02 = numsArray01.filter(filterFunction);

function filterFunction(values) {
    return values >= 25;
}

console.log(numsArray02);

// 4. reduce() -> runs a function on each array element to produce a single value.
// (The reduce() method does not reduce the original array.)

var arrayNums = [1, 10, 5, 7, 3, 8];
var numsReduce = arrayNums.reduce(reduceFunction);

function reduceFunction(values, total) {
    return values + total;
}

console.log(numsReduce);

// 4.1. reduceRight() -> works from right-to-left in the array.
// (work to some way that reduce() method)

var arrayNums = [11, 15, 10, 7, 2, 4];
var numsReduceRight = arrayNums.reduce(reduceRightFunction);

function reduceRightFunction(values, total) {
    return values + total;
}

console.log(numsReduceRight);

// 5. every() -> checks if all array values pass a test.
// (similar to filter() method)

var arrayTest = [10, 20, 30, 60, 90];
var arrayTestPassed = arrayTest.every(everyFunction);

function everyFunction(value) {
    return value >= 30;
}

console.log(arrayTestPassed);

// 6. some() -> check if some array values pass a test.

var arrayTest = [10, 20, 30, 60, 90];
var arrayTestPassed = arrayTest.some(someFunction);

function someFunction(value) {
    return value >= 10;
}

console.log(arrayTestPassed);

// 7. indexOf() -> search an array for an element value and returns its position.

var arrayTest = [10, 20, 30, 60, 90];
var arrayTestPassed = arrayTest.indexOf(20) + 1;

console.log("Position: " + arrayTestPassed + "°");

// 8. lastIndexOf() -> returns the position of the last occurrence of the specified element.

const musicsGenre = ["Pop", "Rock", "Samba", "Pagode", "Lo-Fi", "Eletronic", "Jazz"];
var positionMusicGenre = musicsGenre.lastIndexOf("Lo-Fi") + 1;

console.log("Position of Lo-Fi: " + positionMusicGenre + "°");

// 9. find() -> returns the value of the first array element that passes a test function.
// kinda confusing, see example below for simplicity

const numbers = [10, 15, 20, 25, 30];
const findNum = numbers.find(findFunction);

function findFunction(value) {
    return value >= 20;
}

console.log(`First element that passed the test: ${findNum} (${numbers.indexOf(findNum) + 1}° element on array)`);

// Link to more array iteraion methods: https://www.w3schools.com/js/js_array_iteration.asp
