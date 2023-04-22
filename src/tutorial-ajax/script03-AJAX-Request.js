function showData() {
    const request = new XMLHttpRequest();
    
    request.onload = function () {
        document.getElementById("demo").innerHTML = this.responseText;
    }

    request.open('GET', "../../text/ajaxInfo.txt", true);
    request.send();
}

function senddata() {
    const request = new XMLHttpRequest();
    
    request.onload = function () {
        document.getElementById("demo").innerHTML = this.responseText;
    }

    request.open('POST', "file.txt", true);

    request.setRequestHeader(
        "Content-type", 
        "application/x-www-form-urlencoded"
    );

    request.send("firstName=Carlos&lastName=Souza");
}
