

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {

    let arr = s.split(" ")
    const len = arr.length
    const lastIndex = len-1
    let b = []
    let counter = 0
    while (counter < len ){
        if(arr[counter] !== ""){
          b.push(arr[counter])
        }
        counter++
    }
   return b[b.length-1].length
    
};



const data = "luffy is still joyboy"
const result = lengthOfLastWord(data)
console.log(result)