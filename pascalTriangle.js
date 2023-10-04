var generate = function (numRows) {
  let arr = [];

  arr.push([1]); //push as an initial
  for (let i = 1; i < numRows; i++) {
    let copiedArr = [];
    copiedArr.push(1);
    for (let k = 1; k < arr[i-1].length; k++) {
      let sum = arr[i - 1][k - 1] + arr[i - 1][k];
      copiedArr.push(sum);
    }
    copiedArr.push(1)
    arr.push([...copiedArr])
  }
  return arr
};

const max = 5;

const result = generate(max);

console.log(result)


// var generate = function (numRows) {
//   let arr = [];

//   arr.push([1]); //push as an initial
//   for (let i = 1; i < numRows; i++) {
//     let copiedArr = [];
//     copiedArr.push(1);
//     console.log(arr)
//     for (let k = 1; k < arr[i-1].length - 1; k++) {
//       let sum = arr[i - 1][k- 1] + arr[i - 1][k];
//       copiedArr.push(sum);
//     }
//     copiedArr.push(1)
//     arr.push([...copiedArr])
//   }
//   return arr
// };

// const max = 5;

// const result = generate(max);

// console.log(result)
