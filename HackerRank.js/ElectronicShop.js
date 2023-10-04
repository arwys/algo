// Example

// The person can buy a , or a . Choose the latter as the more expensive option and return .
// Function Description
// Complete the getMoneySpent function in the editor below.
// getMoneySpent has the following parameter(s):
// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget
// Returns
// int: the maximum that can be spent, or  if it is not possible to buy both items

let keyb = [3, 1],
  driv = [1, 2],
  budget = 3;

function getMoneySpent(keyboards, drives, b) {
  // Sort the arrays in non-decreasing order
  keyboards.sort((a, b) => a - b);
  drives.sort((a, b) => a - b);

  let maxAmountSpent = -1;
  let leftPointer = 0;
  let rightPointer = drives.length - 1;

  while (leftPointer < keyboards.length && rightPointer >= 0) {
    const totalCost = keyboards[leftPointer] + drives[rightPointer];

    if (totalCost <= b) {
      // Update the maximum amount spent if the current combination is affordable
      maxAmountSpent = Math.max(maxAmountSpent, totalCost);

      // Move the left pointer to explore higher keyboard prices
      leftPointer++;
    } else {
      // If the current combination exceeds the budget, move the right pointer to reduce the cost
      rightPointer--;
    }
  }

  return maxAmountSpent;
}

getMoneySpent(keyb, driv, budget);
