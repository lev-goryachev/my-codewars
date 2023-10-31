`use strict`;

/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 31.10.2023
Description: codewars kata https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
Changes: 31.10.2023 - started

*/
/* Description

Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". 
Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

Going to one direction and coming back the opposite direction right away is a needless effort. 
Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, 
otherwise you might die of thirst!

How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! 
So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:

["WEST"]
or
{ "WEST" }
or
[West]
Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite 
but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions 
removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
See more examples in "Sample Tests:"
Notes
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. 
"NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. 
Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

*/
/* Tests

const chai = require('chai');
chai.config.truncateThreshold = 0;
const deeepEqual = chai.assert.deepEqual;

function doTest (input, expected) {
	const log = `for ${JSON.stringify(input)}\n`;
	const actual = dirReduc(input);
	deeepEqual(actual, expected, log);
}

describe("Tests", () => {
	it("test", () => {
		doTest(
			["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
			["WEST"]
		);
		doTest(
			["NORTH", "WEST", "SOUTH", "EAST"],
			["NORTH", "WEST", "SOUTH", "EAST"]
		);
		doTest(
			["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"],
			[]
		);
	});
});


*/

// (W<->E or S<->N)
// (WEST_EAST)*(EAST_WEST)*(SOUTH_WEST)*(WEST_SOUTH)*
// (_?NORTH_SOUTH_?)|(_?SOUTH_NORTH_?)|(_?WEST_EAST_?)|(_?EAST_WEST_?)

function dirReduc(arr) {
  const arrTemp = [...arr];
  const initialStr = arrTemp.join(`_`);
  //   console.log(initialStr);

  //   debugger;
  const reduc = function (str) {
    if (str.search(/(NORTH_SOUTH_?)|(SOUTH_NORTH_?)|(WEST_EAST_?)|(EAST_WEST_?)/g) !== -1) {
      let newStr = str.replaceAll(/(NORTH_SOUTH_?)|(SOUTH_NORTH_?)|(WEST_EAST_?)|(EAST_WEST_?)/g, ``);
      return reduc(newStr);
    }
    if (str.valueOf() === ``) return [];
    return str.split(`_`);
  };
  return reduc(initialStr).filter((el) => el !== ``);
}

// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"]);
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), []);

console.log(dirReduc(["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"]), ["EAST", "NORTH"]);
console.log(dirReduc(["WEST", "EAST", "NORTH", "SOUTH", "EAST", "SOUTH", "WEST", "EAST", "SOUTH", "NORTH"]), ["EAST", "SOUTH"]);