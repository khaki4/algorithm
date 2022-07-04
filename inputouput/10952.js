const fs = require("fs");
const arr = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (const item of arr) {
  const [a, b] = item.split(/\s/);
  const res = a * 1 + b * 1;
  if (res === 0) {
    break;
  }
  console.log(a * 1 + b * 1);
}
