const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split(" ");
const A = inputs[0] * 1;
const B = inputs[1] * 1;

const g = GCD(A, B);
const l = LCM(A, B, g);
console.log(`${g}\n${l}`);

function GCD(a, b) {
  if (b === 0) {
    return a;
  }

  return GCD(b, a % b);
}

function LCM(a, b, g) {
  return (a * b) / g;
}
