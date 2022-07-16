const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [limit, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = limit * 1;
const a = inputs.map((v) => v.split(" ").map(Number));
const d = Array.from(Array(n + 1), () => Array(3).fill(1001));
d[0] = [0, 0, 0];

for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= 2; j++) {
    if (j === 0) {
      d[i][j] = Math.min(d[i - 1][1], d[i - 1][2]) + a[i - 1][j];
    }
    if (j === 1) {
      d[i][j] = Math.min(d[i - 1][0], d[i - 1][2]) + a[i - 1][j];
    }
    if (j === 2) {
      d[i][j] = Math.min(d[i - 1][0], d[i - 1][1]) + a[i - 1][j];
    }
  }
}

console.log(Math.min(...d[n]));
