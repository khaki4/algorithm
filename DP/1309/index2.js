const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = fs.readFileSync(filePath).toString().trim() * 1;
const mod = 9901;
const d = Array(n + 1).fill(0);
const s = Array(n + 1).fill(0);

d[0] = 1;
d[1] = 2;
s[0] = 1;
s[1] = d[0] + d[1];

for (let i = 2; i <= n; i++) {
  d[i] = d[i - 1] + 2 * s[i - 2];
  s[i] = s[i - 1] + d[i];
  d[i] %= mod;
  s[i] %= mod;
}

console.log(s[n]);
