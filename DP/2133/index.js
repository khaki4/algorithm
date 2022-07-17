const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = fs.readFileSync(filePath).toString().trim() * 1;
const d = Array(n + 1).fill(0);

d[0] = 1;
d[2] = 3;
for (let i = 4; i <= n; i += 2) {
  d[i] = d[i - 2] * 3;

  for (let j = 4; j <= i; j += 2) {
    d[i] += d[i - j] * 2;
  }
}

console.log(d[n]);
