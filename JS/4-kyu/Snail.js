`use strict`;

/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 24.10.2023 
Description: codewars kata https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
Changes: 24.10.2023 - started
25.10.2023 - done

*/
/* Description

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

*/
/* Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(snail([[]]), []);
Test.assertDeepEquals(snail([[1]]), [1]);
Test.assertDeepEquals(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
Test.assertDeepEquals(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
Test.assertDeepEquals(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
});
});

*/

// es2023 solution
snail = function (array) {
  //   console.log(`
  //                --start--`);
  //   console.log(`input -->`, array);
  const final = new Set([1]);
  let reduser = 0;
  let length = array.length - 1; // 4
  if (array.toString() === ``) return [];
  if (array.toString() === `1`) return [1];

  for (let i = 0; i < array.length - 1; i++) {
    // > 00, 01, 02, 03, 04
    array[reduser].forEach(function (el, i, arr) {
      //   console.log(el);
      final.add(el);
    });

    // v 04, 14, 24, 34, 44
    array.forEach(function (el, i, arr) {
      final.add(el[length]);
    });

    // < 44, 43, 42, 41, 40
    array[length].toReversed().forEach(function (el, i, arr) {
      final.add(el);
    });

    // ^ 40, 30, 20, 10, 00
    array.toReversed().forEach(function (el, i, arr) {
      final.add(el[reduser]);
    });

    //
    reduser++;
    length--;
  }
  return [...final.values()];
};

/* solution for older versions of ES

snail = function (array) {
  const final = [];

  while (array.length > 0) {
    // >
    final.push(...array.shift());

    // v
    for (let i = 0; i < array.length; i++) {
      final.push(array[i].pop());
    }

    // <
    if (array.length > 0) {
      final.push(...array.pop().reverse());
    }

    // ^
    const temp = [];
    for (let i = array.length - 1; i >= 0; i--) {
      temp.push(array[i].shift());
    }
    final.push(...temp);
  }

  return final;
};

*/

// tests
console.log(snail([[]]));
console.log([]);

console.log(snail([[1]]));
console.log([1]);

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log([1, 2, 3, 6, 9, 8, 7, 4, 5]);

console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);
console.log([1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);

console.log(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ])
);
console.log([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  35, 36,
]);

console.log(
  JSON.stringify(
    snail([
      [1, 2, 3, 4, 5, 6, 7],
      [24, 25, 26, 27, 28, 29, 8],
      [23, 40, 41, 42, 43, 30, 9],
      [22, 39, 48, 49, 44, 31, 10],
      [21, 38, 47, 46, 45, 32, 11],
      [20, 37, 36, 35, 34, 33, 12],
      [19, 18, 17, 16, 15, 14, 13],
    ])
  ) ===
    JSON.stringify([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
      34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
    ])
);
