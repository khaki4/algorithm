const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = fs.readFileSync(filePath).toString().trim() * 1;
const mod = 9901;
const d = Array.from(Array(n + 1), () => Array(3).fill(0));
d[0] = [1, 0, 0];

for (let i = 1; i <= n; i++) {
  d[i][0] = d[i - 1][0] + d[i - 1][1] + d[i - 1][2];
  d[i][0] %= mod;
  d[i][1] = d[i - 1][0] + d[i - 1][2];
  d[i][1] %= mod;
  d[i][2] = d[i - 1][0] + d[i - 1][1];
  d[i][2] %= mod;
}

console.log(d[n].reduce((a, b) => a + b, 0) % mod);
