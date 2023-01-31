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

// example
var enginnerStudent = new Student("Carlos", 22, "Software");

enginnerStudent.sendInfos();

// Modules

const sum = (n1, n2) => {
    return n1 + n2;
}

export default sum;
