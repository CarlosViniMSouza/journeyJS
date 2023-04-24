function showCustomer(str) {
    if (str == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    }

    const request = new XMLHttpRequest();
    
    request.onload = function() {
        document.getElementById("txtHint").innerHTML = this.responseText;
    }
    
    request.open("GET", "../others/php/getcustomer.php?q="+str);
    request.send();
}
