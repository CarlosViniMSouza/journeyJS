// 1. new Date() -> creates a date object with the current date and time:

const dateNow = new Date();
console.log(dateNow);

// .2 new Date(date string) -> creates a date object from a date string:

var dateCurrent = new Date("2022-12-21");
console.log("\n" + dateCurrent);

// ISO Dates Format

dateCurrent = new Date("2023-04-04T12:00:00Z");
console.log("\nNew Data: " + dateCurrent);

// OBS.: UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).
