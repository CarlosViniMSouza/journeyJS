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
