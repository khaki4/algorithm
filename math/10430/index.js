const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split(" ");

const A = inputs[0] * 1;
const B = inputs[1] * 1;
const C = inputs[2] * 1;

let res = "";

res += ((A + B) % C) + "\n";
res += (((A % C) + (B % C)) % C) + "\n";
res += ((A * B) % C) + "\n";
res += ((A % C) * (B % C)) % C;

console.log(res);
