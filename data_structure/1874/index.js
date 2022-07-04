const fs = require("fs");
const [n, ...str] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let inputIdx = 0;
let inputs = str.map(Number);
const sequence = Array.from({ length: n }, (_, i) => i + 1);

class Stack {
  #log = "";

  #value = [-1];

  get size() {
    return this.#value.length;
  }

  get top() {
    if (this.size === 0) return -1;

    return this.#value[this.size - 1];
  }

  pop() {
    this.#value.pop();
    this.#log += "-\n";
  }

  push(v) {
    this.#value.push(v);
    this.#log += "+\n";
  }

  get res() {
    if (this.size === 1) {
      return this.#log;
    } else {
      return "NO";
    }
  }
}

const s = new Stack();
for (let i = 0; i < sequence.length; i++) {
  const seq = sequence[i];

  if (seq <= inputs[inputIdx]) {
    s.push(seq);
  }

  while (s.top === inputs[inputIdx]) {
    s.pop();
    inputIdx++;
  }
}

console.log(s.res);
