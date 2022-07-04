const fs = require("fs");
const [n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (const item of arr) {
  const [a, b] = item.split(",");
  const res = a * 1 + b * 1;

  console.log(a * 1 + b * 1);
}
