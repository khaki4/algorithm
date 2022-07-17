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

for (let i = n - 1; i >= 0; i--) {
  for (let j = i + 1; j < n; j++) {
    if (a[i] > a[j]) {
      d[i] = Math.max(d[i], d[j]);
    }
  }
  d[i] += 1;
}

console.log(Math.max(...d));
