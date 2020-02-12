const numbers = process.argv.slice(2);
const min = Math.min(...numbers)

console.log(`Le minimum de [${numbers}] est ${min}`);