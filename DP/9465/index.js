const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [c, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const a = [];

for (let t = 0; t < c; t++) {
  const i = t * 3 + 1;
  a.push(
    zip(
      inputs[i].split(/\s/).map(Number),
      inputs[i + 1].split(/\s/).map(Number)
    )
  );
}

a.forEach((v) => {
  const n = v.length;
  const d = Array.from(Array(n + 1), () => Array(3).fill(0));
  for (let i = 1; i <= n; i++) {
    d[i][0] = Math.max(d[i - 1][0], d[i - 1][1], d[i - 1][2]);
    d[i][1] = Math.max(d[i - 1][0], d[i - 1][2]) + v[i - 1][0];
    d[i][2] = Math.max(d[i - 1][0], d[i - 1][1]) + v[i - 1][1];
  }
  console.log(Math.max(...d[n]));
});

function zip(a, b) {
  const len = a.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    res.push([a[i], b[i]]);
  }
  return res;
}
