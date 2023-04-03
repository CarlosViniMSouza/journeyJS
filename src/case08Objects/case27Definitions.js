/*
    In JavaScript, almost "everything" is an object:

        1. 'Booleans' can be "objects"  (if defined with the new keyword)
        2. 'Numbers' can be "objects"   (if defined with the new keyword)
        3. 'Strings' can be "objects"   (if defined with the new keyword)
        4. 'Dates' are always "objects"
        5. 'Maths' are always "objects"
        6. 'Regular' expressions are always "objects"
        7. 'Arrays' are always "objects"
        8. 'Functions' are always "objects"
        9. '"Objects"' are always "objects"
    
    All JavaScript values, except primitives, are Objects.

    JavaScript defines '7 types of primitive data types':

        ° string
        ° number
        ° boolean
        ° null
        ° undefined
        ° symbol
        ° bigint
*/

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 37, 
    eyeColor: "blue"
  }
  
const person01 = person;
person01.age = 16;      // Will change both x.age and person.age

console.log(person01.age); // Output: 16

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
