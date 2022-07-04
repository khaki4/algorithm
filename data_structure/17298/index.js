const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const seq = inputs[0].split(" ").map(Number);
const stack = [0];
let res = [];

const stackTop = () => stack[stack.length - 1];

for (let i = 1; i < Number(n); i++) {
  while (stack.length !== 0 && seq[i] > seq[stackTop()]) {
    res[stackTop()] = seq[i];
    stack.pop();
  }
  if (stack.length === 0) {
    stack.push(i);
  } else if (seq[i] <= seq[stackTop()]) {
    stack.push(i);
  }
}

stack.forEach((idx) => {
  res[idx] = -1;
});

console.log(res.join(" "));
