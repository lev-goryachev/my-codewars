`use strict`;

/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 27.10.2023
Description: codewars kata https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
Changes: 27.10.2023 - started
27.10.2023 - done

*/
/* Description

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"


*/
/* Tests

describe("Tests", () => {

  const { strictEqual } = require('chai').assert;

  function doTest(r, g, b, expected) {
      const actual = rgb(r, g, b);
      const message = `for r = ${r} g = ${g} b = ${b}`;
      strictEqual(actual, expected, message);
  }

  it("Sample Tests", () => {
    doTest(  0,   0,   0, '000000');
    doTest(  0,   0, -20, '000000');
    doTest(300, 255, 255, 'FFFFFF');
    doTest(173, 255,  47, 'ADFF2F');
  });
});


*/

// // v1
// function rgb(r, g, b) {
//   const toHex = function (color) {
//     let outputValue = color;
//     if (color < 0) outputValue = 0;
//     if (color > 255) outputValue = 255;
//     return outputValue.toString(16).padStart(2, `0`).toUpperCase();
//   };
//   return `${toHex(r)}${toHex(g)}${toHex(b)}`;
// }

// v2
function rgb(r, g, b) {
  const toHex = (color) => Math.min(255, Math.max(0, color)).toString(16).padStart(2, "0").toUpperCase();
  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}

console.log(`      0, 0, 0 output -->`, rgb(0, 0, 0));
console.log(`      0, 0, -20 output -->`, rgb(0, 0, -20));
console.log(`      300, 255, 255 output -->`, rgb(300, 255, 255));
console.log(`      173, 255, 47 output -->`, rgb(173, 255, 47));
