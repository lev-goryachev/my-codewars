`use strict`;
/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 19.10.2023
Description: codewars kata https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
Changes: 19.10.2023 started

*/
/* Task

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors
(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' 
(null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

*/
/* Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(divisors(15), [3, 5]);
Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
Test.assertDeepEquals(divisors(13), "13 is prime");
  });
});

*/

// my solution
function divisors(integer) {
  const arr = [];
  for (let i = 2; i < integer; i++)
    Number.isInteger(integer / i) ? arr.push(i) : undefined;
  return arr.length === 0 ? `${integer} is prime` : arr;
}

// best solution on codewars
function divisors(integer) {
  var res = [];
  for (var i = 2; i <= Math.floor(integer / 2); ++i)
    if (integer % i == 0) res.push(i);
  return res.length ? res : integer + " is prime";
}

console.log(divisors(12).toString() === [2, 3, 4, 6].toString());
console.log(divisors(25).toString() === [5].toString());
console.log(divisors(13) === "13 is prime");
console.log(divisors(8).toString() === [2, 4].toString());
console.log(divisors(18).toString() === [2, 3, 6, 9].toString());
console.log(divisors(29) === "29 is prime");
console.log(divisors(6).toString() === [2, 3].toString());
console.log(divisors(28).toString() === [2, 4, 7, 14].toString());
console.log(divisors(30).toString() === [2, 3, 5, 6, 10, 15].toString());
console.log(divisors(17) === "17 is prime");
console.log(divisors(19) === "19 is prime");
console.log(divisors(20).toString() === [2, 4, 5, 10].toString());
console.log(divisors(2) === "2 is prime");
console.log(divisors(3) === "3 is prime");
console.log(divisors(16).toString() === [2, 4, 8].toString());
console.log(divisors(15).toString() === [3, 5].toString());
console.log(divisors(7) === "7 is prime");
console.log(divisors(97) === "97 is prime");
console.log(divisors(36).toString() === [2, 3, 4, 6, 9, 12, 18].toString());
console.log(divisors(99).toString() === [3, 9, 11, 33].toString());
