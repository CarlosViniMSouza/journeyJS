# What is JSON.parse()

Parse the data with JSON.parse(), and the data becomes a JavaScript object.

## Example - Parsing JSON

Use the JavaScript function JSON.parse() to convert text into a JavaScript object:

```javascript
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
```

```
Make sure the text is in JSON format, or else you will get a syntax error.
```

## Array as JSON

When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

```javascript
const text = '["Ford", "BMW", "Mercedes", "Volkswagen"]'
const myArray = JSON.parse(text)
```

## Exceptions

1. Parsing Dates

    Date objects are not allowed in JSON.

2. Parsing Functions

    Functions are not allowed in JSON.

    `You should avoid using functions in JSON, the functions will lose their scope, and you would have to use eval() to convert them back into functions.`
