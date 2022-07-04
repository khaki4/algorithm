const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (const item of arr) {
  const [a, b] = item.split(/\s/);
  console.log(a * 1 + b * 1);
}
