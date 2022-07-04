const fs = require("fs");
const nums = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[1]
  .split(/\s/)
  .map(Number);
console.log(Math.min(...nums), Math.max(...nums));
