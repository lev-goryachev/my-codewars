`use strict`;
/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 24.10.2023
Description: codewars kata https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
Changes: 24.10.2023 - started
24.10.2023 - done

*/
/* Description

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


*/
/* Tests

const {assert, config} = require("chai");
config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
  });
});

*/

function moveZeros(arr) {
  let arrOther = [];
  let arrZero = [];
  arr.forEach(function (el, _i, _arr) {
    el === 0 ? arrZero.push(el) : arrOther.push(el);
  });
  return [...arrOther, ...arrZero];
}

/* best solution from codewars

var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

var moveZeros = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}

*/

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
