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

// Date Get Methods //

// 1. getFullYear() -> returns the year of a date as a four digit number

console.log("\nApplied getFullYear(): " + dateCurrent.getFullYear());

// 2. getMonth() -> returns the month of a date as a number (0-11)

console.log("Applied getMonth(): " + dateCurrent.getMonth());

// 3. getDate() -> returns the day of a date as a number (1-31)

console.log("Applied getDate(): " + dateCurrent.getDate());

// 4. getHours() -> returns the number of hours of a date as a number

console.log("Applied getHours(): " + dateCurrent.getHours());

// link to more Get Methods Date: https://www.w3schools.com/js/js_date_methods.asp

// Date Set Methods //

// 1. setFullYear() -> returns the year of a date as a four digit number

var dateSetTest = new Date();

dateSetTest.setFullYear(2021)
console.log("\nApplied setFullYear(): " + dateSetTest.getFullYear());

// 2. setMonth() -> returns the month of a date as a number (0-11)

dateSetTest.setMonth(10)
console.log("Applied setMonth(): " + dateSetTest.getMonth());

// 3. setDate() -> returns the day of a date as a number (1-31)

dateSetTest.setDate(20)
console.log("Applied setDate(): " + dateSetTest.getDate());

// 4. setHours() -> returns the number of hours of a date as a number

dateSetTest.setDate(20)
console.log("Applied setHours(): " + dateSetTest.getHours());

if (dateCurrent > dateSetTest) {
    console.log(`\n${dateCurrent} is lagger than ${dateSetTest}`);
} else {
    console.log(`\n${dateSetTest} is lagger than ${dateCurrent}`);
}
