const inputs = process.argv.slice(2);
const result = inputs
  .map(fisrtLetter => fisrtLetter[0])
  .reduce((prev, cur) => prev + cur);
  console.log(`[${inputs}] devient "${result}"`);