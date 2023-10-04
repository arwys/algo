const st1 = "{([])}";
//true
const st2 = "{[({[]})]}";
//true
const st3 = "{[(])]}";
//false
const st4 = "[{((([]])))}]";
//false
const st5 = "[{((([]])))]}]";
//false

const st6 = "{}"; 
//true
const st7 = ""; 
//false
const st8 = "[{((([]])))]}][{((([]])))]}]"; 
//false


const obj = {
  "(": ")",
  "{": "}",
  "[": "]",
  "<": ">",
};

const isBracketBalanced = (arg) => {
  const len = arg.length;
  const halfLen = len / 2;
  let leftStartingPoint = halfLen - 1;
  let rightStartingPoint = leftStartingPoint + 1;

  if (len % 2 !== 0 || len == 0) return false;
  let counter = 0;

  while (leftStartingPoint >= 0 && rightStartingPoint <= len - 1) {
    const keys = arg[leftStartingPoint];
    const val = arg[rightStartingPoint];
    const res = obj[keys];
    leftStartingPoint -= 1;
    rightStartingPoint += 1;
    if (res == val) {
      counter += 1;
    }
  }
  if (counter == halfLen) return true;

  return false;
};

const response1 = isBracketBalanced(st1); //true
const response2 = isBracketBalanced(st2); //true
const response3 = isBracketBalanced(st3); // false
const response4 = isBracketBalanced(st4); // false
const response5 = isBracketBalanced(st5); // false
const response6 = isBracketBalanced(st6); // true
const response7 = isBracketBalanced(st7); // false
const response8 = isBracketBalanced(st8); // false
console.log(response1);
console.log(response2);
console.log(response3);
console.log(response4);
console.log(response5);
console.log(response6);
console.log(response7);
console.log(response8);