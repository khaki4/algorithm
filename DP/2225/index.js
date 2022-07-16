// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// const [n, k] = fs
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split(/\s/)
//   .map(Number);

const [n, k] = [20, 2];
const d = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

d[0][0] = 1;
for (let i = 1; i <= k; i++) {
  for (let j = 0; j <= n; j++) {
    for (let l = 0; l <= j; l++) {
      d[i][j] += d[i - 1][j - l];
      d[i][j] %= 1000000000;
    }
  }
}

console.log(d[k][n]);
