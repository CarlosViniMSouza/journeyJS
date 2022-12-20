// Question 10

var num = 10;

console.log(`Successor is ${num + 1}`);

// Question 11

console.log(`\nSquared = ${num ** 2}`);
console.log(`Cubic = ${num ** 3}`);

// Question 12

num = 12.55;

console.log(`\nInteger part: ${Number.parseInt(num)}`);
console.log(`Fractional part: ${num - Math.round(Number.parseInt(num))}`);
console.log(`Rounded number: ${Math.round(num)}`);

// Question 13

num = "19.59";

function convertNumberInHour() {
    // desconstruct the string
    var hours = num.substring(0, 2);
    var minutes = num.substring(3, 5);

    // reconvert for integer
    hours = Number.parseInt(hours);
    minutes = Number.parseInt(minutes);

    console.log(`\nhours: ${hours} | minutes: ${minutes}`);
    console.log(`Time: ${hours * 60 + minutes} minutes`);
}

convertNumberInHour();

// Question 14

const txt = "javascript";

const initialPositions = 0; // first 'a'
const finalPositions = 4; // 's' to stop at the second 'a'

console.log(`\nResult split: ${txt.slice(initialPositions, finalPositions)}`);

// Question 15

const energyCost = 0.35;
const amountEnergyConsumed = 970;

const result = energyCost * amountEnergyConsumed;

console.log(`\nTotal Value: R$ ${Math.round(result)}`);
console.log(`Total Value (discounted 15%): R$ ${Math.round(result - (result * 0.15))}`);
