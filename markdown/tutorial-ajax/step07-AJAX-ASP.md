# AJAX ASP Example

AJAX is used to create more interactive applications.

## AJAX ASP Example

The following example will demonstrate how a web page can communicate with a web server while a user type characters in an input field:

```html
<p> Start typing a name in the input field below: </p>
<p> Suggestions: <span id="txtHint"></span> </p>

<form>
    First name: <input type="text" onkeyup="showHint(this.value)">
</form>

<script>
    function showHint(str) {
        if (str.length == 0) {
            document.getElementById("txtHint").innerHTML = "";
            return;
        } else {
            const xmlhttp = new XMLHttpRequest();

            xmlhttp.onload = function() {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }

            xmlhttp.open("GET", "gethint.asp?q=" + str);
            xmlhttp.send();
        }
    }
</script>
```

1. First, check if the input field is empty (str.length == 0). If it is, clear the content of the txtHint placeholder and exit the function.

2. However, if the input field is not empty, do the following:

    ° Create an XMLHttpRequest object

    ° Create the function to be executed when the server response is ready

    ° Send the request off to an ASP file (gethint.asp) on the server

    ° Notice that q parameter is added gethint.asp?q="+str

    ° The str variable holds the content of the input field

## The ASP File - "gethint.asp"

[Access the ASP file](https://github.com/CarlosViniMSouza/journeyJS/blob/main/src/others/asp/gethint.asp)
