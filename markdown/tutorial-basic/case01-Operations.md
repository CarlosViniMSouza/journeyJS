# Notes about *Case 01 Operations*

## Part 01 - Operations Maths

The example below shows how to simple math operations! 

```javascript
const num01 = 10, num02 = 15;

console.log(`Sum: ${num01 + num02}`);
// output: Sum: 25

console.log(`Subtration: ${num01 - num02}`);
// output: Subtration: -5
```

And the table below shows any operations simbols

| Simbol | Operation |
|--------|-----------|
| +      | sum
| -      | subtration
| *      | multiplication
| /      | division
| **     | exponentiation
| %      | modulus

<br>

## Part 02 - Operations with Arrays 🔖

An array is a special variable, which can hold more than one value!

```javascript
// Create a new array

const newArray = new Array("elem01", "elem02", "elem03"); // way 1

const otherArray = ["elem01", "elem02", "elem03"]; // way 2
```

Also, it's possible to handle elements inside arrays (access, exchange, add, remove, search for elements, etc)

```javascript
const listCars = ["Chevrolet", "Toyota", "Ford", "BMW"];

console.log(`Cars listed: ${listCars}`);
// output: Cars listed: Chevrolet,Toyota,Ford,BMW

listCars.push("Fiat");
console.log(`New cars listed: ${listCars}`);
// output: New cars listed: Chevrolet,Toyota,Ford,BMW,Fiat

listCars[5] = "Jeep";
console.log(`Cars list Updated: ${listCars}`);
// output: Cars list Updated: Chevrolet,Toyota,Ford,BMW,Fiat,Jeep
```

<br>

## Part 03 - Operations with Objects 🔖

In JS, you can say the everything is *Objects*. 

All datas that you handle are objects of any way.

Here we'll see a little bit of Objects. Follow the example below

```javascript
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

const imc = objPeople.IMC();

console.log(objPeople);
/*output:

    {
        name: 'Carlos',
        height: 1.78,
        weight: 62,
        stillActive: true,
        createdAt: 2022-12-13T00:00:00.000Z,
        IMC: [Function: IMC]
    } 
*/

console.log(`\nThe IMC Result is = ${imc}`);
// output: The IMC Result is = 19.568236333796236
```

<br>

## Part 04 - Strings Operations

JavaScript strings are for storing and manipulating text.

See a little of utilities of strings

```javascript
var firstName = "Carlos";
var lastName = "Souza";
var completeName = firstName + " " + lastName;

console.log("\n" + completeName);
// output: Carlos Souza

console.log(`Size of name: ${completeName.length} characters`);
// output: Size of name: 12 characters
```

See any tricks with Strings on table

| Code | Result |
|------|--------|
| \b   | BackSpace |
| \f   | Form Feed |
| \n   | New Line  |
| \r   | Carriage Return |
| \t   | Horizontal Tab  |
| \v   | Vertical Tab    |

<br>

## Part 05 - Operations using *Math.js*

### Math Properties (or *Constants*) Table

|   Propertie   | Return |
|---------------|--------|
| Math.E        | returns Euler's number
| Math.PI       | returns PI
| Math.SQRT2    | returns the square root of 2
| Math.SQRT1_2  | returns the square root of 1/2
| Math.LN2      | returns the natural logarithm of 2
| Math.LN10     | returns the natural logarithm of 10
| Math.LOG2E    | returns base 2 logarithm of E
| Math.LOG10E   | returns base 10 logarithm of E

The syntax for any Math property is: `Math.property`

## Math Methods

It's more easy explain with examples

```javascript
// Returns x rounded to its nearest integer
console.log(Math.round(4.5));

// Returns x rounded up to its nearest integer
console.log(Math.ceil(4.5));

// Returns x rounded down to its nearest integer
console.log(Math.floor(4.5));

// Returns the integer part of x
console.log(Math.trunc(4.5));
```

<br>

## Part 06 - Swith Case code

Use the `switch` statement to select one of many code blocks to be executed.

See the example below for understand better!

```javascript
let day = "";

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        console.log("Error: Invalid date");
}

console.log(`Today is ${day}`);
```

### Links 

1. [Arithmetic Operations](https://www.w3schools.com/js/js_arithmetic.asp)

2. [Intro to Arrays](https://www.w3schools.com/js/js_arrays.asp)

3. [Intro to Objects](https://www.w3schools.com/js/js_objects.asp)

4. [A little bit of Strings](https://www.w3schools.com/js/js_strings.asp)

5. [Methods and Properties Math Object](https://www.w3schools.com/js/js_math.asp)

6. [Math Reference](https://www.w3schools.com/jsref/jsref_obj_math.asp)
