/*
    -> JavaScript Promise Object

        A JavaScript Promise object contains both the producing code 
        and calls to the consuming code

    -> Promise Object Properties

        A JavaScript Promise object can be:

        1. Pending = (working), the result is undefined.
        2. Fulfilled = the result is a value.
        3, Rejected = the result is an error object.

    -> OBS.:

        1. You cannot access the Promise properties state and result.

        2. You must use a Promise method to handle promises.
*/

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

/*
    Joining callbacks and promises
*/

const myNewPromise = new Promise((resultOK, resultError) => {
    setTimeout(showMessage, 2000);

    function showMessage() {
        const mySold = 2110;
        const theDebit = 2000;

        try {
            return resultOK({ message: 'Returned with sucess!' }) ? (mySold >= theDebit) : resultError({ message: 'Returned with failed' }); 
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
