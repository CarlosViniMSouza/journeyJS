# JavaScript Fetch APIs

## A Fetch API Example

The example below fetches a file and displays the content. See an Example:

```javascript
async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();

    myDisplay(myText);
}
```
