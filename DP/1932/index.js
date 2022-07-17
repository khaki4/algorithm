const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [limit, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const n = limit * 1;
const a = Array(n).fill(0);
inputs.forEach((v, i) => {
  a[i] = v.split(/\s/).map(Number);
});

const d = Array.from(Array(n), () => Array(n).fill(0));

d[0][0] = a[0][0];

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    if (j === 0) {
      d[i][j] = d[i - 1][j] + a[i][j];
    } else {
      d[i][j] = Math.max(d[i - 1][j - 1], d[i - 1][j]) + a[i][j];
    }
  }
}

console.log(Math.max(...d[n - 1]));
