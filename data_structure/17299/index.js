const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ...inputs] = fs.readFileSync(filePath).toString().trim().split("\n");

const limit = Number(n);
const seq = inputs[0].split(" ").map(Number);
const stack = [0];
const stackTop = () => stack[stack.length - 1];

let res = [];
let freqCnt = [];
for (let i = 0; i < limit; i++) {
  freqCnt[seq[i]] += 1;
}

for (let i = 1; i < limit; i++) {
  while (stack.length !== 0 && freqCnt[seq[i]] > freqCnt[seq[stackTop()]]) {
    res[stackTop()] = seq[i];
    stack.pop();
  }
  if (stack.length === 0) {
    stack.push(i);
  } else if (freqCnt[seq[i]] <= freqCnt[seq[stackTop()]]) {
    stack.push(i);
  }
}

stack.forEach((idx) => {
  res[idx] = -1;
});

console.log(res.join(" "));
