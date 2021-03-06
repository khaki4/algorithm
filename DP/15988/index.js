const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [_, ...inputs] = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number);

const mod = 1000000009;
const d = Array(1000000).fill(0);
d[1] = 1;
d[2] = 2;
d[3] = 4;

let res = "";
for (let i = 4; i <= 1000000; i++) {
  d[i] = d[i - 1] + d[i - 2] + d[i - 3];
  d[i] %= mod;
}

inputs.forEach((v) => (res += `${d[v]}\n`));

console.log(res);
