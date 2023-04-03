/*
    -> Method Reuse

    With the apply() method, you can write a method that can be used on different objects.

    -> The JS 'apply()' Method

    The 'apply()' method is similar to the 'call()' method.

    -> The Difference Between call() and apply()

        1. The call() method takes 'arguments separately'.
        2. The apply() method takes 'arguments as an array'.
*/

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

/* 
    -> Simulate a Max Method on Arrays:
    
    You can find the largest number using the 'Math.max()' method

    OBS.: Since JS arrays don't have a max() method, you can apply the 'Math.max()' method instead.
*/

console.log(Math.max.apply(Math, [5, 2, 10, 3]));
