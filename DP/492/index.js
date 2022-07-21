const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [limit, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const MAX_VALUE = 1000 * 1000 + 1;
const n = limit * 1;
const a = inputs.map((v) => v.split(/\s/).map(Number));
const d = Array.from(Array(n + 1), () => Array(3).fill(MAX_VALUE));

let ans = MAX_VALUE;
for (let k = 0; k <= 2; k++) {
  for (let j = 0; j <= 2; j++) {
    if (j == k) {
      d[1][j] = a[0][j];
    } else {
      d[1][j] = MAX_VALUE;
    }
  }

  for (let i = 2; i <= n; i++) {
    for (j = 0; j <= 2; j++) {
      if (j === 0) {
        d[i][j] = Math.min(d[i - 1][1], d[i - 1][2]);
      }
      if (j === 1) {
        d[i][j] = Math.min(d[i - 1][0], d[i - 1][2]);
      }
      if (j === 2) {
        d[i][j] = Math.min(d[i - 1][0], d[i - 1][1]);
      }
      d[i][j] += a[i - 1][j];
    }
  }

  for (let j = 0; j <= 2; j++) {
    if (j === k) continue;
    ans = Math.min(ans, d[n][j]);
  }
}

console.log(ans);
