const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (const item of arr) {
}
for (let i = 0; i < n; i++) {
  const [a, b] = arr[i].split(/\s/);
  console.log(`Case #${i + 1}: ${a} + ${b} = ${a * 1 + b * 1}`);
}
