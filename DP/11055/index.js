const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [limit, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = limit * 1;
const a = inputs[0].split(/\s/).map(Number);

const d = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (j < i && a[j] < a[i]) {
      d[i] = Math.max(d[i], d[j]);
    }
  }
  d[i] += a[i];
}
console.log(Math.max(...d));
