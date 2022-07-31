const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [size, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = size * 1;
const a = inputs.map((v) => v.split(""));

solve();

function solve() {
  let res = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i + 1 < n) res = Math.max(res, check(swap([i, j], [i + 1, j])));
      if (j + 1 < n) res = Math.max(res, check(swap([i, j], [i, j + 1])));
    }
  }

  console.log(res);
}

function swap([i, j], [i2, j2]) {
  const clonedA = a.map((v) => [...v]);
  const temp = clonedA[i][j];
  clonedA[i][j] = clonedA[i2][j2];
  clonedA[i2][j2] = temp;
  return clonedA;
}

function check(a) {
  let res = 1;
  for (let i = 0; i < n; i++) {
    let cnt = 1;
    for (let j = 1; j < n; j++) {
      if (a[i][j] === a[i][j - 1]) {
        cnt += 1;
      } else {
        cnt = 1;
      }
      res = Math.max(res, cnt);
    }

    cnt = 1;
    for (let j = 1; j < n; j++) {
      if (a[j][i] === a[j - 1][i]) {
        cnt += 1;
      } else {
        cnt = 1;
      }
      res = Math.max(res, cnt);
    }
  }
  return res;
}
