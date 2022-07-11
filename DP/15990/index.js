const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const mod = 1000000009;
const d = Array.from(Array(100001), () => Array(4).fill(0));

for (let i = 1; i <= 100000; i++) {
  if (i - 1 >= 0) {
    d[i][1] = d[i - 1][2] + d[i - 1][3];

    if (i === 1) {
      d[i][1] = 1;
    }
  }

  if (i - 2 >= 0) {
    d[i][2] = d[i - 2][1] + d[i - 2][3];
    if (i === 2) {
      d[i][2] = 1;
    }
  }

  if (i - 3 >= 0) {
    d[i][3] = d[i - 3][1] + d[i - 3][2];
    if (i === 3) {
      d[i][3] = 1;
    }
  }

  d[i][1] %= mod;
  d[i][2] %= mod;
  d[i][3] %= mod;
}

inputs.map(Number).forEach((v) => {
  console.log(d[v].reduce((a, b) => a + b, 0) % mod);
});
