// Complete the countingValleys function in the editor below.
// countingValleys has the following parameter(s):
// int steps: the number of steps on the hike
// string path: a string describing the path
// Returns
// int: the number of valleys traversed
// UDDDUDUU ==> 1 vallyes

const st = "UDDDUDUU";

// _/\      _
//    \    /
//     \/\/
const st1 = "DDUUDDUDUUUD";

let b = 8;

function countingValleys(steps, path) {
    let start = 0;
  let arr = [];
  let result = 0;

  for (let i = 0; i < path.length; i++) {
    const val = path[i];
    if (val == "U") {
      start += 1;
    } else {
      start -= 1;
    }
    if (start === 0 && val == "U") {
      result += 1;
    }
  }
  return result;

}
console.log(countingValleys(st, st.length));
console.log(countingValleys(st1, st1.length));

//             / \
// \ /\      /
// \/  \/ \/
