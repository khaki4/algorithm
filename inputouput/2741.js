let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let num = Number(input);

let answer = "";
for (let i = 1; i <= num; i++) {
  // for 문 안에서 console.log 하면 시간 초과
  answer += i + "\n";
}

console.log(answer);
