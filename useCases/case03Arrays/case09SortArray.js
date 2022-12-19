fruits = [
    "Apple", "Watermalon", "Orange", 
    "Banana", "Mango", "Grape"
]

console.log("\nSorted array: " + fruits.sort());
console.log("Reversed array: " + fruits.reverse());

// How to numeric array sort:
// OBS.: By default, the sort() function sorts values as strings.
numbersArray = [1, 3, 10, 8, 6, 12];

console.log("Sorted numeric array: " + 
    numbersArray.sort((a, b) => {return a - b})
); // sort the way ascending

console.log("Sorted numeric array (inverse): " + 
    numbersArray.sort((a, b) => {return b - a})
); // sort the way descending

// Link to more methods of sort array: https://www.w3schools.com/js/js_array_sort.asp
