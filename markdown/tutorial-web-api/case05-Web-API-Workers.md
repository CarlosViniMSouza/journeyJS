# Web Workers API

## What's Web Worker

A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. 

You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.

## Check Web Worker Support

Before creating a web worker, check whether the user's browser supports it:


```javascript
if (typeof(Worker) !== "undefined") {
    // Yes! Web worker support!
    // Some code ...
} else {
    // Sorry! No Web Worker support ...
}
```

## Create a Web Worker File

Here, we create a script that counts. The script is stored in the `case05-Web-API-Workers.js` file:

```javascript
let i = 0;

function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",500);
}

timedCount();
```

## Create a Web Worker Object

```javascript
if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
}
```

## Terminate a Web Worker

```javascript
w.terminate();
```

## Reuse the Web Worker

```javascript
w = undefined;
```

## Web Workers and the DOM

Since web workers are in external files, they do not have access to the following JavaScript objects:

° The window object

° The document object

° The parent object
