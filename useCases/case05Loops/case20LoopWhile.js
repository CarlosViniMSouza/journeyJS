// example 01:

let count = 5;

while (count >= 1) {
    console.log('Qtd for stop: ' + count);
    count -= 1;
}

console.log('\n');

// example 02:

count = 5;

do {
    console.log('Qtd for stop: ' + count);
    count -= 1;
} while (count >= 1);

console.log('\n');

// example 03:

let arrayNames = ['Carlos', 'David', 'Saile', 'Rafael'];

let i = 1; // our count for this case

while (i <= arrayNames.length) {
    console.log(`Number: ${i} | Student: ${arrayNames[i - 1]}`);
    i += 1;
}
