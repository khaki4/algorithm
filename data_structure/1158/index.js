const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim();

const [N, K] = inputs.split(" ").map(Number);
const seq = Array.from({ length: N }, (_, i) => i + 1);

res = [];
let cnt = 1;
while (seq.length > 0) {
  (cnt % K === 0 ? res : seq).push(seq.shift());
  cnt += 1;
}
console.log(`<${res.join(", ")}>`);
