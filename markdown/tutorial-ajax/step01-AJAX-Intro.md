# AJAX Introduction

## AJAX Characteristics

AJAX allow the developers do:

° Read data from a Web Server

° Update a Web Pape whitout need of reload page

° Send data to Web Server (on BackGround)

## AJAX Example to simplify

```HTML
<!DOCTYPE html>
<html>
<body>  
<div id="demo">  
	<h2> Let AJAX change this text </h2>
	
	<button type="button" onclick="loadDocs()">
		Change Content
	</button> 
</div>  
</body>
</html>
```

Understand the example above:

1. The HTML page contains a `<div>` section and a `<button>`
2. The `<div>` section is used to display information from a server.
3. The `<button>` calls a function (if it is clicked).

Now, let's create the Function for load datas:

```javascript
function loadDocs() {
	const request = new XMLHttpRequest();
	
	request.onload = function () {
		document.getElementById("demo").innerHTML = this.responseText;
	}

	request.open("GET", "ajaxInfo.txt", true);
	request.send();
}
```

## What is AJAX?

AJAX = **A**synchronous **J**avaScript **A**nd **X**ML.

° A Browser built-in `XMLHttpRequest` object

° JS and HTML DOM (to display and handle data)

## How AJAX Works

![img-ajax](https://www.w3schools.com/js/pic_ajax.gif)

## Modern Browsers (Fetch API)

° Modern Browsers can use **Fetch API** instead of the **XMLHttpRequest Object**.

° The *Fetch API interface allows web browser to make HTTP requests* to web servers.
