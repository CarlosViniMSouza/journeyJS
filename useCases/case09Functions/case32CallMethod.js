/*
    The 'call()' method is a predefined JS method.
    It can be used to invoke (call) a method with an owner object as an argument (parameter).

    This example calls the fullName method of person, using it on person1
*/

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

// The 'call()' method can accept arguments:

person = {
    fullCitizenship: function(city, country) {
        console.log(`\nHometown: ${city}, ${country}`);
    }
}

person.fullCitizenship.call(personInfos01, "Manaus", "Brazil");
