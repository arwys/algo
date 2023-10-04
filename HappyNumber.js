/**
 * @param {number} n
 * @return {boolean}
//  */
// let temps = 0;
// var isHappy = function (n) {

//   if (n == 1) {
//     return true
//   }else{
//     let temp = 0
//     const str = n.toString()
//     for (let i = 0; i < str.length; i++) {
//         temp = temp + Math.pow(Number(str[i]), 2);
//         const res = temp
//         if (str[i] === str[str.length - 1]) {
//           isHappy(temp);
//         }
//       }

//   }

// };

// const data = 19;
// const b = isHappy(data);
// console.log(b);

const sumOrder = (n) => {
  let sum = 0;
  while (n !== 0) {
    const lastDigit = Math.pow(n%10,2)
    sum += lastDigit;
    n = parseInt(n / 10);
  }
  return sum;
};

var isHappy = function (n) {
    const hashMap = {}
  while (n !== 1 && !hashMap[n]) {
    hashMap[n] = true
    n = sumOrder(n);
  }
  return n == 1;
};

const data = 19;
const b = isHappy(data);
console.log(b);
