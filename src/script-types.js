// You can use the operator to find the data type of a JavaScript variable.

console.log(typeof "Hello!");

console.log(typeof 2023);
console.log(typeof 15.67);

console.log(typeof [1, "Array: ", true]);

const dayToday = new Date();
console.log(typeof dayToday);

const myFunction = () => { 
    console.log("\nMy Function is an Function!!\n");
}

myFunction();

console.log(typeof myFunction);

// 'typeof' return "object" for arrays because in JS, arrays are objects.

// The 'constructor property' returns the constructor function for all JavaScript variables.

console.log("\nThe New Method for determining the type of a variable: \n");

console.log("Hello!".constructor);

console.log((2023).constructor);
console.log((15.67).constructor);

console.log([1, "Array: ", true].constructor);

// for more infos, access: https://www.w3schools.com/js/js_typeof.asp

/* JS variables can be converted to a new variable and another data type: */

// 1. Convert String to Number:

const numberTxt = "10025";

console.log("\n" + typeof Number(numberTxt));

// 2. Convert Numbers to Strings:

const textNum = "12345";

console.log(typeof textNum.toString());

// 3. Converting Dates to Numbers: 👀 ~ !!

const newDate = new Date("2023-12-01");

console.log(typeof Number(newDate));

console.log(`\nConverted to number: ${Number(newDate)}`);

// 4. Convert Dates to Strings:

console.log(`Converted to string: ${String(newDate)}`); // toString() works too!

// for more infos, access: https://www.w3schools.com/js/js_type_conversion.asp
