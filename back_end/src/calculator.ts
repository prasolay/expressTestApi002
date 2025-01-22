export function addition(a: number, b: number): number {
  return a + b;
}

export function multiplicationTable(firsetNumber: number): void {
  //1*9 = 9;
  //19*9 = 162;
  //2*9 = 18;
  //18*9 = 162;
  //...
  //19*9 = 171
  for (let i = 0; i < 11; i++) {
    printNumber(i);
  }
}

function printNumber(i: number): void {
  if (i + 1 !== 19 - i + 1) {
    console.log(`${i + 1}` + "*9 = " + `${(i + 1) * 9}`);
    console.log(`${19 - i + 1}` + "*9 = " + `${(19 - i + 1) * 9}`);
  } else {
    console.log(`${i + 1}` + "*9 = " + `${(i + 1) * 9}`);
  }
}

multiplicationTable(2);
