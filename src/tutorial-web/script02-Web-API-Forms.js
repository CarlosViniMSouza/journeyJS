function myFunctionNum01() {
    const value = document.getElementById("id-01");

    if (!value.checkValidity()) {
        document.getElementById("demo").innerHTML = value.validationMessage;
        // if true -> return 'Please fill out this field.'
    }
}

function myFunctionNum02() {
    let insertText = "value";

    if (document.getElementById("id-02").validity.rangeOverflow) {
        insertText = "Value too large";
    }

    // This doesn't return the expected message!! 
}

function myFunctionNum03() {
    let myText = "value";

    if (document.getElementById("id-03").validity.rangeUnderflow) {
        myText = "Value too small";
    }
}
