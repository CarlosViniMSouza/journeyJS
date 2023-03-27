/*
    Functions running in parallel with other functions are called asynchronous

    A good example is JavaScript 'setTimeout()'

    In the real world, callbacks are most often used with asynchronous functions.
*/

/*
    -> Waiting for a Timeout

    When using the JavaScript function setTimeout(), you can specify a callback function 
    to be executed on time-out:
*/

setTimeout(myFunction, 3000);

function myFunction() {
    let count = 0;

    for (let i = 0; i < 1000; i++) {
        count += i;
    }

    return count;
}

/*
    Notes about example above:

    1. myFunction is used as a callback.

    2. myFunction is passed to setTimeout() as an argument.

    3. 3000 is the number of milliseconds before time-out, 
        so myFunction() will be called after 3 seconds.

    Extra: When you pass a function as an argument, remember NOT USE PARENTHESIS
*/

/*
    -> Waiting for Intervals:

    When using the JavaScript function setInterval(), you can specify a callback function 
    to be executed for each interval:
*/

setInterval(myTimeFunction, 1000);

function myTimeFunction() {
    let mySchedule = new Date();

    let arraySchedule = [
        mySchedule.getHours(),
        mySchedule.getMinutes(),
        mySchedule.getSeconds()
    ];

    console.log(`${arraySchedule[0]}:${arraySchedule[1]}:${arraySchedule[2]}`);
}

/*
    -> Callback Alternatives
    
    Advantage: JS programs can start long-running tasks,  and continue running other tasks in paralell.

    Disadvantages: Difficult to write and difficult to debug!

    Also, most modern asynchronous JavaScript methods don't use callbacks!
    Instead, asynchronous programming is solved using 'Promises' instead.
*/
