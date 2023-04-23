function showHint(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        const xmlhttp = new XMLHttpRequest();
        
        xmlhttp.onload = function() {
            document.getElementById("txtHint").innerHTML = this.responseText;
        }
    
        xmlhttp.open("GET", "E:/Programacao/journeyJS/src/others/php/gethint.php?q=" + str);
        xmlhttp.send();
    }
}
