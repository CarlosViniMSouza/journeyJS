/*
    -> Class Inheritance
    
    To create a class inheritance, use the extends keyword.

    A class created with a class inheritance inherits all the methods from another class.
*/

class Car {
    constructor(brand) {
        this.carName = brand;
    }

    myCurrentCar() {
        return 'I have a ' + this.carName;
    }
}
  
class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }

    showCar() {
        return '\n' + this.myCurrentCar() + ', it is a ' + this.model;
    }
}

let myCar = new Model("Ford", "Mustang");

console.log(myCar.showCar());

/*
    The name of the 'getter/setter' method cannot be the same as the name of the property, in this case carname.

    Many programmers use an underscore character _ before the property name to separate the 'getter/setter' from the actual property:
*/

class OtherCar {
    constructor(brand) {
        this._carname = brand;
    }

    get carname() {
        return this._carname;
    }

    set carname(x) {
        this._carname = x;
    }
}
  
myCar = new OtherCar("Ford");
myCar.carname = "Volvo";

console.log(myCar);

/*
    -> Hoisting

    Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

    That means that you must declare a class before you can use it:
*/

//You cannot use the class yet.
//myCar = new Car("Ford") will raise an error.

class Student {
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }

    showStudent() {
        console.log(`\nStudent ID: ${this.id}`);
        console.log(`Student Name: ${this.name}`);
        console.log(`Student Course: ${this.course}`);
    }
}
  
// Now you can use the class:
const student = new Student(2024012551, "Carlos Souza", "Software Eng.");

student.showStudent();
