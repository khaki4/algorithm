const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [c, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = c.split(/\s/).map(Number);
const a = inputs.map((v) => v.split(/\s/).map(Number));

let ans = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    // a
    if (j + 3 < m) {
      ans = Math.max(ans, a[i][j] + a[i][j + 1] + a[i][j + 2] + +a[i][j + 3]);
    }
    // b
    if (i + 3 < n) {
      ans = Math.max(ans, a[i][j] + a[i + 1][j] + a[i + 2][j] + a[i + 3][j]);
    }
    // c
    if (i + 1 < n && j + 1 < m) {
      ans = Math.max(
        ans,
        a[i][j] + a[i + 1][j] + a[i][j + 1] + a[i + 1][j + 1]
      );
    }
    // d
    if (i + 2 < n && j + 1 < m) {
      ans = Math.max(
        ans,
        a[i][j] + a[i + 1][j] + a[i + 2][j] + a[i + 2][j + 1]
      );
    }
    // e
    if (i + 2 < n && j + 1 < m) {
      ans = Math.max(
        ans,
        a[i + 2][j] + a[i][j + 1] + a[i + 1][j + 1] + a[i + 2][j + 1]
      );
    }
    // f
    if (i + 1 < n && j + 2 < m) {
      ans = Math.max(
        ans,
        a[i][j] + a[i + 1][j] + a[i + 1][j + 1] + a[i + 1][j + 2]
      );
    }
    // g
    if (i + 1 < n && j + 2 < m) {
      ans = Math.max(ans, a[i][j] + a[i + 1][j] + a[i][j + 1] + a[i][j + 2]);
    }
    // h
    if (i + 1 < n && j + 2 < m) {
      ans = Math.max(
        ans,
        a[i + 1][j] + a[i + 1][j + 1] + a[i + 1][j + 2] + a[i][j + 1]
      );
    }
    // i
    if (i + 1 < n && j + 2 < m) {
      ans = Math.max(
        ans,
        a[i][j] + a[i][j + 1] + a[i][j + 2] + a[i + 1][j + 2]
      );
    }
    // j
    if (i + 2 < n && j + 1 < m) {
      ans = Math.max(ans, a[i][j] + a[i + 1][j] + a[i + 2][j] + a[i][j + 1]);
    }
    // k
    if (i + 2 < n && j + 1 < m) {
      ans = Math.max(
        ans,
        a[i][j] + a[i][j + 1] + a[i + 1][j + 1] + a[i + 2][j + 1]
      );
    }
    // l
    if (i + 2 < n && j + 1 < m) {
      ans = Math.max(
        ans,
        a[i][j] + a[i + 1][j] + a[i + 1][j + 1] + a[i + 2][j + 1]
      );
    }
    // m
    if (i + 2 < n && j + 1 < m) {
      ans = Math.max(
        ans,
        a[i + 1][j] + a[i + 2][j] + a[i][j + 1] + a[i + 1][j + 1]
      );
    }
    // n
    if (i + 1 < n && j + 2 < m) {
      ans = Math.max(
        ans,
        a[i + 1][j] + a[i][j + 1] + a[i + 1][j + 1] + a[i][j + 2]
      );
    }
    // o
    if (i + 1 < n && j + 2 < m) {
      ans = Math.max(
        ans,
        a[i][j] + a[i][j + 1] + a[i + 1][j + 1] + a[i + 1][j + 2]
      );
    }
    // p
    if (i + 1 < n && j + 2 < m) {
      ans = Math.max(
        ans,
        a[i][j + 1] + a[i + 1][j] + a[i + 1][j + 1] + a[i + 1][j + 2]
      );
    }
    // q
    if (i + 1 < n && j + 2 < m) {
      ans = Math.max(
        ans,
        a[i][j] + a[i][j + 1] + a[i][j + 2] + a[i + 1][j + 1]
      );
    }
    // r
    if (i + 2 < n && j + 1 < m) {
      ans = Math.max(
        ans,
        a[i][j + 1] + a[i + 1][j] + a[i + 1][j + 1] + a[i + 2][j + 1]
      );
    }
    // s
    if (i + 2 < n && j + 1 < m) {
      ans = Math.max(
        ans,
        a[i][j] + a[i + 1][j] + a[i + 2][j] + a[i + 1][j + 1]
      );
    }
  }
}

console.log(ans);
