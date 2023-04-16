function myFunction() {
    const value = document.getElementById("id-01");

    if (!value.checkValidity()) {
        document.getElementById("demo").innerHTML = value.validationMessage;
        // if true -> return 'Please fill out this field.'
    }
}
