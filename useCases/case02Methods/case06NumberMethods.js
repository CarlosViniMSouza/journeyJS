// JS Number Methods

// how to round numbers:
var num = 3.141578;
console.log("\nRounded Number (toFixed): " + num.toFixed(3));

var num = 12.151108;
console.log("Rounded Number (toPrecision): " + num.toPrecision(3));

var numTest01 = "1010";
var numTest02 = "number";

// Work:
console.log("Method work: " + Number(numTest01));

// Dont work:
console.log("Method dont work: " + Number(numTest02));

var dateTest = "2022-12-12";

console.log(
    `Converted date in milliseconds: ${Number(new Date(dateTest))}`
);

console.log(`${Number.isInteger(numTest01)}`);
console.log(`${Number.parseInt(numTest01)}`);

// Link to Number Methods: https://www.w3schools.com/js/js_number_methods.asp
