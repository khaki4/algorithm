let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

const N = Number(input);

let answer = "";
for (let i = 1; i <= 9; i++) {
  answer += `${N} * ${i} = ${N * i}` + "\n";
}

console.log(answer);
