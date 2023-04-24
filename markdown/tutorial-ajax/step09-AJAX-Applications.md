# AJAX XML Applications

This chapter demonstrates some HTML applications using XML, HTTP, DOM, and JavaScript.

## Display XML Data in an HTML Table

```html
<table id="demo"></table>

<script>
    function loadXMLDoc() {
        const request = new XMLHttpRequest();

        request.onload = function() {
            const xmlDoc = request.responseXML;
            const cd = xmlDoc.getElementsByTagName("CD");
            myFunction(cd);
        }

        request.open("GET", "cd_catalog.xml");
        request.send();
    }

    function myFunction(cd) {
        let table = "<tr><th>Artist</th><th>Title</th></tr>";

        for (let i = 0; i < cd.length; i++) {
            table += "<tr><td>" +
            cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "</td><td>" +
            cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td></tr>";
        }

        document.getElementById("demo").innerHTML = table;
    }
</script>
```

## Display the First CD in an HTML div Element

```javascript
const request = new XMLHttpRequest();

request.onload = function() {
    const xmlDoc = request.responseXML;
    const cd = xmlDoc.getElementsByTagName("CD");

    myFunction(cd, 0);
}

request.open("GET", "cd_catalog.xml");
request.send();

function myFunction(cd, i) {
    document.getElementById("showCD").innerHTML =
    "Artist: " +
    cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "<br>Title: " +
    cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "<br>Year: " +
    cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}
```

## Navigate Between the CDs

```javascript
function next() {
    // display the next CD, unless you are on the last CD
    if (i < len-1) {
        i++;
        displayCD(i);
    }
}

function previous() {
    // display the previous CD, unless you are on the first CD
    if (i > 0) {
        i--;
        displayCD(i);
    }
}
```

## Show Album Information When Clicking On a CD

```javascript
function displayCD(i) {
    document.getElementById("showCD").innerHTML =
    "Artist: " +
    cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    "<br>Title: " +
    cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    "<br>Year: " +
    cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}
```
