# Notes about *Case 06 - Objects*

## Definitions

### Summary

1. In JavaScript, almost "everything" is an object:

    1. `Boolean` can be `objects` *(if defined with the new keyword)*
    
    2. `Numbers` can be `objects` *(if defined with the new keyword)*
    
    3. `Strings` can be `objects` *(if defined with the new keyword)*
    
    4. `Regular Expressions` are always `objects`
    
    5. `Functions` are always `objects`
    
    6. `Objects` are always `objects`
    
    7. `Arrays` are always `objects`
    
    8. `Maths` are always `objects`
    
    9. `Dates` are always `objects`

2. All JavaScript values, except primitives, are Objects.

    1. string
    
    2. number
    
    3. boolean
    
    4. null
    
    5. undefined
    
    6. symbol
    
    7. bigint

```javascript
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 37, 
    eyeColor: "blue"
  }
  
const person01 = person;
person01.age = 16;      // Will change both x.age and person.age

console.log(person01.age); // Output: 16
```

```javascript
// Objects can contain others objects:

const myObj = {
    name: "John",
    username: "Doe",
    objects: {
        "notebook": true,
        "cellphone": true,
        "games": true,
    }
}

console.log(`State for notebooks: ${myObj.objects.notebook}`);
```

## Properties

The syntax for accessing the property of an object is:

```js
objectName.property  // ex.: person.age
```

or

```js
objectName["property"]  // ex.: person["age"]
```

```javascript
let teacher = new Object();

teacher.name = 'Jorge';
teacher.age = 30;
teacher.tools = ['pencil', 'book', 'papers'];

console.log(teacher);
```

## Methods 

### Introduction

JS methods are actions that can be performed on objects!

A `JavaScript method` is a property containing a `function definition`.

| Property	|   Value    |
|-----------|------------|
| firstName	|   John     |
| lastName	|    Doe     |
|   age	    |     50     |
| eyeColor	|   blue     |
| fullName	| function() -> Here is our Method |

You access an object method with the following syntax:

```js
objectName.methodName()  // ex.: person.fullName();
```

See a Example:

```javascript
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
```

### Why Using Getters and Setters?

1. It gives simpler syntax

2. It allows equal syntax for properties and methods

3. It can secure better data quality

4. It is useful for doing things behind-the-scenes

## Constructors

1. Notes:

    It is considered good practice to name constructor functions with an upper-case first letter.

2. About this:

    In a constructor function this does not have a value. 
    
    It is a substitute for the new object.

    The value of this will become the new object when a new object is created.

```javascript
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
```

### Links

1. [Definition Object](https://www.w3schools.com/js/js_object_definition.asp)

2. [Properties Object](https://www.w3schools.com/js/js_object_properties.asp)

3. [Methods Object](https://www.w3schools.com/js/js_object_methods.asp)

4. [Constructors Object](https://www.w3schools.com/js/js_object_constructors.asp)
