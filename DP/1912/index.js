const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, inputs] = fs.readFileSync(filePath).toString().trim().split("\n");
const limit = Number(n);
const a = inputs.split(" ").map(Number);
const d = Array(limit).fill(-1001);
d[0] = a[0];

for (let i = 1; i < limit; i++) {
  d[i] = a[i];
  if (a[i] + d[i - 1] > a[i]) {
    d[i] = a[i] + d[i - 1];
  }
}

console.log(Math.max(...d));
