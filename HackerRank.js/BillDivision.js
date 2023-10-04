// Function Description
// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.
// bonAppetit has the following parameter(s):
// bill: an array of integers representing the cost of each item ordered
// k: an integer representing the zero-based index of the item Anna doesn't eat
// b: the amount of money that Anna contributed to the bill

const bills = [3, 10, 2, 9];
const annaAvoid = 1;
const AnnaMoney = 12;

// 4 1
// 3 10 2 9
// 7

// explanation = "anna didnt paid bills item index 1 [10] so it would be [3, 2, 9] "
// sum all of them 3 + 2 + 9 = 14
// since they need to pay each half = 14/2 = 7
// but anna paid 12 so its has to be minus 7 ==> 12 - 7
// so Bill owes 5 from anna

function bonAppetit(bill, k, b) {
  let total = 0;
  bill.map((num) => (total += num));
  const sumOfAnnaSupposedPay = (total - bill[k]) / 2;

  const billOwesAnna = b - sumOfAnnaSupposedPay;
  if (billOwesAnna === 0) {
    console.log("Bon Appetit");
  } else {
    console.log(billOwesAnna);
  }


  let total = 0;
  for (let i = 0; i < bill.length; i++) {
    total += bill[i];
  }
  const sumOfAnnaSupposedPay = (total - bill[k]) / 2;

  const billOwesAnna = b - sumOfAnnaSupposedPay;
  if (billOwesAnna === 0) {
    console.log("Bon Appetit");
  } else {
    console.log(billOwesAnna);
  }
}
console.log(bonAppetit(bills, annaAvoid, AnnaMoney));
