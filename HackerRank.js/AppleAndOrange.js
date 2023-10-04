// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.
// countApplesAndOranges has the following parameter(s):
// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.
// Input Format
// The first line contains two space-separated integers denoting the respective values of  and .
// The second line contains two space-separated integers denoting the respective values of  and .
// The third line contains two space-separated integers denoting the respective values of  and .
// The fourth line contains  space-separated integers denoting the respective distances that each apple falls from point .
// The fifth line contains  space-separated integers denoting the respective distances that each orange falls from point .
// Constraints

// Output Format
// Print two integers on two different lines:
// The first integer: the number of apples that fall on Sam's house.
// The second integer: the number of oranges that fall on Sam's hous

// 7 11 5 15 [ -2, 2, 1 ] [ 5, -6 ]

// const val =  [7, 11, 5, 15 ,[ -2, 2, 1 ], [ 5, -6 ]]
const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apple = [-2, 2, 1];
const oranges = [5, -6];

const findFruiteInsideSamHouse = (s, t, location, fruit) => {
  return fruit
    .map((item) => item + location)
    .filter((val) => val >= s && val <= t).length;
};

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  return 
    findFruiteInsideSamHouse(s, t, a, apple),
    findFruiteInsideSamHouse(s, t, b, oranges),
  
}

const result = countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
console.log(result);
