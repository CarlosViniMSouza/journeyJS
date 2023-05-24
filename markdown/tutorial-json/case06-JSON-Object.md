# What is Object Literals

JSON object literals are surrounded by curly braces `{}`.

JSON object literals contains `key/value` pairs.

Inside the JSON string there is a JSON object literal:

```javascript
{"name": "John", "age": 30, "car": null}
```

## JavaScript Objects

You can create a JavaScript object from a JSON object literal:

```javascript
const myObject = {"name": "John", "age": 30, "car": null};
```

## Accessing Object Values

```javascript
const oneArray = {"name": "John", "age": 30, "car": null};
const otherJSON = JSON.parse(oneArray);

variable = otherJSON.name;
```

## Looping an Object

You can loop through object properties with a for-in loop:

```javascript
const oneArray = {"name": "John", "age": 30, "car": null};
const otherJSON = JSON.parse(oneArray);

let textJSON = "";

for (const key in otherJSON) {
    textJSON += otherJSON[key] + ", ";
}
```
