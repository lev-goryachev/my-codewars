`use strict`;
/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: codewars kata https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript
Description: 
Changes: 
20.10.2023 - started
21.10.2023 - done

*/
/* Description

Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing 
the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit
 and skipping any digit with a value of zero. In Roman numerals 
 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

*/
/* Tests

const chai = require('chai');
const assert = chai.assert;

describe("solution", function(){
  it ("should handle small numbers", function(){
    assert.strictEqual(solution(1), 'I', '1 should return "I"')
    assert.strictEqual(solution(2), 'II', '2 should return "II"')
    assert.strictEqual(solution(3), 'III', '3 should return "III"')
    assert.strictEqual(solution(4), 'IV', '4 should return "IV"')
    assert.strictEqual(solution(5), 'V', '5 should return "V"')
    assert.strictEqual(solution(9), 'IX', '9 should return "IX"')
    assert.strictEqual(solution(10), 'X', '10 should return "X"')
    assert.strictEqual(solution(11), 'XI', '11 should return "XI"')
    assert.strictEqual(solution(19), 'XIX', '19 should return "XIX"')
    assert.strictEqual(solution(22), 'XXII', '22 should return "XXII"')
    assert.strictEqual(solution(15), 'XV', '15 should return "XV"')
  });
  
  it ("should handle large numbers", function(){
    assert.strictEqual(solution(1000), 'M', '1000 should, "M"')
    assert.strictEqual(solution(1001), 'MI', '1001 should, "MI"')
    assert.strictEqual(solution(1990), 'MCMXC', '1990 should, "MCMXC"')
    assert.strictEqual(solution(2007), 'MMVII', '2007 should, "MMVII"')
    assert.strictEqual(solution(2008), 'MMVIII', '2008 should, "MMVIII"')
  });
});

*/
///////
// v2 console.log(Math.floor(974 / 1000));

///////
// v1
// [M, M, D, C, C, C, C, L, X, X, I, I, I, I]
// const correctedRomanString = romanString
//     .replace(/DCCCC/g, 'CM') // 900
//     .replace(/CCCC/g, 'CD') // 400
//     .replace(/LXXXX/g, 'XC') // 90
//     .replace(/XXXX/g, 'XL') // 40
//     .replace(/VIIII/g, 'IX') // 9
//     .replace(/IIII/g, 'IV') // 4

const library = new Map([
  [1, `I`],
  [5, `V`],
  [10, `X`],
  [50, `L`],
  [100, `C`],
  [500, `D`],
  [1000, `M`],
]);

// done
const cutFirstNumber = function (inputNum) {
  if (inputNum >= 1000) return [library.get(1000), inputNum - 1000];
  if (inputNum >= 500) return [library.get(500), inputNum - 500];
  if (inputNum >= 100) return [library.get(100), inputNum - 100];
  if (inputNum >= 50) return [library.get(50), inputNum - 50];
  if (inputNum >= 10) return [library.get(10), inputNum - 10];
  if (inputNum >= 5) return [library.get(5), inputNum - 5];
  if (inputNum >= 1) return [library.get(1), inputNum - 1];
  if (inputNum === 0) return false;
};

// done
const correctedRomanString = function (romanString) {
  return romanString
    .replace(/DCCCC/g, "CM")
    .replace(/CCCC/g, "CD")
    .replace(/LXXXX/g, "XC")
    .replace(/XXXX/g, "XL")
    .replace(/VIIII/g, "IX")
    .replace(/IIII/g, "IV");
};

function solution(number) {
  const arrPreReplace = [];
  function loop(num) {
    if (!num) return undefined;
    const [romeNum, newNum] = cutFirstNumber(num); // --> [romeNum, newNum]
    arrPreReplace.push(romeNum);
    return loop(newNum);
  }
  loop(number);
  return correctedRomanString(arrPreReplace.join(``));
}

// best from codewars
function solution(number) {
  // convert the number to a roman numeral
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  var ans = "";
  while (number > 0) {
    for (a in roman) {
      if (roman[a] <= number) {
        ans += a;
        number -= roman[a];
        break;
      }
    }
  }
  return ans;
}

/* logic
arr = []

2974 >= 1000? true --> arr.push(M)
[M]
2974-1000 = 1974

1974 >= 1000? true --> arr.push(M)
[M, M]
1974-1000 = 974

974 >= 1000? false
974 >= 500? true --> arr.push(D)
[M, M, D]
974-500 = 474

474 >= 500? False
474 >= 100? True --> arr.push(C)
[M, M, D, C]
474-100 = 374

374 >= 100? true --> arr.push(C)
[M, M, D, C, C]
374-100 = 274

274 >= 100? true --> arr.push(C)
[M, M, D, C, C, C]
274-100 = 174

174 >= 100? true --> arr.push(C)
[M, M, D, C, C, C, C]
174-100 = 74

74 >= 100? false
74 >= 50? true --> arr.push(L)
[M, M, D, C, C, C, C, L]
74-50 = 24

24 >= 50? false
24 >= 10? true --> arr.push(X)
[M, M, D, C, C, C, C, L, X]
24-10 = 14

14 >= 10? true --> arr.push(X)
[M, M, D, C, C, C, C, L, X, X]
14-10 = 4

4 >= 10? false
4 >= 5? false
4 >= 1? true --> arr.push(I)
[M, M, D, C, C, C, C, L, X, X, I]
4-1 = 3

3 >= 1? true --> arr.push(I)
[M, M, D, C, C, C, C, L, X, X, I, I]
3-1 = 2

2 >= 1? true --> arr.push(I)
[M, M, D, C, C, C, C, L, X, X, I, I, I]
2-1 = 1

1 >= 1? true --> arr.push(I)
[M, M, D, C, C, C, C, L, X, X, I, I, I, I]
1-1 = 0

0 >= 1? false --> end
--------


*/
