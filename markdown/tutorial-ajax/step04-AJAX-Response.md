# AJAx - Server Response

## Server Response Properties

| Property | Description |
|----------|-------------|
| responseText | get the response data as a string
| responseXML | get the response data as XML data

## The responseText Property

The `responseText` property returns the server response as a JavaScript string, and you can use it accordingly. See an example:

```javascript
document.getElementById('demo').innerHTML = response.responseText;
```

## The responseXML Property

The XMLHttpRequest object has an in-built XML parser.

The `responseXML` property returns the server response as an XML DOM object.

```javascript
const xmlDoc = response.responseXML;
const reqXML = xmlDoc.getElementsByTagName("ARTIST");
let txt = "";

for (let i = 0; i < reqXML.length; i++) {
    txt += reqXML[i].childNodes[0].nodeValue + "<br>";
}

document.getElementById("demo").innerHTML = txt;

response.open("GET", "cd_catalog.xml");
response.send();
```

## Server Response Methods

| Method | Description |
|--------|-------------|
| getResponseHeader() | Returns specific header information from the server resource
| getAllResponseHeaders() | Returns all the header information from the server resource

## The getAllResponseHeaders() Method

The `getAllResponseHeaders()` method returns all header information from the server response.

```javascript
const response = new XMLHttpRequest();

response.onload = function() {
    document.getElementById("demo").innerHTML = this.getAllResponseHeaders();
}

response.open("GET", "ajax_info.txt");
response.send();
```

## The getResponseHeader() Method

The `getResponseHeader()` method returns specific header information from the server response.

```javascript
const response = new XMLHttpRequest();

response.onload = function() {
    document.getElementById("demo").innerHTML = this.getResponseHeader("Last-Modified");
}

response.open("GET", "ajax_info.txt");
response.send();
```
