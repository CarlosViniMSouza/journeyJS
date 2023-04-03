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