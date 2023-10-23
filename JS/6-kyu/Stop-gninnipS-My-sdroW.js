`use strict`;
/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 19.10.2023
Description: codewars kata https://www.codewars.com/kata/5264d2b162488dc400000001/solutions/javascript
Changes:

*/
/* Task

Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

*/
/* Tests

const chai = require("chai");
const assert = chai.assert;

describe("Spinning words",()=>{
  it("Sample tests",()=>{
    assert.strictEqual(spinWords("Welcome"), "emocleW");
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(spinWords("This is a test"), "This is a test");
    assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
    assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
    assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
    assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
  });
});
*/

//
//    my solution
// const reverse = function (arr) {
//   const newArrRev = [];
//   for (const letter of arr) {
//     newArrRev.unshift(letter);
//   }
//   return newArrRev.join(``);
// };

// function spinWords(string) {
//   const newArr = [];
//   for (let word of string.split(` `)) {
//     word.length >= 5 ? newArr.push(reverse(word)) : newArr.push(word);
//   }
//   return newArr.join(` `);
// }
//

//
// best solution on codewars
function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}
//
//

// console.log(spinWords("Welcome") === "emocleW");
// console.log(spinWords("Hey fellow warriors") === "Hey wollef sroirraw");
// console.log(spinWords("This is a test") === "This is a test");
// console.log(spinWords("This is another test") === "This is rehtona test");
// console.log(
//   spinWords("You are almost to the last test") ===
//     "You are tsomla to the last test"
// );
// console.log(
//   spinWords("Just kidding there is still one more") ===
//     "Just gniddik ereht is llits one more"
// );
// console.log(
//   spinWords("Seriously this is the last one") ===
//     "ylsuoireS this is the last one"
// );
