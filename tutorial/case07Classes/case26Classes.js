/*
    -> Using a Class

    When you have a class, you can use the class to create objects.

    -> The Constructor Method

    The constructor method is a special method:

        1. It has to have the exact name "constructor"
        2. It is executed automatically when a new object is created
        3. It is used to initialize object properties
*/

class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    sendInfos() {
        console.log(
            `\nName: ${this.name} \nAge: ${this.age} \nCourse: ${this.course}`
        );
    }
}

const enginnerStudent = new Student("Carlos", 22, "Software");

enginnerStudent.sendInfos();

/** 
    -> "use strict"

    The syntax in classes must be written in "strict mode".

    You will get an error if you do not follow the "strict mode" rules.
*/

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
