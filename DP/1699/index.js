const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = fs.readFileSync(filePath).toString().trim() * 1;

const d = Array(n + 1).fill(100000);
d[0] = 0;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j * j <= i; j++) {
    d[i] = Math.min(d[i], d[i - j * j] + 1);
  }
}

console.log(d[n]);
