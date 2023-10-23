`use strict`;
/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 21.10.2023
Description: codewars kata https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
Changes: 
21.10.2023 - started
23.10.2023 - done

*/
/* Description

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/
/* Tests

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
});
});

*/

// my solution
const modifyWord = function (word) {
  return word.slice(1) + word.at(0) + `ay`;
};

function pigIt(str) {
  return str.replace(/(\w{1,})/g, (match) => modifyWord(match));
}

//
// best solution from codewars
function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}

console.log(pigIt("Pig latin is cool") === "igPay atinlay siay oolcay", pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
console.log(pigIt("This is my string") === "hisTay siay ymay tringsay", pigIt("This is my string"), "hisTay siay ymay tringsay");
