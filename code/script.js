/* For HTML:

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
    "name": "Carlos",
    "height": 1.78,
    "weight": 62,
    "stillActive": true,
    "createdAt": new Date("2022-12-13"),
    "IMC": function IMC() {
        return this.weight / (this.height ** 2);
    }
};

imc = objPeople.IMC();

console.log(imc);