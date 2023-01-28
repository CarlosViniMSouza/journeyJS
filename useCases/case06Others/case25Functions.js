function blockScopeAble() {
    let var1 = 21;
    const var2 = false;

    console.log(`\nContent: ${var1} e ${var2}`);
}

blockScopeAble(); // execute the commands

var varFunction = blockScopeAble();

varFunction; // too execute the commands