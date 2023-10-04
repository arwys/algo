/**
 * @param {number} num
 * @return {number}
 */

const parsing = (arg) => {
  if (arg < 10 && checkIsEven(arg,arg)) return arg;
  const str = arg.toString();
  let start = 0;
  let sum = 0;
  while (start < str.length) {
    sum += parseInt(str[start]);
    start += 1;
  }
  

  return checkIsEven(sum,arg)
};

const checkIsEven = (arg,item) => {
  if (arg % 2 === 0) return item;
  return 0;
};
var countEven = function (num) {
    let counter = 0
  let start = 1;
  while (start <= num) {
    const res = parsing(start);
   if(res !== 0){
    counter++
   }
    start += 1;
  }
 return counter
};
countEven(4);
