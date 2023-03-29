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
    },
    language: "",
    set idiom(lang) {
        this.language = lang;
    },
    get createPhrase() {
        return `${this.name} is a ${this.job} at Samsung LTA!`;
    }
}

console.log(`Your amount is: R$ ${employeeInfos.salary()}`);

employeeInfos.idiom = "EN-BR";
console.log(`Your language is ${employeeInfos.language}`);

console.log(employeeInfos.createPhrase);

/*
    Why Using Getters and Setters?

    1. It gives simpler syntax
    2. It allows equal syntax for properties and methods
    3. It can secure better data quality
    4. It is useful for doing things behind-the-scenes
*/
