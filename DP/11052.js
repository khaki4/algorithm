const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = Number(inputs[0]);
const prices = inputs[1].split(" ").map(Number);
const d = Array(1001).fill(0);

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    d[i] = Math.max(d[i], d[i - j] + prices[j - 1]);
  }
}
console.log(d[n]);
