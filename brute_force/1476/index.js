const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

const D = [15, 28, 19];
let num = 1;

while (true) {
  if (D.every((_d, idx) => ((num - 1) % _d) + 1 === inputs[idx])) {
    break;
  }
  num += 1;
}

console.log(num);
