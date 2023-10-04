/**
 * @param {number} n
 * @return {number}
 */


 var climbStairs = function(n) {
    if( n ===1 ) return 1
    if(n === 2 ) return 2

    let arr = new Array(n + 1)
    arr[1] = 1
    arr[2] = 2

    
    for(let i = arr[1]+ arr[2];i < arr.length;i++){
        arr[i]= arr[i-1]+ arr[i-2] 
    }
    const result = arr[arr.length-1]
   return result
  




    
};

climbStairs(4)