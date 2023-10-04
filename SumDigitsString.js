/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

const calculations = (s) => {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const b = s[i].charCodeAt(0) - 96;
    console.log(b,s[i])
    sum += b;
  }
  return sum;
};

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
var getLucky = function (s, k) {
//   if(k > 1){

//     let start = 0
  
//      return  addDigits( calculations(s))
    
//   }else{
//     return  calculations(s)
//   }
let str = '';

for (let char of s) {
  str += char.charCodeAt(0) - 96;
}
while (k && str.length > 1) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  str = sum + '';
  k--;
}
return str;
};

// const b = getLucky('zbax',2)
const b = getLucky("hvmhoasabaymnmsd",1)
// const b = getLucky("leetcode",2)
// const b = getLucky("iiii", 1);
console.log(b)

