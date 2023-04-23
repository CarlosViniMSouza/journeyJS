# AJAX PHP Example

AJAX is used to create more interactive applications.

## Example Explained

```html
<p> Start typing a name in the input field below: </p>
<p> Suggestions: <span id="txtHint"></span> </p>

<form>
    First name: <input type="text" onkeyup="showHint(this.value)">
</form>

<script async defer>
    function showHint(str) {
        if (str.length == 0) {
            document.getElementById("txtHint").innerHTML = "";
            return;
        } else {
            const xmlhttp = new XMLHttpRequest();
            
            xmlhttp.onload = function() {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }

            xmlhttp.open("GET", "../../src/php/gethint.php?q=" + str);
            xmlhttp.send();
        }
    }
</script>
```

1. First, check if the input field is empty (str.length == 0). If it is, clear the content of the txtHint placeholder and exit the function.

2. However, if the input field is not empty, do the following:

    ° Create an XMLHttpRequest object
    
    ° Create the function to be executed when the server response is ready
    
    ° Send the request off to a PHP file (gethint.php) on the server
    
    ° Notice that q parameter is added gethint.php?q="+str
    
    ° The str variable holds the content of the input field

## The PHP File - "gethint.php"

