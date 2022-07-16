const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const n = fs.readFileSync(filePath).toString().trim() * 1;
const mod = 10007;
const d = Array.from(Array(n + 1), () => Array(10).fill(0));
d[1] = Array(10).fill(1);

for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = 0; k <= j; k++) {
      d[i][j] += d[i - 1][k];
      d[i][j] %= mod;
    }
  }
}

const res = d[n].reduce((a, b) => (a + b) % mod, 0);

console.log(res);
