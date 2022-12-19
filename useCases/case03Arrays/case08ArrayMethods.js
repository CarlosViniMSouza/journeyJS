const arrayList01 = new Array(
    "Carlos", "21", "1.78", "Software Developer", "Brazilian"
);

const arrayList02 = [
    "Carlos", "Software Developer", "Brazilian", "21", "1.78"
]; // more common!

// testing auto-save

console.log("\n1° array: " + arrayList01);
console.log("2° array: " + arrayList02);

console.log(`\nSorted list02: ${arrayList02.sort()}`);
console.log(`The size of list01 is ${arrayList01.length}`);
console.log(`Array is: ${typeof(arrayList01)}`);

// OBS.: Arrays are a special kind of objects, with numbered indexes.

// 2 important methods: pop() and push():

// The pop() method removes the last element:
arrayList01.pop();
console.log("\n1° array with pop applied: " + arrayList01);

// The push() method insert a new element at the end:
arrayList02.push("Evangelical");
console.log("2° array with push applied: " + arrayList02);

// The shift() method removes the first array:
arrayList02.shift();
console.log("\n2° array with shift applied: " + arrayList02);

// The unshift() method adds a new element on initial:
arrayList01.unshift("Manga Reader");
console.log("1° array with unshift applied: " + arrayList01);

// Using delete() -> be careful! Use instead pop() or shift():
delete arrayList02[arrayList02.length - 1];
console.log("Used delete() on arrayList02: " + arrayList02);

// The concat() method do a new array with 2 arrays:

var newArrayConcat = arrayList01.concat(arrayList02);
console.log("\nThe array by concat: " + newArrayConcat);

// Link to arrays methods: https://www.w3schools.com/js/js_array_methods.asp
