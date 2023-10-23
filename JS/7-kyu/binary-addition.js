`use strict`;
/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 17.10.2023
Description: Codwars task https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
Changes: 
    17.10.2023 -- created
    17.10.2023 -- done
*/
/* Task

Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/

// ----- ----- CODE ----- -----
function addBinary(a, b) {
  return (a + b).toString(2);
}

// ----- test data by ChatGPT
console.log(10000000000 == addBinary(512, 512), addBinary(512, 512)); // "10000000000" (512 + 512 = 1024)
console.log(10000 == addBinary(12, 4), addBinary(12, 4)); // "1100" (12 + 4 = 16)
console.log(110110111 == addBinary(2, 437), addBinary(2, 437)); // "110110101" (2 + 437 = 439)
console.log(101000001 == addBinary(65, 256), addBinary(65, 256)); // "100000001" (65 + 256 = 321)
console.log(1111 == addBinary(8, 7), addBinary(8, 7)); // "1111" (8 + 7 = 15)
console.log(11111111 == addBinary(85, 170), addBinary(85, 170)); // "101010101" (85 + 170 = 255)
console.log(110000000000000 == addBinary(16384, 8192), addBinary(16384, 8192)); // "100000000000000" (16384 + 8192 = 24576)
console.log(1000100 == addBinary(18, 50), addBinary(18, 50)); // "1111010" (18 + 50 = 68)
console.log(1010010 == addBinary(32, 50), addBinary(32, 50)); // "1010010" (32 + 50 = 82)
console.log(110001 == addBinary(17, 32), addBinary(17, 32)); // "100001" (17 + 32 = 49)

/* Sample Tests

const Test = require('@codewars/test-compat');

describe("addBinary(1,2)", function() {
  var results1 = addBinary(1,2);
  it("Should return something that isn't falsy", function() {
    Test.expect(results1, "Something is wrong, no results!");
  });
  it("Should return \"11\"", function() {
    Test.assertEquals(results1, "11");
  });
});

*/
