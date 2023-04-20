async function getText() {
    const file = "./text/file.txt";

    let myObject = await fetch(file);
    let myText = await myObject.text();

    return myDisplay(myText);
}
