/*
    A callback is a function passed as an argument to another function
    This technique allows a function to call another function
    A callback function can run after another function has finished
*/

/*
    -> Function Sequence
    
    JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
*/

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

/*
    -> Sequence Control
    
    Sometimes you would like to have better control over when to execute a function.
*/

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(5, 5);

console.log(`\nThe result is ${result}`);

/*
    -> JavaScript Callbacks
    
    A callback is a function passed as an argument to another function.
*/

/*
    -> When to Use a Callback?

    Where callbacks really shine are in asynchronous functions, 
    where one function has to wait for another function 
    (like waiting for a file to load).

    Asynchronous functions are covered in the next chapter.
*/
