const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

let res = "";
inputs.forEach((values) => {
  let cnt = 0;
  const [c, ...arr] = values.split(/\s/).map(Number);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      cnt += GCD(arr[i], arr[j]);
    }
  }
  res += `${cnt}\n`;
});

console.log(res);

function GCD(a, b) {
  if (b === 0) {
    return a;
  }

  return GCD(b, a % b);
}
