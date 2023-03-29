/*
    -> "async and await make promises easier to write"

        1. 'async' makes a function return a Promise
        2. 'await' makes a function wait for a Promise

    The keyword 'async' before a function makes the function return a promise:
*/

function returnMessageer(data) {
    console.log(data);
}

async function myFunction() {
    return "Hello User!";
}

myFunction().then(
    function(value) {
        returnMessageer(value);
    }
);

/*
    -> Await Syntax

    The await keyword can only be used inside an async function.

    The await keyword makes the function pause the execution and 
    wait for a resolved promise before it continues:

    Ex.: let value = await promise;

    Let's go to a example more complex
*/

async function returnMessage() {
    let myPromise = new Promise(function(resolve, reject) {
        resolve("I love You !!");

        reject("Message don\'t Send !!");
    });

    const result = await myPromise;

    return result;
}
  
returnMessage();
