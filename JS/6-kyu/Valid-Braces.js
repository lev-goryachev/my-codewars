`use strict`;
/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 23.10.2023
Description: codewars kata https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript
Changes: 23.10.2023 - started
24.10.2023 - done

*/
/* Description

Write a function that takes a string of braces, and determines if the order of the braces is valid. 
It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. 
Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

*/
/* Tests

const strictEqual = require('chai').assert.strictEqual;

function doTest (braces, expected) {
	const actual = validBraces(braces);
	strictEqual(actual, expected, `for braces:\n"${braces}"\n`);
}

describe("Tests suite", function() {
  it("sample tests", function() {
	doTest("()))", false);
    doTest("()", true);
    doTest("[]", true);
    doTest("{}", true);
    doTest("(){}[]", true);
    doTest("([{}])", true);
    doTest("(}", false);
    doTest("[(])", false);
    doTest("({})[({})]", true);
    doTest("(})", false);
    doTest("(({{[[]]}}))", true);
    doTest("{}({})[]", true);
    doTest(")(}{][", false);
    doTest("())({}}{()][][", false);
    doTest("(((({{", false);
    doTest("}}]]))}])", false);
  });
});

*/
/* v1 wrong with `(){}[]`
const returnOppositBraces = (input) => {
  input.forEach(function (el, i, arr) {
    el === `)` ? (input[i] = `(`) : undefined;
    el === `]` ? (input[i] = `[`) : undefined;
    el === `}` ? (input[i] = `{`) : undefined;
  });
  return input;
};

function validBraces(braces) {
  console.log(`input -->`, braces);
  if (braces.length % 2 !== 0) return false;

  const firstPart = braces.split(``).slice(0, braces.length / 2);
  console.log(`firstPart`, firstPart);

  const secondPart = braces.split(``).slice(braces.length / 2);
  console.log(`secondPart`, secondPart);
  console.log(`secondPart reverse -->`, secondPart.reverse());
  console.log(`secondPart rOB`, returnOppositBraces(secondPart));

  return firstPart.join(``) === returnOppositBraces(secondPart).join(``);
}
console.log(`validBraces -->`, validBraces(`(){}[]`));
*/

// v2
function validBraces(braces) {
  console.log(`   ---new cicle`);
  console.log(`braces.length`, braces.length > 0);
  // console.log(braces.includes(`()`));
  // console.log(braces.includes(`[]`));
  // console.log(braces.includes(`{}`));
  console.log(`braces.match result`, braces.match(/(\(\)|\[\]|\{\})/g));
  console.log(braces.match(/(\(\)|\[\]|\{\})/g) !== null);
  // debugger;

  // const goNext = braces.length > 0 && braces.includes(`()`) && braces.includes(`[]`) && braces.includes(`{}`);
  const goNext = braces.length > 0 && braces.match(/(\(\)|\[\]|\{\})/g) !== null;
  console.log(`gonext`, goNext);
  const emptyStr = braces.length === 0;
  console.log(`emptyStr`, emptyStr);
  // if any pairs?
  // console.log(`tempStr.length > 0       -->`, tempStr.length > 0);
  // console.log(`tempStr.includes('()')   -->`, tempStr.includes(`()`));
  // console.log(`tempStr.includes('[]')   -->`, tempStr.includes(`[]`));
  // console.log(`tempStr.includes('{}')   -->`, tempStr.includes(`{}`));

  if (goNext) {
    let newStr = braces.replaceAll(/(\(\)|\[\]|\{\})/g, ``);
    return validBraces(newStr);
    //find first pair ()/[]/{}
    // delete pair
    // return without that pair, repeat
  }
  if (emptyStr) return true;
  else return false;
}

/* best solution on codewars

function validBraces(braces){
 while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
 return !braces.length;
}

*/

console.log(`{}({})[](){}[]([{}])([{}]) true`, validBraces("{}({})[](){}[]([{}])([{}])"));
console.log(`))(}[(]))(}{][)(}{][ false `, validBraces(`))(}[(]))(}{][)(}{][`));
