/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n,memo={}) {
    if(n in memo ) return memo[n]
    if(n == 0 ) return 0
    if(n ===1 ) return 1
    if( n === 2  ) return 1


    memo[n]= tribonacci(n-1,memo)+ tribonacci(n-2,memo)+ tribonacci(n-3,memo)
    return memo[n]


    
};
const answer = tribonacci(36)
console.log(answer)
// 0 1 1 2 3 5 8

// 3 
// 0 + 1 + 1 = 2

// 4
// 1 +  1  + 2  = 4 

// 5
// 1 + 2 + 3 = 6

// 6 
// 2 + 3 + 5 = 10

// Tn+3 = Tn + Tn+1 + Tn+2







