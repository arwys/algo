/**
 * @param {number[]} digits
 * @return {number[]}
 */

// function checkDigit(a) {
//   let num = 1;
//   let zero = "0";
//   if (a < 2) {
//     return num;
//   } else {
//     return Number(num.toString() + zero.repeat(a - 1));
//   }
// }
// var plusOne = function (digits) {
//   let arr = [];

//   let counter = 0;
//   let digitNumber = digits.length;
//   let number = 0;

//   while (counter < digits.length) {

//     number += digits[counter] * checkDigit(digitNumber);
//     console.log(digits[counter])
//     console.log(number)
//     counter++;
//     digitNumber -= 1;
//   }
//   const result = number + 1;
//   for (let i of result.toString()) {
//     arr.push(Number(i));
//   }
//   return arr;
// };
// const data = [9,9]

var plusOne = (digits) => {
  for (let i = digits.length -1 ; i >= 0; i --) {
    if (digits[i] < 9) {
      digits[i] = digits[i]+1
      return digits
    } else {
      digits[i] = 0;
    }
  }
digits.unshift(1);
return digits
};
// const data = [4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
const data = [4, 3, 2, 1];
// const data = [1, 2, 4];
const response = plusOne(data);
console.log(response);
