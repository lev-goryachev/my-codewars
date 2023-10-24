`use strict`;

/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 24.10.2023
Description: codewars kata https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
Changes: 24.10.2023 - started
24.10.2023 - done

*/
/* Description

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/
/* Tests

const strictEqual = require("chai").assert.strictEqual;

describe('tests', function() {
  it('should format correctly', function() {
    strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
    strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
    strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
    strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
    strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
    strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
    strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
    strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
    strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
  });
});

*/

function humanReadable(seconds) {
  let h, m, s;
  h = Math.floor(seconds / 3600);
  m = Math.floor((seconds - h * 3600) / 60);
  s = seconds - h * 3600 - m * 60;
  return `${h.toString().padStart(2, `0`)}:${m.toString().padStart(2, `0`)}:${s.toString().padStart(2, `0`)}`;
}

console.log(humanReadable(0), "00:00:00", "humanReadable(0)");
console.log(humanReadable(59), "00:00:59", "humanReadable(59)");
console.log(humanReadable(60), "00:01:00", "humanReadable(60)");
console.log(humanReadable(90), "00:01:30", "humanReadable(90)");
console.log(humanReadable(3599), "00:59:59", "humanReadable(3599)");
console.log(humanReadable(3600), "01:00:00", "humanReadable(3600)");
console.log(humanReadable(45296), "12:34:56", "humanReadable(45296)");
console.log(humanReadable(86399), "23:59:59", "humanReadable(86399)");
console.log(humanReadable(86400), "24:00:00", "humanReadable(86400)");
console.log(humanReadable(359999), "99:59:59", "humanReadable(359999)");
