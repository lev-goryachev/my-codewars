`use strict`;

/* About

Author: Lev Goryachev, https://github.com/lev-goryachev
Created On: 31.10.2023
Description: codewars kata https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
Changes: 31.10.2023 - started

*/
/* Description

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

*/
/* Tests

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(formatDuration(1), "1 second");
    assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
    assert.strictEqual(formatDuration(120), "2 minutes");
    assert.strictEqual(formatDuration(3600), "1 hour");
    assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
  });
});

*/
/* // v1, nope
const secInYear = 365 * 24 * 60 * 60;
const secInDay = 24 * 60 * 60;
const secInHour = 60 * 60;
const secInMinute = 60;

function formatDuration(input) {
  console.log("\n", `                -----start`);
  console.log(`input -->`, input);
  //
  //

  if (input == 0) return `now`;
  //
  //

  const years = Math.floor(input / secInYear);
  console.log(`years -->`, years);

  const days = Math.floor((input - years * secInYear) / secInDay);
  console.log(`days -->`, days);

  const hours = Math.floor((input - years * secInYear - days * secInDay) / secInHour);
  console.log(`hours -->`, hours);

  const minutes = Math.floor((input - years * secInYear - days * secInDay - hours * secInHour) / secInMinute);
  console.log(`minutes -->`, minutes);

  const seconds = Math.floor(input - years * secInYear - days * secInDay - hours * secInHour - minutes * secInMinute);
  console.log(`seconds -->`, seconds);

  const mapTemp = new Map([
    [years > 1 ? `years` : `year`, years],
    [days > 1 ? `days` : `day`, days],
    [hours > 1 ? `hours` : `hour`, hours],
    [minutes > 1 ? `minutes` : `minute`, minutes],
    [seconds > 1 ? `seconds` : `second`, seconds],
  ]);
  console.log(mapTemp);
}
*/

// v2
function formatDuration(input) {
  if (input === 0) {
    return "now";
  }

  const timeUnits = [
    { unit: "year", seconds: 365 * 24 * 60 * 60 },
    { unit: "day", seconds: 24 * 60 * 60 },
    { unit: "hour", seconds: 60 * 60 },
    { unit: "minute", seconds: 60 },
    { unit: "second", seconds: 1 },
  ];
  console.log(timeUnits);

  const components = timeUnits.map(({ unit, seconds }) => {
    const value = Math.floor(input / seconds);
    input -= value * seconds;
    return value > 0 ? `${value} ${unit}${value > 1 ? "s" : ""}` : null;
  });
  console.log(components);

  const validComponents = components.filter((component) => component !== null);
  if (validComponents.length === 1) {
    return validComponents[0];
  }

  const lastComponent = validComponents.pop();
  const result = validComponents.join(", ") + " and " + lastComponent;

  return result;
}

////////////////////////////////////
/////////////// Tests
//
// console.log(formatDuration(0), "now");
// console.log(formatDuration(1), "1 second");
// console.log(formatDuration(62), "1 minute and 2 seconds");
// console.log(formatDuration(120), "2 minutes");
// console.log(formatDuration(3600), "1 hour");
// console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
console.log(formatDuration(336645452), "10 years, 264 days, 8 hours, 37 minutes and 32 seconds");
