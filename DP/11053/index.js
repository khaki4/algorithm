const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const seq = inputs.split(" ").map(Number);

const d = Array(Number(n)).fill(0);

for (let i = 0; i < Number(n); i++) {
  for (let j = 0; j < i; j++) {
    if (seq[j] < seq[i]) {
      d[i] = Math.max(d[i], d[j]);
    }
  }
  d[i] += 1;
}

console.log(Math.max(...d));
