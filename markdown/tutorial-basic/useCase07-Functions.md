# Notes about *Case 07 - Functions*

## Intro to Functions

The rest parameter `(...)` allows a function to treat an indefinite number of arguments as an array:.

See a example:

```javascript
let result = function (...args) {
    let sum = 0;

    for (let arg of args) {
        sum += arg;
    }

    return sum;
}

console.log(`\nThe sum result: ${result(1, 2, 3, 4, 5, 6)}`);
```

JavaScript functions have a built-in object called the `arguments object`.

See a example:

```javascript
let output = sumAll(10, 15, 30, 45, 75);

function sumAll () {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(`\nThe output is ${output}`);
```

## Invocation one Function

### What is **`this`**?

1. In JavaScript, the `this` keyword refers to an object.

2. Which object depends on how `this` is being invoked (used or called).

3. The `this` keyword refers to different objects depending on how it is used:

| Definition |
|------------|
| Methods like `call()`, `apply()`, and `bind()` can refer `this` to any object. |
| In an event, `this` refers to the element that received the event. |
| In a function, in strict mode, `this` is undefined. |
| In a function, `this` refers to the global object. |
| In an object method, `this` refers to the object. |
| Alone, `this` refers to the global object. |

## Call Methods

The 'call()' method is a predefined JS method.

It can be used to invoke (call) a method with an owner object as an argument (parameter).

This example calls the **fullName method** of person, using it on *person1*

```javascript
let person = {
    fullName: function () {
        return this.name + ' ' + this.username;
    }
}

let personInfos01 = {
    name: 'John',
    username: 'Doe',
}

let personInfos02 = {
    name: 'Carlos',
    username: 'Souza',
}

console.log(`\nComplete Name: ${person.fullName.call(personInfos01)}`);

console.log(`Complete Name: ${person.fullName.call(personInfos02)}`);
```
 
The `call()` method can accept arguments:

```javascript
person = {
    fullCitizenship: function(city, country) {
        console.log(`\nHometown: ${city}, ${country}`);
    }
}

person.fullCitizenship.call(personInfos01, "Manaus", "Brazil");
```

## Apply Methods

### Method Reuse

With the `apply()` method, you can write a method that can be used on different objects.

The `apply()` method is similar to the `call()` method.

### The Difference Between call() and apply()
    
1. The `call()` method takes 'arguments separately'.

2. The `apply()` method takes 'arguments as an array'.

```javascript
const person = {
    fullCitinzhesip: function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}
  
const personInfos01 = {
    firstName:"John",
    lastName: "Doe",
}

console.log(person.fullCitinzhesip.apply(personInfos01, ["Manaus", "Brasil"]));
```

### Simulate a Max Method on Arrays:
    
You can find the largest number using the `Math.max()` method

OBS.: Since JS arrays don't have a `max()` method, you can apply the `Math.max()` method instead.

```javascript
console.log(Math.max.apply(Math, [5, 2, 10, 3]));
```

## Bind Method

### Function Borrowing:
    
With the `bind()` method, an object can borrow a method from another object.

In example below, The member object borrows the 'calculate Net Salary' method from the person object:

```javascript
const salaryEmployee = {
    calculate: function () {
        return this.salary - (this.salary * 0.15);
    }
}

const member = {
    fullName: 'Carlos Souza',
    salary: 12000,
}

let infosEmployee = salaryEmployee.calculate.bind(member);
```

## Closures

JavaScript variables can belong to the `local` or `global` scope.

Global variables can be made local (private) with `closures`.

```javascript
const counterConsecutive = (
    function () {
        let counter = 0;

        return function () {
            counter += 1; 
            return counter
        }
    }
)();
  
counterConsecutive();
counterConsecutive(); // called again

console.log(`The final result is ${counterConsecutive()}`);
```

1. This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

2. The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

### Links

1. [Introduction to Functions](https://www.w3schools.com/js/js_function_definition.asp)

2. [Invocation Function](https://www.w3schools.com/js/js_function_invocation.asp)

3. [Call Methods](https://www.w3schools.com/js/js_function_call.asp)

4. [Apply Methods](https://www.w3schools.com/js/js_function_apply.asp)

5. [Bind Methods](https://www.w3schools.com/js/js_function_bind.asp)

6. [Closures](https://www.w3schools.com/js/js_function_closures.asp)
