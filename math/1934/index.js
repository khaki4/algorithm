const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

let res = "";
inputs.forEach((v) => {
  const [A, B] = v.split(" ").map(Number);
  const g = GCD(A, B);

  res += `${LCM(A, B, g)}\n`;
});

console.log(res);

function GCD(a, b) {
  const r = a % b
  if (r === 0) {
    return b;
  }

  return GCD(b, r);
}

function LCM(a, b, g) {
  return (a * b) / g;
}
