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
const d2 = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  d[i] = a[i];
  if (i == 0) continue;
  if (d[i] < d[i - 1] + a[i]) {
    d[i] = d[i - 1] + a[i];
  }
}

for (let i = n - 1; i > -1; i--) {
  d2[i] = a[i];
  if (i === n - 1) continue;
  if (d2[i] < d2[i + 1] + a[i]) {
    d2[i] = d2[i + 1] + a[i];
  }
}

let res = Math.max(...d);
for (let i = 1; i < n - 1; i++) {
  res = Math.max(res, d[i - 1] + d2[i + 1]);
}

console.log(res);
