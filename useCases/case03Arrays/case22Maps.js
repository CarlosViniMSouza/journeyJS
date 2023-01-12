// A Map holds key-value pairs where the keys can be any datatype.

// Example 01:

const newMap01 = new Map([
    ["key1", "value1"], 
    ["key2", "value2"]
]);

console.log(newMap01);

// Example 02:

const newMap02 = new Map();

newMap02.set("key1", "value1");
newMap02.set("key2", "value2");

console.log(newMap02);

// get() method:

console.log("\n"+ newMap01.get("key1"));
console.log(newMap02.get("key2"));

// size() method:

console.log("\nThe map 01 size is: " + newMap01.size);

// For more infos, access: https://www.w3schools.com/js/js_maps.asp
