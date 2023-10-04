const longestCommonPrefix = function (words) {
  if (!words[0] || words.length == 1) return words[0] || "";
  let i = 0;

  while (words[0][i] && words.every((w) => w[i] === words[0][i])) i++;

  return words[0].substr(0, i);
};


// const data = ["car","abr"]
// const data = ["flower", "flow", "flight"];
// // const dataB =  ["flower","flow","flight"]
// console.log(data == dataB)
const data = ["ab", "a"]

let arr = {};
const longestCommonPrefix = function(arg) {

    const len = arg.length
    if(len <= 1) return arg [0] || ""
    for(let i = 0 ; i <len;i++){
        const child = arg[i]
        for(let j = 0 ;j<child.length;j++ ){
            if(arr[child[j]]?.length > 0 && arg[0][j]===child[j]){
                arr[child[j]] = [...arr[child[j]],child]
            }else{
                arr[child[j]] = [child]
            }

        }

    }
    let value = ""
    for(val in arr){
       if(arr[val].toString() == data.toString())
       value=value+val
    }
      return value.toString()
};



const result = longestCommonPrefix(data);
console.log(result);
