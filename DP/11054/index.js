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
const inc = Array(n).fill(1);
const dec = Array(n).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (a[j] < a[i]) {
      inc[i] = Math.max(inc[i], inc[j] + 1);
    }
  }
}
for (let i = n - 1; i >= 0; i--) {
  for (let j = i + 1; j < n; j++) {
    if (a[i] > a[j]) {
      dec[i] = Math.max(dec[i], dec[j] + 1);
    }
  }
}

for (let i = 0; i < n; i++) {
  d[i] = inc[i] + dec[i] - 1;
}
console.log(Math.max(...d));
