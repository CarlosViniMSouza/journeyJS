// The JS 'for in' statement loops through the properties of an Object. Example:

const people = {
    "name": "John",
    "email": "johndoe@gmail.com",
    "age": 22,
    "active": false,
}

for (value in people) {
    console.log(value);
}

console.log("\n");
// Can also loop over the properties of an Array:

const arrayNums = [1, 2, 3, 4];

for (value in arrayNums) {
    console.log(arrayNums[value]);
}
