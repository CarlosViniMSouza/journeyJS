const objPeople = {
    name: "Carlos",
    height: 1.78,
    weight: 62,
    stillActive: true,
    createdAt: new Date("2022-12-13"),
    IMC: function IMC() {
        return this.weight / (this.height ** 2);
    }
};

imc = objPeople.IMC();

console.log(objPeople);

console.log(`\nThe IMC Result is = ${imc}`);

// Strings (manipulate texts)

var firstName = "Carlos";
var lastName = "Souza";
var completeName = firstName + " " + lastName;

console.log("\n" + completeName);
