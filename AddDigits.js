/**
 * @param {number} num
 * @return {number}
 */

// without looop
var addDigits = function (num) {
  if (num < 10) return num;

return ((num - 1) % 9) + 1;

};


// with loop
var addDigits = function (num) {
  if (num < 10) return num;

  let str = num.toString();
  let start = 0;
  let sum = 0;

  while (start < str.length) {
    sum += parseInt(str[start]);
    start += 1;
  }
  return addDigits(sum);
};
const v = addDigits(38);
console.log(v, "res");
