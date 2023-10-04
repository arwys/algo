/**
 * @param {number} n
 * @return {number}
 */

/**
 * @param {number} n
 * @return {number}
 */

// var fib = function (n) {
//   if (n == 0) return 0;
//   if (n == 1) return 1;

//   const result = fib(n - 1) + fib(n - 2);
//   return result;
// };

// const data = 6;
// const res = fib(data);
// console.log(res);

var fib = function (n, memo ) {

if(n in memo)  return memo[n]
  if (n == 0) return 0;
  if (n == 1) return 1;

   memo[n] = fib(n - 1,memo) + fib(n - 2,memo);
  return memo[n];
};

const data = 1000;
const res = fib(data,{});
console.log(res)
