// For HTML (Events JS on HTML):

// For function clickHere()
function clickHere() {
    document.getElementById("demo").innerHTML = "Text Changed!";
}

// For test delete text
function toggleText() {
    document.write("Text Deleted!");
}

// JS Modules:

import sum from "../useCases/case07Classes/case26Classes.js";

console.log(`\nThe sum result is: ${sum(1, 5)}\n`);

// JSON:

let text = '{ "employess": [' + 
'{ "firstName": "Carlos", "occupation": "Software Developer"},' +
'{ "firstName": "Vinicius", "occupation": "Software Engineer"} ]}';

const textJSON = JSON.parse(text);

console.log(textJSON);
