// function isPalindrome(x) {
//   let b = x.toString();
//   let g = b.split("").reverse().join("");

//   if (b === g) {
//     return true;
//   }
//   return false;
// }


function isPalindrome (x) {
 x = x.toString()
let arr = []
const len = x.length-1
    for(let i= 0 ; i <= len ;i++){
        if(x[i] == x[len-i]){
          arr.push(i)
        }
    }
    return arr.length  === x.length

};
const result = isPalindrome(2212);
console.log(result);
