# Notes about *Case 04 - Loops*

## Loops `for`

This is the traditional loop! And too the more simple.

Loops are handy, if you want to run the same code over and over again, each time with a different value.

```javascript
for (var i = 0; i < 5; i++) {
    console.log(`Number: ${i}`);
}
/* output:
    1
    2
    3
    4
*/
```

## Loop `in`

The JS *for in* statement loops through the **properties of an Object**.

```javascript
const people = {
    name: "John",
    email: "johndoe@gmail.com",
    age: 22,
    active: false,
}

for (let data in people) {
    console.log(data); // access the keys
}
/* output:
    name
    email
    age
    active
*/

for (let data in people) {
    console.log(people[data]); // access the values from keys
}
/* output:
    John
    johndoe@gmail.com
    22
    false
*/
```

And the *for in* statement can also loop over the properties of an Array

```javascript
const arrayNums = [1, 12, 31, 46];

for (let value in arrayNums) {
    console.log(arrayNums[value]);
}
/* output:
    1
    12
    31
    46
*/
```

<br>

## Loop `Of`

The JS *for of* statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, etc.

```javascript
const cars = ['\ncorolla', '\nford', '\nvowks'];
let txtCars = '';

for (let i of cars) {
    txtCars += i;
}

console.log(txtCars);
/* output:
    corolla
    ford
    vowks
*/
```

<br>

## Loop `While`

The *while loop* loops through a block of code as long as a specified condition is true.

```javascript
// Example 01
let count = 5;

while (count >= 1) {
    console.log('Qtd for stop: ' + count);
    count -= 1;
}

console.log('\n');
/* output:
    Qtd for stop: 5
    Qtd for stop: 4
    Qtd for stop: 3
    Qtd for stop: 2
    Qtd for stop: 1
*/
```

```javascript
// Example 02
let arrayNames = ['Carlos', 'David', 'Saile', 'Rafael'];
let i = 1; // our count for this case

while (i <= arrayNames.length) {
    console.log(`Number: ${i} | Student: ${arrayNames[i - 1]}`);
    i += 1;
}
/* output:
    Number: 1 | Student: Carlos
    Number: 2 | Student: David
    Number: 3 | Student: Saile
    Number: 4 | Student: Rafael
*/
```

<br>

### Links

<br>

1. [for Loops](https://www.w3schools.com/js/js_loop_for.asp)

2. [for In Loops](https://www.w3schools.com/js/js_loop_forin.asp)

3. [for Of Loops](https://www.w3schools.com/js/js_loop_forof.asp)

4. [While Loop](https://www.w3schools.com/js/js_loop_while.asp)
