function loadDocs() {
    const request = new XMLHttpRequest();
    
    request.onload = function () {
        document.getElementById("demo").innerHTML = this.responseText;
    }

    request.open("GET", "../../text/ajaxInfo.html", true);
    request.send();
}
