`use strict`;

/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 19.10.2023
Description: Codewars Kata https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript
Changes:
19.10.2023 - started
19.10.2023 - done

*/
/* Task

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

*/
/* Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
    })
  })


*/
/* Codewars best solution

function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

*/

// v1
// function areYouPlayingBanjo(name) {
//   return name.startsWith(`R`) || name.startsWith(`r`)
//     ? name + " plays banjo"
//     : name + " does not play banjo";
// }

// v2
function areYouPlayingBanjo(name) {
  return name.charAt(0).toLowerCase() === `r`
    ? name + " plays banjo"
    : name + " does not play banjo";
}

console.log(areYouPlayingBanjo(`Adam`) === `Adam does not play banjo`);
console.log(areYouPlayingBanjo(`Paul`) === `Paul does not play banjo`);
console.log(areYouPlayingBanjo(`Ringo`) === `Ringo plays banjo`);
console.log(areYouPlayingBanjo(`bravo`) === `bravo does not play banjo`);
console.log(areYouPlayingBanjo(`rolf`) === `rolf plays banjo`);
