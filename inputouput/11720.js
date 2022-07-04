const fs = require("fs");
const [_, arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let sum = 0;
for (const n of arr) {
  sum += n * 1;
}
console.log(sum);
