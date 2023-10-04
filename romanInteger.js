// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const obj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const specialCase = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

const romanToInt = (s) => {
  let num = 0;
  let b = 0
  while(b !== s.length){
    const start = s[b] + s[b + 1];
    if (specialCase[start]) {
      num += specialCase[start];
      b+=2
    } else{
        num += obj[s[b]];
        b+=1
    }
   
  }
  return num
};

const result = romanToInt("MCMXCIV");
console.log(result,'1994')
