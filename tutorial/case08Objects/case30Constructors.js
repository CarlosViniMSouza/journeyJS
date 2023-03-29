/*

    1. Notes:

        It is considered good practice to name constructor functions with an upper-case first letter.

    2. About this:
    
        In a constructor function this does not have a value. 
        It is a substitute for the new object. 
        The value of this will become the new object when a new object is created.
*/

function Person(firstName, lang, age) {
    this.firstName = firstName;
    this.language = lang;
    this.age = age;
}

const personInfos = {
    getInfos: new Person("Carlos", 22, "English"),
    dateBuild: new Date(Date.now())
}

console.log(personInfos.getInfos);
