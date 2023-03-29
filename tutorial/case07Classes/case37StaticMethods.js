/*
    Static class methods are defined on the class itself.

    You cannot call a static method on an object, only on an object class.
*/

class User {
    constructor(name) {
        this.name = name;
    }

    static sayHello() {
        return 'Hello ' + this.name;
    }
}

console.log(User.sayHello());

// This will raise an error
const user = new User("carlos");

console.log(user.sayHello());
// TypeError: user.sayHello is not a function
