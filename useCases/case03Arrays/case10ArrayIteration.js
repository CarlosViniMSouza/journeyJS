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
