# Notes about *Case 08 - JS Asyncronous*

## Callbacks in JavaScript

A `callback` is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

### Function Sequence
    
JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.

```javascript
function myDisplayer(message) {
    console.log(message);
}

function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

myFirst();
mySecond();
```

### Sequence Control
    
Sometimes you would like to have better control over when to execute a function.

```javascript
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(5, 5);

console.log(`\nThe result is ${result}`);
```

### JavaScript Callbacks
    
A callback is a function passed as an argument to another function.

### When to Use a Callback?

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

**Asynchronous functions** are covered in the next chapter.

## JS Async

Functions running in parallel with other functions are called asynchronous

A good example is JavaScript `setTimeout()`

In the real world, callbacks are most often used with asynchronous functions.

### Waiting for a Timeout

When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:

```javascript
setTimeout(myFunction, 3000);

function myFunction() {
    let count = 0;

    for (let i = 0; i < 1000; i++) {
        count += i;
    }

    return count;
}
```

Notes about example above:

1. myFunction is used as a callback.

2. myFunction is passed to setTimeout() as an argument.

3. 3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.

Extra: When you pass a function as an argument, remember NOT USE PARENTHESIS

```javascript
setInterval(myTimeFunction, 1000);

function myTimeFunction() {
    let mySchedule = new Date();

    let arraySchedule = [
        mySchedule.getHours(),
        mySchedule.getMinutes(),
        mySchedule.getSeconds()
    ];

    console.log(`
        ${arraySchedule[0]}:
        ${arraySchedule[1]}:
        ${arraySchedule[2]}
    `);
}
```

### Callback Alternatives
    
**Advantage:** JS programs can start long-running tasks,  and continue running other tasks in paralell.

**Disadvantages:** Difficult to write and difficult to debug!

Also, most modern asynchronous JavaScript methods don't use callbacks!

Instead, asynchronous programming is solved using `Promises` instead.

## JS Promises

### JavaScript Promise Object

A JavaScript Promise object contains both the producing code and calls to the consuming code

### Promise Object Properties

A JavaScript Promise object can be:

1. `Pending` = (working), the result is undefined.

2. `Fulfilled` = the result is a value.

3. `Rejected` = the result is an error object.

### OBS.:

1. You cannot access the Promise properties state and result.

2. You must use a Promise method to handle promises.

```javascript
const myPromise = new Promise((myAccept, myReject) => {
    // "Producing Code"

    myAccept(); // when successful
    myReject(); // when error
});

myPromise.then(
    // "Consuming Code"

    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
);
```

Joining callbacks and promises

```javascript
const myNewPromise = new Promise((resultOK, resultError) => {
    setTimeout(showMessage, 2000);

    function showMessage() {
        const mySold = 2110;
        const theDebit = 2000;

        try {
            return resultOK(
                    { message: 'Returned with sucess!' }) ? 
                    (mySold >= theDebit) : 
                    resultError({ message: 'Returned with failed' }
                );
        } catch (err) {
            return { message: err };
        }
    }
});

myNewPromise.then(
    function (value) {
        return value;
    }
);
```

## Async Await in JavaScript

### "`async` and `await` make promises easier to write"

1. `async` makes a function return a Promise

2. `await` makes a function wait for a Promise

The keyword `async` before a function makes the function return a promise:

```javascript
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
```

### Await Syntax

The `await` keyword can only be used inside an async function.

The `await` keyword makes the function pause the execution and wait for a resolved promise before it continues:

```js
let value = await promise; // Example
```

Let's go to a example more complex

```javascript
async function returnMessage() {
    let myPromise = new Promise(function(resolve, reject) {
        resolve("I love You !!");

        reject("Message don\'t Send !!");
    });

    const result = await myPromise;

    return result;
}
  
returnMessage();
```

### Links

1. [Callbacks](https://www.w3schools.com/js/js_callback.asp)

2. [Async](https://www.w3schools.com/js/js_asynchronous.asp)

3. [Promises](https://www.w3schools.com/js/js_promise.asp)

4. [Async Await](https://www.w3schools.com/js/js_async.asp)
