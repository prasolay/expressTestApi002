"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addition = addition;
exports.multiplicationTable = multiplicationTable;
function addition(a, b) {
  return a + b;
}
function multiplicationTable(toggleNumber) {
  for (let i = 0; i < 10; i++) {
    printNumber(toggleNumber, i);
  }
}
function printNumber(toggleNumber, i) {
  console.log(`${toggleNumber}` + "* " + `${i + 1} = ` + `${(i + 1) * 9}`);
  console.log(`${toggleNumber}` + `*${19 - i + 1} = ` + `${(19 - i + 1) * 9}`);
}
multiplicationTable(2);
//# sourceMappingURL=calculator.js.map
