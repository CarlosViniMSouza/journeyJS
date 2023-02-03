/** 

    JS methods are actions that can be performed on objects!

    A "JavaScript method" is a property containing a "function definition".

    Example:

    | Property	|   Value    |
    |-----------|------------|
    | firstName	|   John     |
    | lastName	|    Doe     |
    |   age	    |     50     |
    | eyeColor	|   blue     |
    | fullName	| function() | -> Here is our Method !

    You access an object method with the following syntax:

    -> objectName.methodName()  // ex.: person.fullName();
*/

const employeeInfos = {
    name: 'John',
    age: 29,
    job: 'SDE III',
    amountWages: 6.5,
    salary: function () {
        return (1320.5 * this.amountWages);
    }
}

console.log(`Your amount is: R$ ${employeeInfos.salary()}`);
