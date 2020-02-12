module.exports = function average(...args) {
  const sum = args.reduce((prev, cur) => prev + cur, 0);
  return sum / args.length;
};