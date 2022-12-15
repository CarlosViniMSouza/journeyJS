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
