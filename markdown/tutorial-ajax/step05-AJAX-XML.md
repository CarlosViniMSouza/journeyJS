# AJAX XML Example

AJAX can be used for interactive communication with an XML file.

```javascript
function loadDoc() {
    const request = new XMLHttpRequest();

    request.onload = function() {myFunction(this);}
    request.open("GET", "cd_catalog.xml");
    request.send();
}

function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const response = xmlDoc.getElementsByTagName("CD");

    let table="<tr> <th>Artist</th> <th>Title</th> </tr>";
    
    for (let i = 0; i < response.length; i++) {
        table += "<tr><td>" +
        response[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "</td><td>" +
        response[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "</td></tr>";
    }
    
    document.getElementById("demo").innerHTML = table;
}
```

Explaining:

1. The `loadDoc()` function creates an `XMLHttpRequest` object, adds the function to be executed when the server response is ready, and sends the request off to the server.

2. When the server response is ready, an HTML table is built, nodes (elements) are extracted from the XML file.

3. And it finally, updates the element "demo" with the HTML table filled with XML data:
