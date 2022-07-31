const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const inputs = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const n = 9;
const arr = inputs.sort((a, b) => b - a);
const sum = arr.reduce((a, b) => a + b, 0);
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    if (sum - arr[i] - arr[j] === 100) {
      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue;
        console.log(arr[k]);
      }
      return;
    }
  }
}
