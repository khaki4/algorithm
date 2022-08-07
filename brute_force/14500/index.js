const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const channel = inputs[0] * 1;
const brokenNumber = (inputs[2] ?? "-1").split(" ");

let ans = Math.abs(channel - 100);
for (let i = 0; i <= 1000000; i++) {
  if (isBroken(i)) continue;

  ans = Math.min(ans, Math.abs(channel - i) + i.toString().length);
}

console.log(ans);

function isBroken(c) {
  return c
    .toString()
    .split("")
    .some((v) => brokenNumber.includes(v));
}
