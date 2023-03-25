/*
    JavaScript variables can belong to the 'local' or 'global' scope.

    Global variables can be made local (private) with 'closures'.
*/

const counterConsecutive = (
    function () {
        let counter = 0;

        return function () {
            counter += 1; 
            return counter
        }
    }
)();
  
counterConsecutive();
counterConsecutive();
counterConsecutive();

console.log(`The final result is ${counterConsecutive()}`);

/*
    1. This is called a JavaScript closure. It makes it possible for a function 
    to have "private" variables.

    2. The counter is protected by the scope of the anonymous function, and 
    can only be changed using the add function.
*/
