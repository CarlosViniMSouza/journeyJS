# Notes about *Case 03 Arrays*

## Arrays Methods

### 1. Creating a `new Array` (Examples)

Use `new Array()` or `[]` directly to create a new Array!  

```javascript
const arrayList01 = new Array(
    "Carlos", "Software Developer", 21, true
);

const arrayList02 = [
    "Carlos", "Software Developer", 21, true
]; // More Common!

console.log(`1° array: ${arrayList01}`);
// output: 1° array: Carlos,21,1.78,Software Developer,Brazilian

console.log(`2° array: ${arrayList02}`);
// output: 2° array: Carlos,Software Developer,Brazilian,21,1.78
```

### 2. Insert & Delete elements

The `pop()` method removes the last element from an array

The `push()` method adds a new element to an array (at the end)

```javascript
const arrayList02 = [
    "Carlos", "Software Developer", 21, true
];

arrayList01.pop();

console.log(`array with pop applied: ${arrayList01}`);
// output: array with pop applied: "Carlos","Software Developer",21,

arrayList02.push("Evangelical");

console.log(`array with push applied: ${arrayList02}`);
// output: array with push applied: "Carlos","Software Developer",21,Evangelical
```

### 3. Methods `shift()` and `unshift()`

The `shift()` method removes the first array element and "shifts" all other elements to a lower index.

The `unshift()` method adds a new element to an array (at the beginning), and "unshifts" older elements:

```javascript
// The shift() method removes the first array:
arrayList02.shift();

console.log(`array with shift applied: ${arrayList02}`);
// output: array with shift applied: "Software Developer",21,Evangelical

// The unshift() method adds a new element on initial:
arrayList01.unshift("Manga Reader");

console.log(`array with unshift applied: ${arrayList01}`);
// output: array with unshift applied: "Manga Reader","Software Developer",21,Evangelical
```

### 4. Method `delete`

Array elements can be deleted using the JavaScript operator `delete`.

```javascript
// Using delete() -> be careful! Use instead pop() or shift():
delete arrayList02[arrayList02.length - 1];

console.log(`Used delete() on arrayList02: ${arrayList02}`);
```

### 5. Merging (Concatenating) Arrays

The `concat()` method creates a new array by merging (concatenating) existing arrays:

```javascript
// The concat() method do a new array with 2 arrays:
var newArrayConcat = arrayList01.concat(arrayList02);

console.log(`The array by concat: ${newArrayConcat}`);
```

<br>

## Sorting Array

A example of sorting array

```javascript
fruits = [
    "Apple", "Watermalon", "Orange", 
    "Banana", "Mango", "Grape"
]

console.log(`Sorted array: ${fruits.sort()}`);
console.log(`Reversed array: ${fruits.reverse()}`);

// OBS.: By default, the sort() function sorts values as strings.

// How to numeric array sort:
numbersArray = [1, 3, 10, 8, 6, 12];

console.log(`Sorted numeric array: 
    ${numbersArray.sort((a, b) => {return a - b})}
`); // sort the way ascending

console.log(`Sorted numeric array (inverse):
    ${numbersArray.sort((a, b) => {return b - a})}
`); // sort the way descending
```

<br>

## Array Iteration

Exists several ways to iterate arrays

1. `forEach()` -> calls a function once for each array element.

```javascript
// Methods for array iteration
var numsArray = [1, 2, 3, 4, 5];
var txt = "";

function forEachFunction(values) {
    txt += values + " ";
}

numsArray.forEach(forEachFunction);

console.log(txt);
```

2. `map()` -> create a new array, performing a function on each array element.

```javascript
var numsArray01 = [1, 2, 3, 4, 5];
var numsArray02 = numsArray01.map(mapFunction);

function mapFunction(values) {
    return values * 2;
}

console.log(numsArray02);
```

3. `filter()` -> create a new array with array elements that pass a test (similar to map() method)

