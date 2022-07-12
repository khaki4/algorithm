const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, inputs] = fs.readFileSync(filePath).toString().trim().split("\n");
const a = inputs.split(" ").map(Number);
const d = Array(Number(n)).fill(1);
const v = Array(Number(n)).fill(-1);

for (let i = 0; i < Number(n); i++) {
  for (let j = 0; j < i; j++) {
    if (a[j] < a[i] && d[j] + 1 > d[i]) {
      d[i] = d[j] + 1;
      v[i] = j;
    }
  }
}
const maxLength = Math.max(...d);
const maxLengthIndex = d.findIndex((v) => v === maxLength);
console.log(maxLength);
go(maxLengthIndex);
function go(p) {
  if (p === -1) return;
  go(v[p]);
  console.log(a[p]);
}
