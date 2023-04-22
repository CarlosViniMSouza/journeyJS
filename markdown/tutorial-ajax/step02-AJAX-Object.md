# AJAX - The XMLHttpRequest Object

```
The keystone of AJAX is the XMLHttpRequest object.

1. Create an XMLHttpRequest object
2. Define a callback function
3. Open the XMLHttpRequest object
4. Send a Request to a server
```

## The XMLHttpRequest Object

All modern browsers support the `XMLHttpRequest` object.

The `XMLHttpRequest` object can be used to exchange data with a web server behind the scenes. 

This means that it is possible to update parts of a web page, without reloading the whole page.

## Create an XMLHttpRequest Object

```javascript
const variable = new XMLHttpRequest();
```

## Define a CallBack Function

```javascript
request.onload = function () {
    // source code
}
```

## Send a Request

```javascript
request.open("GET", "../../text/ajaxInfo.txt");
request.send();
```

## Access Across Domains

° For security reasons, modern browsers do not allow access across domains.

° This means that both the web page and the XML file it tries to load, must be located on the same server.

## The onload Property

```javascript
request.onload = function () {
    document.getElementById("demo").innerHTML = this.responseText;
}

request.open("GET", "../../text/ajaxInfo.txt");
request.send();
```

## Multiple Callbacks Functions

```javascript
loadDocs("url-01", functionCallback01);
loadDocs("url-02", functionCallback02);

function loadDocs(url, functionCallback) {
    const request = new XMLHttpRequest();

    request.onload = function() {
        functionCallback(this);
    }

    request.open('GET', url);
    request.send();
}

function functionCallback01(request) {
    // Source code
}

function functionCallback02(request) {
    // Source code
}
```

## The `onreadystatechange` Property

| Property | Description |
|----------|-------------|
| onreadystatechange | Defines a function to be called when the readyState property changes
| readyState | Holds the status of the XMLHttpRequest.
| | 0: request not initialized
| | 1: server connection established
| | 2: request received
| | 3: processing request
| | 4: request finished and response is ready
| status | 200: "OK"
| | 403: "Forbidden"
| | 404: "Page not found"
| | For a complete list go to the Http Messages Reference
| statusText | Returns the status-text (e.g. "OK" or "Not Found")
