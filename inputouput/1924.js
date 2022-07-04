const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().split(/\s/);

const x = Number(a);
const y = Number(b);

const DATE = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let acc = y;
for (let i = 0; i < x - 1; i++) {
  acc += DATE[i];
}
console.log(DAY[acc % 7]);
