const data = [];
const data2 = [1, 2, 3];
const data3 = [[1, 2], 3, 4];
const data4 = [
  [1, 2],
  [3, [4, 5], 6],
];

const flattenArray = (arr) => {
  let temp = [];
  if (arr.length == 0) return temp;

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      console.log(element);
      temp = [...temp, ...flattenArray(element)];
    } else {
      temp.push(element);
    }
  });
  return temp;
};

Array.prototype.flatten = function(){

for(let data)

}

data3.flatten();

// console.log(flattenArray(data));
// console.log(flattenArray(data2));
// console.log(flattenArray(data3));
// console.log(flattenArray(data4));
