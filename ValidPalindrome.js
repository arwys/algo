/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLocaleLowerCase();

  let temp = "";
  for (let i = s.length - 1; i >= 0; i--) {
    temp += s[i];
  }
  return s === temp;
};
const dataB = ["A man, a plan, a canal: Panama"];
const data = ["A man, a plan, a canal: Panama", "race a car", " "];

data.map((i) => isPalindrome(i));

// isPalindrome()