```javascript
var numsArray01 = [10, 20, 30, 40, 50];
var numsArray02 = numsArray01.filter(filterFunction);

function filterFunction(values) {
    return values >= 25;
}

console.log(numsArray02);
```

4. `reduce()` -> runs a function on each array element to produce a single value. (The reduce() method does not reduce the original array)

```javascript
var arrayNums = [1, 10, 5, 7, 3, 8];
var numsReduce = arrayNums.reduce(reduceFunction);

function reduceFunction(values, total) {
    return values + total;
}

console.log(numsReduce);
```

4.1. `reduceRight()` -> works from right-to-left in the array. (work to some way that reduce() method)

```javascript
var arrayNums = [11, 15, 10, 7, 2, 4];
var numsReduceRight = arrayNums.reduce(reduceRightFunction);

function reduceRightFunction(values, total) {
    return values + total;
}

console.log(numsReduceRight);
```

5. `every()` -> checks if all array values pass a test. (similar to filter() method)

```javascript
var arrayTest = [10, 20, 30, 60, 90];
var arrayTestPassed = arrayTest.every(everyFunction);

function everyFunction(value) {
    return value >= 30;
}

console.log(arrayTestPassed);
```

6. `some()` -> check if some array values pass a test.

```javascript
var arrayTest = [10, 20, 30, 60, 90];
var arrayTestPassed = arrayTest.some(someFunction);

function someFunction(value) {
    return value >= 10;
}

console.log(arrayTestPassed);
```

<br>

## Sets

A JavaScript *Set* is a collection of unique values

```javascript
let setNumbers = new Set([1, 3, 5, 7]);

// 1. Adding a number:
setNumbers.add(9);

// 2. Using forEach() method:

let setNumbersText = new Set(); // store our numbers converted to strings

setNumbers.forEach((nums) => {
    setNumbersText.add(String(nums));
});

// 3. Using values() method:

setNumbers.values();
```

### Objects Sets

A JavaScript Set is a collection of unique values.

Each value can only occur once in a `Set`.


| Method | Description |
|--------|-------------|
| new Set() | Creates a new Set
| add() | Adds a new element to the Set
| delete() | Removes an element from a Set
| has() | Returns true if a value exists
| clear() | Removes all elements from a Set
| forEach() | Invokes a callback for each element
| values() | Returns an Iterator with all the values in a Set
| keys() | Same as values()
| entries() | Returns an Iterator with the [value,value] pairs from a Set

| Property | Description |
|----------|------------|
| size | Returns the number elements in a Set

```javascript
const mySet = new Set(["string", 12, 15.67, true, ["more a array", null]]);

mySet.forEach(readProps);

function readProps(data) {
    console.log(data);
}

console.log(mySet.values());

console.log(mySet.keys());

/*
    keys()' returns the same as values().

    This makes Sets compatible with Maps.
*/
```

<br>

## Maps

A Map holds `key-value pairs` where the keys can be any datatype.

```javascript
// Example 01:

const newMap01 = new Map([
    ["key1", "value1"], 
    ["key2", "value2"]
]);

// Example 02:

const newMap02 = new Map();

newMap02.set("key1", "value1");
newMap02.set("key2", "value2");

// get() method:

newMap01.get("key1";)
newMap02.get("key2");

// size() method:

let lengthMap01 = newMap01.size;
```

### Links

1. [Arrays Methods](https://www.w3schools.com/js/js_array_methods.asp)

2. [Sorting Arrays](https://www.w3schools.com/js/js_array_sort.asp)

3. [Array Iteration](https://www.w3schools.com/js/js_array_iteration.asp)

4. [Sets JavaScript](https://www.w3schools.com/js/js_sets.asp)

5. [Objects Sets](https://www.w3schools.com/js/js_object_sets.asp)

6. [Maps JavaScript](https://www.w3schools.com/js/js_maps.asp)
