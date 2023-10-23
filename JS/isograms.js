`use strict`;

/* Task
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true 
"aba" --> false 
"moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/
/* Best solution

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

*/
/* Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    assert.strictEqual( isIsogram("isogram"), true );
    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.strictEqual( isIsogram("isIsogram"), false );
    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
  });
});

*/

function isIsogram(str) {
  return str.toLowerCase().split(``).length ===
    new Set(str.toLowerCase().split(``)).size
    ? true
    : false;
}

console.log(isIsogram(`Dermatoglyphics`));
console.log(isIsogram(`isogram`));
console.log(isIsogram(`aba`));
console.log(isIsogram(`moOse`));
console.log(isIsogram(`isIsogram`));
console.log(isIsogram(``));
