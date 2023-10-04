const data = [1, 6, 3, 5, 2];
const max = 4;

function hurdleRace(k, height) {
  const theHeights = height.sort((a, b) => b - a)[0];
const max = theHeights - k
 if(max > 0 ) return max 
 return 0
}

console.log(hurdleRace(max, data))
