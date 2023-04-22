# AJAX - XMLHttpRequest

## Send a Request To a Server

To send a request to a server, we use the `open()` and `send()` methods of the `XMLHttpRequest` object:

```javascript
request.open('GET', "../../text/ajaxInfo.txt");
request.send();
```

| Method | Description |
|--------|-------------|
| open(method, url, async) | Specifies the type of request
| | method: the type of request: GET or POST
| | url: the server (file) location
| | async: true (asynchronous) or false (synchronous)
| send() | Sends the request to the server (used for GET)
| send(string) | Sends the request to the server (used for POST)

## The url - A File On a Server

The url parameter of the `open()` method, is an address to a file on a server:

```javascript
request.open("GET", "../../text/ajaxInfo.txt");
```

## Asynchronous - True or False?

Server requests should be sent asynchronously.

The async parameter of the `open()` method should be set to true:

```javascript
request.open("GET", "../../text/ajaxInfo.txt", true);
```

## GET or POST?

`GET` is simpler and faster than `POST`, and can be used in most cases.

However, always use POST requests when:

° A cached file is not an option (update a file or database on the server).

° Sending a large amount of data to the server (POST has no size limitations).

° Sending user input (which can contain unknown characters), POST is more robust and secure than GET.

## GET Request

```javascript
request.open('GET', "demoExampleGET.asp");
request.send();
```

## POST Requests

```javascript
request.open('POST', "demoExamplePOST.asp");
request.send();
```

To POST data like an HTML form, add an HTTP header with `setRequestHeader()`.

Specify the data you want to send in the `send()` method:

```javascript
request.open('POST', "demoExamplePOST.asp");

request.setRequestHeader(
    "Content-type", 
    "application/x-www-form-urlencoded"
);

request.send("firstName=Carlos&lastName=Souza");
```

| Method | Description |
|--------|-------------|
| setRequestHeader(header, value) | Adds HTTP headers to the request
| | header: specifies the header name
| | value: specifies the header value

## Synchronous Request

To execute a synchronous request, change the third parameter in the `open()` method to `false`:

```javascript
request.open('GET', '../../text/ajaxInfo.txt', false);
```
