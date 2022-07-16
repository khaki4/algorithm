const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const a = [0, ...inputs];
const d = Array(n + 1).fill(0);
d[1] = a[1];
d[2] = a[1] + a[2];

for (let i = 3; i <= n; i++) {
  d[i] = Math.max(d[i - 3] + a[i - 1] + a[i], d[i - 2] + a[i], d[i - 1]);
}

console.log(d[n]);

/**
 * d[i][j]
 * i 번째 까지 합.
 * j = 0 미선택
 * j = 1 선택
 */
// const a = [0, ...inputs];
// const d = Array.from(Array(n + 1), () => Array(2).fill(0));
// d[1] = [0, a[1]];
// d[2] = [a[1], a[1] + a[2]];

// for (let i = 3; i <= n; i++) {
//   d[i][0] = Math.max(d[i - 1][0], d[i - 1][1]);
//   d[i][1] = Math.max(d[i - 2][0] + a[i - 1], d[i - 2][1]) + a[i];
// }

// console.log(Math.max(...d[n]));
