# Notes about *Case 05 - Classes*

## Intro to Classes

### Using a Class

When you have a class, you can use the class to create objects.

### The Constructor Method

The constructor method is a special method:

1. It has to have the exact name "constructor"

2. It is executed automatically when a new object is created

3. It is used to initialize object properties


```javascript
class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    sendInfos() {
        console.log(`
        \nName: ${this.name} 
        \nAge: ${this.age} 
        \nCourse: ${this.course}`
        );
    }
}

const enginnerStudent = new Student("Carlos", 22, "Software");

enginnerStudent.sendInfos();
```

### "use strict"

The syntax in classes must be written in "strict mode".

You will get an error if you do not follow the "strict mode" rules.

```javascript
class Car {
    constructor(name, typeCar) {
        this.name = name;
        this.typeCar = typeCar;
    }

    ageCarExists() {
        const date = new Date(); // The rule for working!

        return date.getFulltypeCar() - this.typeCar;
    }
}
```

## Inheritance

### Class Inheritance
    
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class.

```javascript
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
```

The name of the `getter/setter` method cannot be the same as the name of the property, in this case carname.

Many programmers use an underscore character `_` before the property name to separate the `getter/setter` from the actual property:

```javascript
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
```

### Hoisting

Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

That means that you must declare a class before you can use it:

```javascript
/* You cannot use the class yet!

myCar = new Car("Ford") will raise an error.
*/

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
```

<br>

## Static Methods

Static class methods are defined on the class itself.

You cannot call a static method on an object, only on an object class.

```javascript
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
const user = new User("Carlos");

console.log(user.sayHello());
// TypeError: user.sayHello is not a function
```

### Links

1. [Introduction to Class](https://www.w3schools.com/js/js_class_intro.asp)

2. [Inheritance in Class](https://www.w3schools.com/js/js_class_inheritance.asp)

3. [Static Methods in Class](https://www.w3schools.com/js/js_class_static.asp)
