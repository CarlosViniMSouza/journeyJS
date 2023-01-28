function blockScopeAble() {
    let var1 = 21;
    const var2 = false;

    console.log(`\nContent: ${var1} e ${var2}`);
}

blockScopeAble(); // execute the commands

var varFunction = blockScopeAble();

varFunction; // too execute the commands

// 'this' Keyword:

const infoPeople = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    heigth: 1.78,
    weight: 63.4,
    imc: function () {
        return Math.round(this.weight/(this.heigth * this.heigth));
    }
};

console.log(`\nIMC is: ${infoPeople.imc()}`);
