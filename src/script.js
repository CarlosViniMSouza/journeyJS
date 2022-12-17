/* For HTML (Events JS on HTML):

// For function clickHere()
function clickHere() {
    document.getElementById("demo").innerHTML = "Text Changed!";
}

// For test delete text
function toggleText() {
    document.write("Text Deleted!");
}

*/

/* Operations Math:

const num01 = 10;
const num02 = 15;

console.log(`Sum: ${num01 + num02}`);
console.log(`Subtration: ${num01 - num02}`);

*/

/* Operations with lists:

const listCars = ["Chevrolet", "Toyota", "Ford", "BMW"];

console.log(`Cars listed: ${listCars}`);

listCars.push("Fiat");

console.log(`New cars listed: ${listCars}`);

listCars[5] = "Jeep";

console.log(`Cars list Updated: ${listCars}`);

*/

const objPeople = {
    name: "Carlos",
    height: 1.78,
    weight: 62,
    stillActive: true,
    createdAt: new Date("2022-12-13"),
    IMC: function IMC() {
        return this.weight / (this.height ** 2);
    }
};

imc = objPeople.IMC();

console.log(objPeople);

console.log(`\nThe IMC Result is = ${imc}`);

// Strings (manipulate texts)

var firstName = "Carlos";
var lastName = "Souza";
var completeName = firstName + " " + lastName;

console.log("\n" + completeName);

// JS String Methods

var textExample = "test example";

console.log("\n" + `Size of text: ${textExample.length}`);

// from 0 to 6 (with space, on case)
console.log(textExample.slice(0, 6));

// from 6 onwards
console.log(textExample.slice(5));

// replace() can be util:
textExample = "\nThis text will be changed!";

console.log(textExample);

// replace() is case-sensitive:

// 1. dont work:
var newText = textExample.replace("Will Be Changed", "was changed!");

// 2. Work:
var newText = textExample.replace("will be changed", "was changed!");

console.log(newText);

// Link to JS String Methods: https://www.w3schools.com/js/js_string_methods.asp

// JS Search Methods

console.log("Position (indexOf): " + newText.indexOf("changed"));

console.log("Position (lastIndexOf): " + newText.lastIndexOf("changed!"));

// -1 = word not found
console.log("Position (final): " + newText.lastIndexOf("kind"));

console.log("\nSearch: " + newText.search("was"));

console.log("Search Result (boolean): " + newText.includes("text"));

// Link to JS Search Methods: https://www.w3schools.com/js/js_string_search.asp

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

var num = Number.EPSILON;

console.log(`\nThe Epsilon: ${num}`);

// OBS.: Number Properties CANNOT BE used on Variables

var numPositInf = Number.POSITIVE_INFINITY;

console.log(`The positive infinity: ${numPositInf}`);

var numNegatInf = Number.NEGATIVE_INFINITY;

console.log(`The negative infinity: ${numNegatInf}`);

// I dont see reasons for use this number properties ... 👀

// Link to Number Properties: https://www.w3schools.com/js/js_number_properties.asp

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
