# What is JSON.stringify()

Convert a JavaScript Object (JSON in case) into a string with JSON.stringify().

## Stringify a JSON

Imagine we have this object in JavaScript:

```javascript
const myJSON = {name: "John", age: 30, city: "New York"};
```

Use the JavaScript function `JSON.stringify()` to convert it into a string.

```javascript
const myText = JSON.stringify(myJSON);
```

```
The result will be a string following the JSON notation.
```

## Stringify a JavaScript Array

Similar to the previous example, you can do it like this:

```javascript
const myArray = ["fruits", "vagetables", "cheese", "milk"];

const myJSON = JSON.stringify(myArray);
```

```
The result will be a string following the JSON notation.
```

## Exceptions

1. Stringify Dates

    In JSON, date objects are not allowed. All dates is converted into strings.

2. Stringify Functions

    In JSON, functions are not allowed as object values.

    Remove any functions from a JavaScript object, both the key and the value.
