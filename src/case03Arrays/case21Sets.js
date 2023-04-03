// A JS Set is a collection of unique values

let setNumbers = new Set([1, 3, 5, 7]);

// 1. Adding a number:
setNumbers.add(9);

console.log(setNumbers);

// 2. Using forEach() method:

let setNumbersText = new Set(); // store our numbers converted to strings

setNumbers.forEach((nums) => {
    setNumbersText.add(String(nums));
});

console.log(setNumbersText);

// 3. Using values() method:

console.log(setNumbers.values());

// For more informations, visit: https://www.w3schools.com/js/js_sets.asp
