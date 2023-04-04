# Notes about *Case 02 Methods*

## Part 01 - String Methods

Exists letious methods for handler Strings with JS.

See any these methods below for understand better.

### String `length` Method

Basically return the length/size of the string

```javascript
let textExample = "test example";

console.log(`Size of text: ${textExample.length}`);
// output: Size of text: 12
```

### Extracting String Parts using `slice()`

```javascript
let textExample = "test example";

// from 0 to 6 (with space, on case)
console.log(textExample.slice(0, 6));
// output: test e
```

### Replacing String Content using `replace()`

`replace()` method is case-sensitive!

So, be careful when replacing strings.

```javascript
textExample = "\nThis text will be changed!";

// 1. dont work:
let newText = textExample.replace("Will Be Changed", "was changed!");

// 2. Work:
let newText = textExample.replace("will be changed", "was changed!");

console.log(newText);
// output: This text was changed!!
```

### Converting to Upper and Lower Case

This is so simple! you need only write `toLowerCase()` or `toUpperCase()`

```javascript
let textCase = textExample.toLowerCase();
console.log(textCase);

let textCase = textExample.toUpperCase();
console.log(textCase);
```

And for see more string methods, access the first link on last section!

<br>

## Part 02 - Search Methods

### Search Methods: `indexOf()` and `lastIndexOf()`

Return where the substring begins, but, with a difference:

1. The `indexOf()` method returns the index (position) the **first occurrence** of a substring in a string

2. The `lastIndexOf()` method returns the index (position) the **last occurrence** of a substring in a string

```javascript
let newText = "This is a other string not changed.";

console.log(`Position using indexOf(): ${newText.indexOf("other")}`);
// output: Position using indexOf(): 27

console.log(`Position using lastIndexOf(): ${newText.lastIndexOf("other")}`);
// output: Position using lastIndexOf(): 27

console.log(`Position using indexOf(): ${newText.indexOf("kinda")}`);
// output: Position using lastIndexOf(): -1 -> Not Found (work to lastIndexOf too!)
```

### Method `search()`

The `search()` method searches a string for a string (or a regular expression) and returns the position of the match:

```javascript
let newText = "This is a other string not changed.";

console.log(`Search Result: ${newText.search("changed")}`);
// Search Result: 10 -> Found

console.log(`Search Result: ${newText.search("kinda")}`);
// Search Result: -1 -> Not Found
```

### Method `includes()`

The `includes()` method returns *true* if a string contains a specified value.

```javascript
let newText = "This is a other string not changed.";

console.log(`Search Result: ${newText.includes("string")}`);
// output: Search Result: true

console.log(`Search Result: ${newText.includes("text")}`);
// output: Search Result: false
```

<br>

## Part 03 - Number Methods

These *number methods* can be used on all JavaScript numbers:

| Method | Description |
|--------|-------------|
| toString()        | Returns a number as a string
| toExponential()   | Returns a number written in exponential notation
| toFixed()         | Returns a number written with a number of decimals
| toPrecision()     | Returns a number written with a specified length
| ValueOf()         | Returns a number as a number

Some examples of application of the methods:

```javascript
let num = 3.141578;

console.log(`Rounded Number (toFixed): ${num.toFixed(3)}`);
// output: Rounded Number (toFixed): 3.142

num = 12.151108;

console.log(`Rounded Number (toPrecision): ${num.toPrecision(3)}`);
// output: Rounded Number (toPrecision): 12.2
```

### Converting letiables to Numbers

There are 3 JavaScript methods that can be used to convert a letiable to a number:

| Method | Description |
|--------|-------------|
| Number()      | Returns a number converted from its argument.
| parseFloat()  | Parses its argument and returns a floating point number
| parseInt()    | Parses its argument and returns a whole number

### The `Number()` Method

The `Number()` method can be used to convert JavaScript letiables to numbers:

```javascript
let numTest01 = "1010";
let numTest02 = "number";
let dateTest = "2022-12-12";

console.log(`Method work: ${Number(numTest01)}`);
// output: Method work: 1010

console.log(`Method dont work: ${Number(numTest02)}`);
// output: Method dont work: NaN

// Converted date in milliseconds
console.log(`Converted date in ms: ${Number(new Date(dateTest))}`);
// output: Converted date in ms: 1670803200000
```

### Number Object Methods

These **object methods** belong to the Number object:

| Method | Description |
|--------|-------------|
| Number.isInteger() | Returns true if the argument is an integer
| Number.isSafeInteger() | Returns true if the argument is a safe integer
| Number.parseFloat() | Converts a string to a number
| Number.parseInt() | Converts a string to a whole number

Some examples of application of the methods

```javascript
console.log(`${Number.isInteger(numTest01)}`);
// output: false

console.log(`${Number.parseInt(numTest01)}`);
// output: 1010
```

<br>

## Part 04 - Number Properties

| Property | Description |
|----------|-------------|
| EPSILON           | The difference between 1 and the smallest number > 1.
| MAX_VALUE         | The largest number possible in JavaScript
| MIN_VALUE         | The smallest number possible in JavaScript
| MAX_SAFE_INTEGER  | The maximum safe integer (253 - 1)
| MIN_SAFE_INTEGER  | The minimum safe integer -(253 - 1)
| POSITIVE_INFINITY | Infinity (returned on overflow)
| NEGATIVE_INFINITY	| Negative infinity (returned on overflow)
| NaN               | A "Not-a-Number" value

```javascript
let num = Number.EPSILON;
console.log(`The Epsilon: ${num}`);

let numPositInf = Number.POSITIVE_INFINITY;
console.log(`The positive infinity: ${numPositInf}`);

let numNegatInf = Number.NEGATIVE_INFINITY;
console.log(`The negative infinity: ${numNegatInf}`);
```

### Links

<br>

1. [JS String Methods](https://www.w3schools.com/js/js_string_methods.asp)

2. [JS Search Methods](https://www.w3schools.com/js/js_string_search.asp)

3. [JS Number Methods](https://www.w3schools.com/js/js_number_methods.asp)

4. [JS Number Properties](https://www.w3schools.com/js/js_number_properties.asp)

5. [JS Number Reference](https://www.w3schools.com/jsref/jsref_obj_number.asp)
